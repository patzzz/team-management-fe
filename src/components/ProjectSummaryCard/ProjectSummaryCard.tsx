import React from "react";

// STYLES
import {
  DetailsWrapper,
  IconWrapper,
  ProjectSummaryCardContainer,
} from "./ProjectSummaryCardStyle";

// LIBRARIES
import InventoryIcon from "@mui/icons-material/Inventory";

// MISC
// import { IProject } from "models/interfaces";

// REDUX

// COMPONENTS

const ProjectSummaryCard = ({ project: IProject }) => {
  // PROPS

  // CONSTANTS USING LIBRARIES

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  return (
    <ProjectSummaryCardContainer>
      <IconWrapper>
        <InventoryIcon />
      </IconWrapper>
      <DetailsWrapper></DetailsWrapper>
    </ProjectSummaryCardContainer>
  );
};

export default ProjectSummaryCard;
