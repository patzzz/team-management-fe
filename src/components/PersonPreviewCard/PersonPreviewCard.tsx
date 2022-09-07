import React from "react";

// STYLES
import {
  DetailsWrapper,
  IconWrapper,
  PersonPreviewCardContainer,
  PersonPreviewCardStatus,
  PersonPreviewCardTitle,
  Project,
} from "./PersonPreviewCardStyle";

// LIBRARIES
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// MISC
import { IProps } from "./PersonPreviewCardModel";

// REDUX

// COMPONENTS

const PersonPreviewCard = (props: IProps) => {
  // PROPS
  const { person, onSelect } = props;
  // CONSTANTS USING LIBRARIES

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  return (
    <PersonPreviewCardContainer onClick={() => onSelect(person)}>
      <IconWrapper>
        <AccountCircleIcon style={{ fontSize: "50px" }} />
      </IconWrapper>
      <DetailsWrapper>
        <PersonPreviewCardTitle>
          {person.firstName} {person.lastName}
        </PersonPreviewCardTitle>
        <PersonPreviewCardStatus>{person.position}</PersonPreviewCardStatus>
        {person.assignedProject?.title && (
          <Project>{person.assignedProject.title}</Project>
        )}
      </DetailsWrapper>
    </PersonPreviewCardContainer>
  );
};

export default PersonPreviewCard;
