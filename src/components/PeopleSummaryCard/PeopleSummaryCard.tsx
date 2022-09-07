import React from "react";

// STYLES
import {
  Delimiter,
  DetailsWrapper,
  IconWrapper,
  PeopleSummaryCardContainer,
  Position,
  Title,
} from "./PeopleSummaryCardStyle";

// LIBRARIES
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// MISC
// import { IProject } from "models/interfaces";

// REDUX

// COMPONENTS

const PeopleSummaryCard = (props) => {
  // PROPS
  const { people = {}, hasDelimiter = true } = props;
  // CONSTANTS USING LIBRARIES

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  return (
    <>
      <PeopleSummaryCardContainer>
        <IconWrapper>
          <AccountCircleIcon style={{ fontSize: "50px" }} />
        </IconWrapper>
        <DetailsWrapper>
          <Title>
            {people.firstName} {people.lastName}
          </Title>
          <Position>{people.position}</Position>
        </DetailsWrapper>
      </PeopleSummaryCardContainer>
      {hasDelimiter && <Delimiter />}
    </>
  );
};

export default PeopleSummaryCard;
