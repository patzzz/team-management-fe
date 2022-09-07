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
import { useLocation, useNavigate } from "react-router-dom";

// MISC

// REDUX

// COMPONENTS
import ButtonAtom from "components/Atoms/ButtonAtom/ButtonAtom";

const SideMenu = () => {
  // PROPS

  // CONSTANTS USING LIBRARIES
  const location = useLocation();
  const navigate = useNavigate();

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS
  const handleNavigate = (path) => {
    navigate(path);
  };

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
          handleClick={() => handleNavigate("/dashboard")}
        />
        <ButtonAtom
          text={"Projects"}
          hasIcon={true}
          iconType="AccountTree"
          selected={location.pathname === "/projects" ? true : false}
          handleClick={() => handleNavigate("/projects")}
        />
        <ButtonAtom
          text={"Persons"}
          hasIcon={true}
          iconType="People"
          selected={location.pathname === "/persons" ? true : false}
          handleClick={() => handleNavigate("/persons")}
        />
      </SelectionsWrapper>
      <LogoutButtonWrapper onClick={() => handleNavigate("/")}>
        Log out
      </LogoutButtonWrapper>
    </SideMenuContainer>
  );
};

export default SideMenu;
