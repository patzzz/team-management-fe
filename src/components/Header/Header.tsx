import React from "react";

// STYLES
import {
  HeaderActionsWrapper,
  HeaderContainer,
  HeaderTitle,
  ProfileImage,
  ProfileName,
} from "./HeaderStyle";

// LIBRARIES

// MISC
import photo from "assets/profileImage.png";
import { useLocation } from "react-router-dom";

// REDUX

// COMPONENTS

const Header = () => {
  // PROPS

  // CONSTANTS USING LIBRARIES
  const location = useLocation();

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  return (
    <HeaderContainer>
      <HeaderTitle>{location.pathname.toUpperCase().split("/")[1]}</HeaderTitle>
      <HeaderActionsWrapper>
        <ProfileName>Andrei P.</ProfileName>
        <ProfileImage src={photo} />
      </HeaderActionsWrapper>
    </HeaderContainer>
  );
};

export default Header;
