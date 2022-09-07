// LIBRARIES
import styled from "styled-components";
import { COLORS } from "constants/styleVariables";

export const DashboardCardContainer = styled.div`
  background-color: ${COLORS.primaryWhite};
  width: 500px;
  min-height: 570px;
  max-height: 570px;
  overflow-y: auto;
  border-radius: 15px;
  box-shadow: 5px 5px 19px -3px rgba(0, 0, 0, 0.1);
  padding: 30px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 25px;
  text-align: left;
  color: ${COLORS.secondaryBlack};
  margin-bottom: 30px;
`;

export const ContentWrapper = styled.div``;
