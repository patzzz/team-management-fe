import React from "react";

// STYLES
import {
  DetailsWraper,
  IconWrapper,
  StatusCardContainer,
  Title,
  Value,
} from "./StatusCardStyle";

// LIBRARIES
import * as Icons from "@mui/icons-material";

// MISC

// REDUX

// COMPONENTS

const StatusCard = (props) => {
  // PROPS
  const { title = "", iconType = "", color = "", value = "" } = props;

  // CONSTANTS USING LIBRARIES

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS
  const MuiIcon = Icons[iconType];

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  return (
    <StatusCardContainer color={color}>
      <IconWrapper color={color}>
        <MuiIcon style={{ fontSize: "34px" }} />
      </IconWrapper>
      <DetailsWraper>
        <Value>{value}</Value>
        <Title>{title}</Title>
      </DetailsWraper>
    </StatusCardContainer>
  );
};

export default StatusCard;
