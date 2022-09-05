// LIBRARIES
import styled from "styled-components";
import { COLORS } from "constants/variables";

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.backgroundColor};
  width: 100%;
  padding-left: 70px;
`;
export const ProjectsListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;
export const ProjectsListElement = styled.div`
  width: 350px;
  height: 280px;
`;
