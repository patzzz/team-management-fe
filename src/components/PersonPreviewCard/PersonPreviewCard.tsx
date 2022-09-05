import React from "react";

// STYLES
import {
  PersonPreviewCardContainer,
  PersonPreviewCardStatus,
  PersonPreviewCardTitle,
} from "./PersonPreviewCardStyle";

// LIBRARIES

// MISC
import { PersonPosition } from "models/interfaces";
import { IProps } from "./PersonPreviewCardModel";

// REDUX

// COMPONENTS

const PersonPreviewCard = (props: IProps) => {
  // PROPS
  const {
    // id = 0,
    firstName = "",
    lastName = "",
    position = PersonPosition.FRONTEND,
    // isAvailable = false,
    // assignedProject = {},
  } = props;
  // CONSTANTS USING LIBRARIES

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  return (
    <PersonPreviewCardContainer>
      <PersonPreviewCardTitle>
        {firstName} {lastName}
      </PersonPreviewCardTitle>
      <PersonPreviewCardStatus>{position}</PersonPreviewCardStatus>
    </PersonPreviewCardContainer>
  );
};

export default PersonPreviewCard;
