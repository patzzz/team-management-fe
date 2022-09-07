// LIBRARIES
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { COLORS } from "constants/styleVariables";

export const PersonsContentContainer = styled.div`
  width: 600px;
  height: 750px;
  background-color: ${COLORS.primaryWhite};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 10px;
  box-shadow: 5px 5px 19px -3px rgba(0, 0, 0, 0.1);
`;
export const PersonsContentInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const InputWrapper = styled.div`
  display: flex;
  height: auto;
  flex-direction: column;
`;
export const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const TitleLabel = styled.span`
  font-weight: bolder;
  font-size: 24px;
  letter-spacing: 0.8px;
  text-align: center;
  text-transform: uppercase;
`;
export const InputLabel = styled.span`
  font-weight: bolder;
  font-size: 17px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
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

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  /* gap: 20px */
  justify-content: center;
`;
