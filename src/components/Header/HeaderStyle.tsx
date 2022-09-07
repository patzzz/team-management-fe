// LIBRARIES
import styled from "styled-components";
import { COLORS } from "constants/styleVariables";

export const HeaderContainer = styled.div`
  width: 85vw;
  height: 100%;
  background-color: ${COLORS.backgroundColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderTitle = styled.div`
  font-weight: 700;
  font-size: 28px;
  text-align: left;
  color: ${COLORS.secondaryBlack};
  display: flex;
  align-items: center;
  margin-left: 70px;
  height: 100%;
`;

export const HeaderActionsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 70px;
  height: 100%;
  width: 400px;
`;

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100px;
`;

export const ProfileName = styled.div`
  font-weight: 700;
  font-size: 18px;
  text-align: left;
  color: ${COLORS.secondaryBlack};
  margin-right: 20px;
`;
