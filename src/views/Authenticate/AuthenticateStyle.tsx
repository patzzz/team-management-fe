// LIBRARIES
// @ts-nocheck
import styled, { css } from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// MISC
import { COLORS } from "constants/styleVariables";

export const AuthenticateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${COLORS.violet};
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 430px;
  background-color: ${COLORS.primaryWhite};
  border-radius: 10px;
  padding: 50px;
  flex-direction: column;
`;

export const AuthenticateTitle = styled.p`
  font-weight: 700;
  font-size: 21px;
  text-align: left;
  color: ${COLORS.secondaryBlack};
  padding-bottom: 2px;
  margin-bottom: 20px;
`;

export const InputContainer = styled(TextField)`
  && {
    width: 320px;
    border-radius: 2px;
    margin: 20px 0;
    background-color: #e6e8ee;
    border-width: 0;

    input::placeholder {
      font-size: 20px;
      border-width: 0;
    }

    .MuiFormControl-root {
      height: 50px;
      border-width: 0;
    }
  }
`;

export const ButtonContainer = styled(Button)(
  ({ selected }) => css`
    && {
      width: 320px;
      height: 45px;
      padding: 10px;
      background-color: ${COLORS.violet};
      /* margin-bottom: 15px; */
      margin: 20px 0;
      display: flex;
      justify-content: center;
      align-items: center;

      :hover {
        background-color: ${COLORS.violet};
      }
    }
  `
);

export const ButtonText = styled.p`
  font-weight: 700;
  font-size: 17px;
  text-align: center;
  color: ${COLORS.primaryWhite};
`;
