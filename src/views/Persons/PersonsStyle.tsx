// LIBRARIES
import styled from "styled-components";
import { COLORS } from "constants/variables";

export const PersonsContainer = styled.div`
  display: flex;
  flex-direction: row;
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
  width: 280px;
  height: 280px;
`;
