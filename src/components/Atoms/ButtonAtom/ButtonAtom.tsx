// @ts-nocheck
import React from "react";

// STYLES
import { ButtonContainer, ButtonText, IconWrapper } from "./ButtonAtomStyle";

// LIBRARIES
import * as Icons from "@mui/icons-material";
import { COLORS } from "constants/variables";

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

  // @ts-ignore
  return (
    <ButtonContainer onClick={handleClick} selected={selected}>
      {hasIcon && (
        <IconWrapper>
          <MuiIcon color={COLORS.secondaryGray} />
        </IconWrapper>
      )}
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
};

export default ButtonAtom;
