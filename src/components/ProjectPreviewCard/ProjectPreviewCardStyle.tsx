// LIBRARIES
import styled from "styled-components";

// MISC
import { COLORS } from "constants/styleVariables";

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
  gap: 20px;
  overflow: auto;
  position: relative;
  z-index: 9;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;

export const PersonsIconWrapper = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  z-index: 999;
`;
export const ProjectPreviewCardTitle = styled.span`
  font-size: 23px;
  font-weight: 700;
  text-transform: capitalize;
`;
export const ProjectPreviewCardStatus = styled.span`
  font-size: 18px;
  text-transform: uppercase;
  color: ${COLORS.secondaryRed};
`;
export const ProjectPreviewCardDesc = styled.span`
  font-size: 16px;
  height: 110px;
  display: inline;
  -webkit-line-clamp: 4;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
`;
export const ProjectPreviewCardDateContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ProjectPreviewCardDateText = styled.span`
  font-size: 13px;
  color: ${COLORS.secondaryGray};
  font-weight: 700;
`;
export const ProjectPreviewCardDeadline = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: #d3495a;
`;
