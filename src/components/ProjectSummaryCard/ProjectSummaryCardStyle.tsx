// LIBRARIES
import styled from "styled-components";
import { COLORS } from "constants/styleVariables";

export const ProjectSummaryCardContainer = styled.div`
  background-color: "transparent";
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  margin: 10px 0;
  cursor: pointer;
`;

export const DetailsWrapper = styled.div`
  background-color: "transparent";
  width: 100%;
  height: 100px;
`;

export const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 21px;
  text-align: left;
  color: ${COLORS.secondaryBlack};
  padding-bottom: 2px;
`;

export const Description = styled.p`
  font-weight: 500;
  font-size: 16px;
  text-align: left;
  color: #848484;
  padding-bottom: 2px;
`;

export const Deadline = styled.div`
  width: 120px;
  height: 3 0px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3f3f4;
  color: ${COLORS.secondaryRed};
  font-weight: 800;
  font-size: 14px;
  margin-top: 20px;
`;

export const Delimiter = styled.div`
  width: 100%;
  height: 2px;
  background-color: #e9edf3;
  margin: 10px 0;
`;
