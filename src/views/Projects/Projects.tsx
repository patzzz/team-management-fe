import React, { useEffect, useState } from "react";

// STYLES
import {
  ProjectsContainer,
  ProjectsFilterContainer,
  ProjectsFilterWrapper,
  ProjectsListElement,
  ProjectsListWrapper,
} from "./ProjectsStyle";

// LIBRARIES

// MISC
import { ProjectStatusEnum } from "models/interfaces";

// REDUX
import { toggleModalState } from "slices/uiSlice";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { getProjectsByStatus } from "api/projectApi";
import { projects } from "slices/projectSlice";

// COMPONENTS
import ProjectPreviewCard from "components/ProjectPreviewCard/ProjectPreviewCard";
import ModalAtom from "components/Atoms/ModalAtom/ModalAtom";
import ButtonAtom from "components/Atoms/ButtonAtom/ButtonAtom";

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
    dispatch(toggleModalState({ isVisible: true, content: "projects" }));
  };

  return (
    <ProjectsContainer>
      <ProjectsFilterContainer>
        <ProjectsFilterWrapper>
          <ButtonAtom
            text="In progress"
            buttonStyle={"secondary"}
            selected={
              selectedTab === ProjectStatusEnum.IN_PROGRESS ? true : false
            }
            handleClick={() => handleFilterClick(ProjectStatusEnum.IN_PROGRESS)}
          />
          <ButtonAtom
            text="Pending"
            buttonStyle={"secondary"}
            selected={selectedTab === ProjectStatusEnum.PENDING ? true : false}
            handleClick={() => handleFilterClick(ProjectStatusEnum.PENDING)}
          />
          <ButtonAtom
            text="Done"
            buttonStyle={"secondary"}
            selected={selectedTab === ProjectStatusEnum.FINISHED ? true : false}
            handleClick={() => handleFilterClick(ProjectStatusEnum.FINISHED)}
          />
        </ProjectsFilterWrapper>
        <ButtonAtom
          text="Add Project"
          buttonStyle={"secondary"}
          handleClick={handleOpenModal}
        />
      </ProjectsFilterContainer>
      <ProjectsListWrapper>
        {projectsData?.length > 0 &&
          projectsData?.map((project, index) => {
            return (
              <ProjectsListElement>
                <ProjectPreviewCard
                  project={project}
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
