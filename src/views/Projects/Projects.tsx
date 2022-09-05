import React, { useState } from "react";

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
import { projectsList } from "mocks/projectsMock";
import { ProjectStatusEnum } from "models/interfaces";

// REDUX
import { useDispatch } from "react-redux";
import { toggleModalState } from "slices/uiSlice";

// COMPONENTS
import ProjectPreviewCard from "components/ProjectPreviewCard/ProjectPreviewCard";
import ModalAtom from "components/Atoms/ModalAtom/ModalAtom";
import ButtonAtom from "components/Atoms/ButtonAtom/ButtonAtom";

const Projects = () => {
  // PROPS

  // CONSTANTS USING LIBRARIES
  const dispatch = useDispatch();

  // CONSTANTS USING HOOKS
  const [selectedTab, setSelectedTab] = useState<ProjectStatusEnum>(
    ProjectStatusEnum.IN_PROGRESS
  );

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

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
        {projectsList?.map((project, index) => {
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
