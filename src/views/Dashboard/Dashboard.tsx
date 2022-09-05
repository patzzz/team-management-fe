import React from "react";

// STYLES
import {
  DashboardCardsWrapper,
  DashboardContainer,
  StatusCardsWrapper,
} from "./DashboardStyle";

// LIBRARIES

// MISC
import { DashboardCardDataType, ProjectStatusEnum } from "models/interfaces";

// REDUX

// COMPONENTS
import DashboardCard from "components/DashboardCard/DashboardCard";
import StatusCard from "components/StatusCard/StatusCard";

const Dashboard = () => {
  // PROPS

  // CONSTANTS USING LIBRARIES

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS
  const projectMock = {
    id: 1,
    title: "Project title",
    description: "Project description is important for ......",
    status: ProjectStatusEnum.IN_PROGRESS,
    startDate: "2022-09-02T06:27:59.094Z",
    endDate: "2022-09-02T06:27:59.094Z",
    deadline: "2022-09-02T06:27:59.094Z",
  };

  const projectMocks = [projectMock];
  // const projectMocks = [projectMock, projectMock, projectMock, projectMock];

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  return (
    <DashboardContainer>
      <StatusCardsWrapper>
        <StatusCard
          title="projects in progress"
          iconType="AccountTree"
          color="#234785"
          value={2}
        />
        <StatusCard
          title="projects pending"
          iconType="AccountTree"
          color="#f7c96c"
          value={3}
        />
        <StatusCard
          title="projects done"
          iconType="AccountTree"
          color="#1ac944"
          value={10}
        />
        <StatusCard
          title="available people"
          iconType="People"
          color="#f4772f"
          value={4}
        />
      </StatusCardsWrapper>

      <DashboardCardsWrapper>
        <DashboardCard
          title="Deadlines"
          data={projectMocks}
          dataType={DashboardCardDataType.PROJECTS}
        />
        <DashboardCard
          title="Start dates"
          data={projectMocks}
          dataType={DashboardCardDataType.PROJECTS}
        />
        <DashboardCard
          title="Available peoples"
          data={projectMocks}
          dataType={DashboardCardDataType.PEOPLES}
        />
      </DashboardCardsWrapper>
    </DashboardContainer>
  );
};

export default Dashboard;
