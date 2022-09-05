// @ts-nocheck
// LIBRARIES
import styled, { css } from "styled-components";
import Button from "@mui/material/Button";
import { COLORS } from "constants/variables";

export const ButtonContainer = styled(Button)(
  ({ selected }) => css`
    && {
      width: 200px;
      height: 45px;
      padding: 10px;
      background-color: ${selected ? COLORS.secondaryRed : "transparent"};
      margin-bottom: 15px;
      :hover {
        background-color: ${COLORS.secondaryRed};
      }
    }
  `
);

export const ButtonText = styled.p`
  margin-left: 10px;
  text-transform: capitalize;
  width: 150px;
  text-align: left;
  color: ${COLORS.secondaryGray};
  font-weight: 500;
  font-size: 15px;
`;

export const IconWrapper = styled.div`
  width: 30px;
  color: ${COLORS.secondaryGray};
  display: flex;
  align-items: center;
`;
