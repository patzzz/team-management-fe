// @ts-nocheck
import React from "react";

// STYLES
import { ButtonContainer, ButtonText, IconWrapper } from "./ButtonAtomStyle";

// LIBRARIES
import * as Icons from "@mui/icons-material";
import { COLORS } from "constants/styleVariables";

// MISC
import { IProps } from "./ButtonAtomModel";

// REDUX

// COMPONENTS

const ButtonAtom = (props: IProps) => {
  // PROPS
  const {
    text = "",
    iconType = "",
    hasIcon = false,
    selected = false,
    handleClick,
    buttonStyle = "primary",
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
    <ButtonContainer
      onClick={handleClick}
      isSelected={selected}
      buttonStyle={buttonStyle}
    >
      {hasIcon && (
        <IconWrapper>
          <MuiIcon color={COLORS.secondaryGray} />
        </IconWrapper>
      )}
      <ButtonText buttonStyle={buttonStyle}>{text}</ButtonText>
    </ButtonContainer>
  );
};

export default ButtonAtom;
