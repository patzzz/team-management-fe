import React from "react";

// STYLES
import "./ProjectsStyle.tsx";
import * as Styled from "views/Projects/ProjectsStyle";

// LIBRARIES

// MISC

// REDUX
import { useDispatch } from "react-redux";

// COMPONENTS
import ProjectPreviewCard from "components/ProjectPreviewCard/ProjectPreviewCard";
import { projectsList } from "mocks/projectsMock";
import ModalAtom from "components/Atoms/ModalAtom/ModalAtom";
import ButtonAtom from "components/Atoms/ButtonAtom/ButtonAtom";
import { toggleModalState } from "slices/uiSlice";

const Projects = () => {
  // PROPS

  // CONSTANTS USING LIBRARIES
  const dispatch = useDispatch();

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS
  const handleFilterClick = (event) => {
    // console.log("event", event);
  };
  const handleOpenModal = () => {
    dispatch(toggleModalState({ isVisible: true, content: "projects" }));
  };

  return (
    <Styled.ProjectsContainer>
      <Styled.ProjectsFilterContainer>
        <Styled.ProjectsFilterWrapper>
          <ButtonAtom
            text="Test"
            buttonStyle={"secondary"}
            handleClick={() => handleFilterClick("event1")}
          />
          <ButtonAtom
            text="Test"
            buttonStyle={"secondary"}
            handleClick={() => handleFilterClick("event2")}
          />
          <ButtonAtom
            text="Test"
            buttonStyle={"secondary"}
            handleClick={() => handleFilterClick("event3")}
          />
        </Styled.ProjectsFilterWrapper>
        <ButtonAtom
          text="Add Project"
          buttonStyle={"secondary"}
          handleClick={handleOpenModal}
        />
      </Styled.ProjectsFilterContainer>
      <Styled.ProjectsListWrapper>
        {projectsList?.map((project, index) => {
          return (
            <Styled.ProjectsListElement>
              <ProjectPreviewCard
                project={project}
                key={`project-list--${index}`}
              />
            </Styled.ProjectsListElement>
          );
        })}
      </Styled.ProjectsListWrapper>
      <ModalAtom />
    </Styled.ProjectsContainer>
  );
};

export default Projects;
