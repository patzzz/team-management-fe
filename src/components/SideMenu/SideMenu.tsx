import React from "react";

// STYLES
import {
  LogoutButtonWrapper,
  LogoWrapper,
  MenuTitle,
  SelectionsWrapper,
  SideMenuContainer,
} from "./SideMenuStyle";

// LIBRARIES
import { useLocation } from "react-router-dom";

// MISC

// REDUX

// COMPONENTS
import ButtonAtom from "components/Atoms/ButtonAtom/ButtonAtom";

const SideMenu = () => {
  // PROPS

  // CONSTANTS USING LIBRARIES
  const location = useLocation();

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS
  console.log("location", location.pathname);

  // HANDLERS FUNCTIONS

  return (
    <SideMenuContainer>
      <LogoWrapper>PLANNER</LogoWrapper>
      <SelectionsWrapper>
        <MenuTitle>Menu</MenuTitle>
        <ButtonAtom
          text={"Dashboard"}
          hasIcon={true}
          iconType="Dashboard"
          selected={location.pathname === "/dashboard" ? true : false}
        />
        <ButtonAtom
          text={"Projects"}
          hasIcon={true}
          iconType="AccountTree"
          selected={location.pathname === "/projects" ? true : false}
        />
        <ButtonAtom
          text={"People"}
          hasIcon={true}
          iconType="People"
          selected={location.pathname === "/peoples" ? true : false}
        />
      </SelectionsWrapper>
      <LogoutButtonWrapper>Log out</LogoutButtonWrapper>
    </SideMenuContainer>
  );
};

export default SideMenu;
