import React from "react";

// STYLES
import "./ProjectsStyle.tsx";
import * as Styled from "views/Projects/ProjectsStyle";

// LIBRARIES

// MISC

// REDUX

// COMPONENTS
import ProjectPreviewCard from "components/ProjectPreviewCard/ProjectPreviewCard";
import { projectsList } from "mocks/projectsMock";
import ModalAtom from "components/Atoms/ModalAtom/ModalAtom";
import ButtonAtom from "components/Atoms/ButtonAtom/ButtonAtom";

const Projects = () => {
  // PROPS

  // CONSTANTS USING LIBRARIES

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  return (
    <Styled.ProjectsContainer>
      <ButtonAtom />
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
      {/*<ModalAtom />*/}
    </Styled.ProjectsContainer>
  );
};

export default Projects;
