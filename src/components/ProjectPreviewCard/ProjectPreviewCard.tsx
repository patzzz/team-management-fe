import React from "react";

// STYLES
import * as Style from "./ProjectPreviewCardStyle";
import { IProps } from "components/ProjectPreviewCard/ProjectPreviewCardModel";

// LIBRARIES
import moment from "moment/moment";
import {
  ProjectPreviewCardDateText,
  ProjectPreviewCardDeadline,
} from "./ProjectPreviewCardStyle";

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
      deadline: "",
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
      <Style.ProjectPreviewCardDesc>
        {project.description}
      </Style.ProjectPreviewCardDesc>
      <Style.ProjectPreviewCardDateContainer>
        <Style.ProjectPreviewCardDateText>
          Start: {moment(project.startDate).format("DD-MM-YYYY")}
        </Style.ProjectPreviewCardDateText>
        <Style.ProjectPreviewCardDateText>
          End: {moment(project.endDate).format("DD-MM-YYYY")}
        </Style.ProjectPreviewCardDateText>
      </Style.ProjectPreviewCardDateContainer>

      <Style.ProjectPreviewCardDeadline>
        Deadline: {moment(project.deadline).format("DD-MM-YYYY")}
      </Style.ProjectPreviewCardDeadline>
    </Style.ProjectPreviewCardContainer>
  );
};

export default ProjectPreviewCard;
