import React from "react";

// STYLES
import * as Style from "./ProjectPreviewCardStyle";
import { IProps } from "components/ProjectPreviewCard/ProjectPreviewCardModel";
import { ProjectPreviewCardStatus } from "./ProjectPreviewCardStyle";

// LIBRARIES

// MISC

// REDUX

// COMPONENTS

const ProjectPreviewCard = (props: IProps) => {
  // PROPS
  const {
    project = {
      title: "",
      description: "",
      status: "",
      startDate: "",
      endDate: "",
      deadLine: "",
    },
  } = props;
  // CONSTANTS USING LIBRARIES

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  return (
    <Style.ProjectPreviewCardContainer>
      <Style.ProjectPreviewCardTitle>
        {project.title}
      </Style.ProjectPreviewCardTitle>
      <Style.ProjectPreviewCardStatus>
        {project.status}
      </Style.ProjectPreviewCardStatus>
    </Style.ProjectPreviewCardContainer>
  );
};

export default ProjectPreviewCard;
