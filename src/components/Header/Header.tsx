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

// REDUX

// COMPONENTS

const Header = () => {
  // PROPS

  // CONSTANTS USING LIBRARIES

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  return (
    <HeaderContainer>
      <HeaderTitle>Dashboard</HeaderTitle>
      <HeaderActionsWrapper>
        <ProfileName>Andrei P.</ProfileName>
        <ProfileImage src={photo} />
      </HeaderActionsWrapper>
    </HeaderContainer>
  );
};

export default Header;
