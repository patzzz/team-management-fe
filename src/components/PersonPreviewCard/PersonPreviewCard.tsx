import React from "react";

// STYLES
import {
  DetailsWrapper,
  IconWrapper,
  PersonPreviewCardContainer,
  PersonPreviewCardStatus,
  PersonPreviewCardTitle,
} from "./PersonPreviewCardStyle";

// LIBRARIES
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// MISC
import { IProps } from "./PersonPreviewCardModel";

// REDUX

// COMPONENTS

const PersonPreviewCard = (props: IProps) => {
  // PROPS
  const {
    // id = 0,
    firstName = "",
    lastName = "",
    position = "",
    isAvailable = false,
    assignedProject = {},
  } = props;
  // CONSTANTS USING LIBRARIES

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  return (
    <PersonPreviewCardContainer>
      <IconWrapper>
        <AccountCircleIcon style={{ fontSize: "50px" }} />
      </IconWrapper>
      <DetailsWrapper>
        <PersonPreviewCardTitle>
          {firstName} {lastName}
        </PersonPreviewCardTitle>
        <PersonPreviewCardStatus>{position}</PersonPreviewCardStatus>
      </DetailsWrapper>
    </PersonPreviewCardContainer>
  );
};

export default PersonPreviewCard;
