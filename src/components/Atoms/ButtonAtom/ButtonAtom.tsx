import React from "react";

// STYLES
import { ButtonContainer, ButtonText, IconWrapper } from "./ButtonAtomStyle";

// LIBRARIES
import * as Icons from "@mui/icons-material";

// MISC

// REDUX

// COMPONENTS

const ButtonAtom = (props) => {
  // PROPS
  const {
    text = "",
    iconType = "",
    hasIcon = false,
    selected = false,
    handleClick,
  } = props;

  // CONSTANTS USING LIBRARIES

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS
  const MuiIcon = Icons[iconType];

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS
  console.log("selected", selected);

  return (
    <ButtonContainer onClick={handleClick} selected={selected}>
      {hasIcon && (
        <IconWrapper>
          <MuiIcon color={"#838383"} />
        </IconWrapper>
      )}
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
};

export default ButtonAtom;
