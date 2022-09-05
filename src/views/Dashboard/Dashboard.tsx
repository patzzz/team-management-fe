import React, { useEffect } from "react";

// STYLES
import {
  DashboardCardsWrapper,
  DashboardContainer,
  StatusCardsWrapper,
} from "./DashboardStyle";

// LIBRARIES

// MISC
import { DashboardCardDataType } from "models/interfaces";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";

// REDUX
import { getStatistics } from "api/statisticsApi";
import { IStatistics, statistics } from "slices/statisticsSlice";

// COMPONENTS
import DashboardCard from "components/DashboardCard/DashboardCard";
import StatusCard from "components/StatusCard/StatusCard";

const Dashboard = () => {
  // PROPS

  // CONSTANTS USING LIBRARIES
  const dispatch = useAppDispatch();
  const statisticsData: IStatistics = useAppSelector(statistics);

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION
  useEffect(() => {
    dispatch(getStatistics());
    // eslint-disable-next-line
  }, []);

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  return (
    <DashboardContainer>
      <StatusCardsWrapper>
        <StatusCard
          title="projects in progress"
          iconType="AccountTree"
          color="#234785"
          value={statisticsData.projectsInProgress}
          key={"status-card-1"}
        />
        <StatusCard
          title="projects pending"
          iconType="AccountTree"
          color="#f7c96c"
          value={statisticsData.projectsPending}
          key={"status-card-2"}
        />
        <StatusCard
          title="projects done"
          iconType="AccountTree"
          color="#1ac944"
          value={statisticsData.projectsDone}
          key={"status-card-3"}
        />
        <StatusCard
          title="available persons"
          iconType="People"
          color="#f4772f"
          value={statisticsData.availablePersons.length}
          key={"status-card-4"}
        />
      </StatusCardsWrapper>

      <DashboardCardsWrapper>
        <DashboardCard
          title="Deadlines"
          data={statisticsData.upcomingDeadlines}
          dataType={DashboardCardDataType.PROJECTS}
          key={"dashboard-card-1"}
        />
        <DashboardCard
          title="Start dates"
          data={statisticsData.upcomingStartDates}
          dataType={DashboardCardDataType.PROJECTS}
          key={"dashboard-card-2"}
        />
        <DashboardCard
          title="Available persons"
          data={statisticsData.availablePersons}
          dataType={DashboardCardDataType.PEOPLES}
          key={"dashboard-card-3"}
        />
      </DashboardCardsWrapper>
    </DashboardContainer>
  );
};

export default Dashboard;
