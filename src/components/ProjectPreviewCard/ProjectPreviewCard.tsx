import React from "react";

// STYLES

// LIBRARIES
import moment from "moment/moment";
import {
  ProjectPreviewCardContainer,
  ProjectPreviewCardDateContainer,
  ProjectPreviewCardDateText,
  ProjectPreviewCardDeadline,
  ProjectPreviewCardDesc,
  ProjectPreviewCardTitle,
} from "./ProjectPreviewCardStyle";

// MISC
import { IProps } from "components/ProjectPreviewCard/ProjectPreviewCardModel";

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
    <ProjectPreviewCardContainer>
      <ProjectPreviewCardTitle>{project.title}</ProjectPreviewCardTitle>
      {/* <ProjectPreviewCardStatus>{project.status}</ProjectPreviewCardStatus> */}
      <ProjectPreviewCardDesc>{project.description}</ProjectPreviewCardDesc>
      <ProjectPreviewCardDateContainer>
        <ProjectPreviewCardDateText>
          Start: {moment(project.startDate).format("DD/MM/YYYY")}
        </ProjectPreviewCardDateText>
        <ProjectPreviewCardDateText>
          End: {moment(project.endDate).format("DD/MM/YYYY")}
        </ProjectPreviewCardDateText>
      </ProjectPreviewCardDateContainer>

      <ProjectPreviewCardDeadline>
        Deadline: {moment(project.deadline).format("DD/MM/YYYY")}
      </ProjectPreviewCardDeadline>
    </ProjectPreviewCardContainer>
  );
};

export default ProjectPreviewCard;
