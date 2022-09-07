// @ts-nocheck
import React, { useEffect, useState } from "react";

// STYLES
import {
  ProjectsContainer,
  ProjectsListElement,
  ProjectsListWrapper,
} from "./ProjectsStyle";

// LIBRARIES

// MISC
import { ModalContentType, ProjectStatusEnum } from "models/interfaces";

// REDUX
import { toggleModalState } from "slices/uiSlice";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { getProjectsByStatus } from "api/projectApi";
import { projects } from "slices/projectSlice";

// COMPONENTS
import ProjectPreviewCard from "components/ProjectPreviewCard/ProjectPreviewCard";
import ModalAtom from "components/Atoms/ModalAtom/ModalAtom";
import Tabs, { ITabSelection } from "components/Tabs/Tabs";

const Projects = () => {
  // PROPS

  // CONSTANTS USING LIBRARIES
  const dispatch = useAppDispatch();
  const projectsData = useAppSelector(projects);

  // CONSTANTS USING HOOKS
  const [selectedTab, setSelectedTab] = useState<ProjectStatusEnum>(
    ProjectStatusEnum.IN_PROGRESS
  );

  // GENERAL CONSTANTS
  const selections: ITabSelection = [
    {
      title: "In progress",
      selection: ProjectStatusEnum.IN_PROGRESS,
    },
    {
      title: "Pending",
      selection: ProjectStatusEnum.PENDING,
    },
    {
      title: "DONE",
      selection: ProjectStatusEnum.DONE,
    },
  ];

  // USE EFFECT FUNCTION
  useEffect(() => {
    dispatch(getProjectsByStatus(selectedTab));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    dispatch(getProjectsByStatus(selectedTab));
    // eslint-disable-next-line
  }, [selectedTab]);

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS
  const handleFilterClick = (event) => {
    setSelectedTab(event);
  };

  const handleOpenModal = () => {
    dispatch(
      toggleModalState({
        isVisible: true,
        content: ModalContentType.PROJECTS,
        editMode: false,
        tabSelection: selectedTab,
      })
    );
  };

  const handleSelectProject = (project: any) => {
    dispatch(
      toggleModalState({
        isVisible: true,
        content: ModalContentType.PROJECTS,
        editMode: true,
        project,
        tabSelection: selectedTab,
      })
    );
  };

  const handleOpenPersonsModal = (project: any) => {
    dispatch(
      toggleModalState({
        isVisible: true,
        content: ModalContentType.ASSIGNED_PERSONS,
        editMode: true,
        project,
        tabSelection: selectedTab,
      })
    );
  };

  return (
    <ProjectsContainer>
      <Tabs
        selectedTab={selectedTab}
        selections={selections}
        handleSelectTab={handleFilterClick}
        handleOpenModal={handleOpenModal}
      />
      <ProjectsListWrapper>
        {projectsData?.length > 0 &&
          projectsData?.map((project, index) => {
            return (
              <ProjectsListElement>
                <ProjectPreviewCard
                  project={project}
                  onSelect={handleSelectProject}
                  onSelectPersons={handleOpenPersonsModal}
                  key={`project-list--${index}`}
                />
              </ProjectsListElement>
            );
          })}
      </ProjectsListWrapper>
      <ModalAtom />
    </ProjectsContainer>
  );
};

export default Projects;
