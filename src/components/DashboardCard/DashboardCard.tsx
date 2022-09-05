import React from "react";

// STYLES
import {
  ContentWrapper,
  DashboardCardContainer,
  Title,
} from "./DashboardCardStyle";

// LIBRARIES

// MISC
import { DashboardCardDataType } from "models/interfaces";

// REDUX

// COMPONENTS
import ProjectSummaryCard from "components/ProjectSummaryCard/ProjectSummaryCard";

const DashboardCard = (props) => {
  // PROPS
  const {
    title = "",
    data = [],
    dataType = DashboardCardDataType.PROJECTS,
  } = props;

  // CONSTANTS USING LIBRARIES

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS
  const handleRenderData = () => {
    switch (dataType) {
      case DashboardCardDataType.PROJECTS:
        return data.map((project) => <ProjectSummaryCard project={project} />);
      default:
        break;
    }
  };

  return (
    <DashboardCardContainer>
      <Title>{title}</Title>
      <ContentWrapper>{handleRenderData()}</ContentWrapper>
    </DashboardCardContainer>
  );
};

export default DashboardCard;
