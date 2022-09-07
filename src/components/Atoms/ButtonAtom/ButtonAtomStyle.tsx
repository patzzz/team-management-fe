// LIBRARIES
// @ts-nocheck
import styled, { css } from "styled-components";
import Button from "@mui/material/Button";

// MISC
import { COLORS } from "constants/styleVariables";

export const ButtonContainer = styled(Button)(
  ({ isSelected, buttonStyle }) => css`
    ${buttonStyle === "primary" &&
    css`
      && {
        width: 200px;
        height: 45px;
        padding: 10px;
        background-color: ${isSelected ? COLORS.secondaryRed : "transparent"};
        margin-bottom: 15px;
        :hover {
          background-color: ${COLORS.secondaryRed};
        }
      }
    `}
    ${buttonStyle === "secondary" &&
    css`
      && {
        width: 150px;
        height: 45px;
        background-color: ${isSelected
          ? COLORS.secondaryRed
          : COLORS.primaryWhite};
        margin-bottom: 15px;
        text-align: center;
        box-shadow: 5px 5px 19px -3px rgba(0, 0, 0, 0.1);

        :hover {
          background-color: ${COLORS.secondaryRed};
        }
      }
    `}
  `
);
export const ButtonText = styled.span(
  ({ buttonStyle }) => css`
    ${buttonStyle === "primary" &&
    css`
      && {
        margin-left: 10px;
        text-transform: capitalize;
        width: 150px;
        text-align: left;
        color: ${COLORS.secondaryGray};
        font-weight: 500;
        font-size: 15px;
      }
    `}
    ${buttonStyle === "secondary" &&
    css`
      && {
        text-transform: uppercase;
        width: 150px;
        font-weight: bolder;
        text-align: center;
        color: ${COLORS.secondaryGray};
        font-size: 15px;
      }
    `}
  `
);

// export const ButtonText = styled.p`
//   margin-left: 10px;
//   text-transform: capitalize;
//   width: 150px;
//   text-align: left;
//   color: ${COLORS.secondaryGray};
//   font-weight: 500;
//   font-size: 15px;
// `;

export const IconWrapper = styled.div`
  width: 30px;
  color: ${COLORS.secondaryGray};
  display: flex;
  align-items: center;
`;
