import styled from "styled-components";
import { COLORS } from "constants/variables";

export const ProjectPreviewCardContainer = styled.div`
  background-color: ${COLORS.primaryWhite};
  width: 100%;
  height: 100%;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 5px 5px 19px -3px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  cursor: pointer;
  gap: 10px;
`;
export const ProjectPreviewCardTitle = styled.span`
  font-size: 20px;
  text-transform: capitalize;
`;
export const ProjectPreviewCardStatus = styled.span`
  font-size: 18px;
  text-transform: uppercase;
  color: ${COLORS.secondaryRed};
`;
