// LIBRARIES
import styled from "styled-components";
import { COLORS } from "constants/styleVariables";

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${COLORS.backgroundColor};
  padding: 0 70px;
`;

export const StatusCardsWrapper = styled.div`
  width: 100%;
  gap: 50px;
  display: flex;
  margin-bottom: 50px;
`;

export const DashboardCardsWrapper = styled.div`
  width: 100%;
  gap: 50px;
  display: flex;
`;
