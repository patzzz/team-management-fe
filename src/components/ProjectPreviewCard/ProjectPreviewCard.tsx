import React from "react";

// STYLES

// LIBRARIES
import moment from "moment/moment";
import {
  ContentWrapper,
  PersonsIconWrapper,
  ProjectPreviewCardContainer,
  ProjectPreviewCardDateContainer,
  ProjectPreviewCardDateText,
  ProjectPreviewCardDeadline,
  ProjectPreviewCardDesc,
  ProjectPreviewCardTitle,
} from "./ProjectPreviewCardStyle";
import GroupIcon from "@mui/icons-material/Group";

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
    onSelect,
    onSelectPersons,
  } = props;
  // CONSTANTS USING LIBRARIES

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  return (
    <ProjectPreviewCardContainer>
      <PersonsIconWrapper onClick={() => onSelectPersons(project)}>
        <GroupIcon />
      </PersonsIconWrapper>
      <ContentWrapper onClick={() => onSelect(project)}>
        <ProjectPreviewCardTitle>{project.title}</ProjectPreviewCardTitle>
        {/* <ProjectPreviewCardStatus>{project.status}</ProjectPreviewCardStatus> */}
        <ProjectPreviewCardDesc>{project.description}</ProjectPreviewCardDesc>
        <ProjectPreviewCardDateContainer>
          <ProjectPreviewCardDateText>
            Start: {moment(project.startDate).format("DD/MM/YYYY")}
          </ProjectPreviewCardDateText>
          <ProjectPreviewCardDateText>
            {project.endDate &&
              `End: ${moment(project.endDate).format("DD/MM/YYYY")}`}
          </ProjectPreviewCardDateText>
        </ProjectPreviewCardDateContainer>

        <ProjectPreviewCardDeadline>
          Deadline: {moment(project.deadline).format("DD/MM/YYYY")}
        </ProjectPreviewCardDeadline>
      </ContentWrapper>
    </ProjectPreviewCardContainer>
  );
};

export default ProjectPreviewCard;
