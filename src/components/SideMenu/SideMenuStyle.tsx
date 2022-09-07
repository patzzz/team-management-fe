// LIBRARIES
import styled from "styled-components";

// MISC
import { COLORS } from "constants/styleVariables";

export const SideMenuContainer = styled.div`
  padding: 0px 50px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.primaryWhite};
  justify-content: space-between;
`;

export const LogoWrapper = styled.div`
  font-weight: 700;
  font-size: 40px;
  text-align: center;
  margin-top: 33px;
  color: ${COLORS.secondaryBlack};
`;

export const MenuTitle = styled.div`
  font-weight: 700;
  font-size: 18px;
  text-align: left;
  color: #d3495a;
  margin-bottom: 20px;
`;

export const SelectionsWrapper = styled.div`
  height: 680px;
`;

export const LogoutButtonWrapper = styled.div`
  margin-bottom: 50px;
`;
