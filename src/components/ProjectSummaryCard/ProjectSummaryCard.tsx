import React from "react";

// STYLES
import {
  Deadline,
  Delimiter,
  Description,
  DetailsWrapper,
  IconWrapper,
  ProjectSummaryCardContainer,
  Title,
} from "./ProjectSummaryCardStyle";

// LIBRARIES
import InventoryIcon from "@mui/icons-material/Inventory";
import moment from "moment";

// MISC
// import { IProject } from "models/interfaces";

// REDUX

// COMPONENTS

const ProjectSummaryCard = (props) => {
  // PROPS
  const { project = {} } = props;
  // CONSTANTS USING LIBRARIES

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  return (
    <ProjectSummaryCardContainer>
      <IconWrapper>
        <InventoryIcon style={{ fontSize: "40px" }} />
      </IconWrapper>
      <DetailsWrapper>
        <Title>{project.title}</Title>
        <Description>{project.description}</Description>
        <Deadline>{moment(project.deadline).format("Do MMM YYYY")}</Deadline>
        <Delimiter />
      </DetailsWrapper>
    </ProjectSummaryCardContainer>
  );
};

export default ProjectSummaryCard;
