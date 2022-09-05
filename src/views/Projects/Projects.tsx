import React from "react";

// STYLES
import "./ProjectsStyle.tsx";
import * as Styled from "views/Projects/ProjectsStyle";

// LIBRARIES

// MISC

// REDUX

// COMPONENTS
import ProjectPreviewCard from "components/ProjectPreviewCard/ProjectPreviewCard";
import { projectsList } from "../../mocks/projectsMock";

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
    </Styled.ProjectsContainer>
  );
};

export default Projects;
