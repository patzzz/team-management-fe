// LIBRARIES
import styled from "styled-components";

// MISC
import { COLORS } from "constants/styleVariables";

export const AssignedPersonsContentContainer = styled.div`
  width: 900px;
  height: 750px;
  background-color: ${COLORS.primaryWhite};
  display: flex;
  align-items: center;
  flex-direction: row;
  /* justify-content: space-around; */
  padding: 50px;
  border-radius: 10px;
  box-shadow: 5px 5px 19px -3px rgba(0, 0, 0, 0.1);
`;

export const LeftSideContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const RightSideContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;
`;

export const Delimiter = styled.div`
  width: 2px;
  height: 100%;
  background-color: ${COLORS.secondaryGray};
`;

export const TitleLabel = styled.span`
  font-weight: bolder;
  font-size: 24px;
  letter-spacing: 0.8px;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export const PersonListWrapper = styled.div`
  width: 100%;
  height: 100%;
  /* display: flex;
  justify-content: center; */
`;

export const PersonWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
