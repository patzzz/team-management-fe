// LIBRARIES
import styled from "styled-components";
import { COLORS } from "constants/styleVariables";

export const PersonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.backgroundColor};
  width: 100%;
  padding-left: 70px;
`;

export const PersonsListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

export const PersonListElement = styled.div`
  width: 350px;
  height: 100px;
`;
