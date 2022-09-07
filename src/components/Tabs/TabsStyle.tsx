// LIBRARIES
import styled from "styled-components";

// MISC
import { COLORS } from "constants/styleVariables";

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.backgroundColor};
  width: 100%;
  padding-left: 70px;
`;
export const TabsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 70px;
`;
export const TabsWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
