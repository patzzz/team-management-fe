// LIBRARIES
import styled, { css } from "styled-components";
import Button from "@mui/material/Button";

export const ButtonContainer = styled(Button)(
  ({ selected }) => css`
    && {
      width: 200px;
      height: 45px;
      padding: 10px;
      background-color: ${selected ? "#d3495a4f" : "transparent"};
      margin-bottom: 15px;
      :hover {
        background-color: #d3495a4f;
      }
    }
  `
);

export const ButtonText = styled.p`
  margin-left: 10px;
  text-transform: capitalize;
  width: 150px;
  text-align: left;
  color: #838383;
  font-weight: 500;
  font-size: 15px;
`;

export const IconWrapper = styled.div`
  width: 30px;
  color: #838383;
  display: flex;
  align-items: center;
`;
