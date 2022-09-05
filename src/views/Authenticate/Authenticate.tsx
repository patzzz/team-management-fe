// @ts-nocheck
import React, { useState } from "react";

// STYLES
import {
  AuthenticateContainer,
  AuthenticateTitle,
  ButtonContainer,
  ButtonText,
  FormWrapper,
  InputContainer,
} from "./AuthenticateStyle";

// LIBRARIES
import { useNavigate } from "react-router-dom";

// MISC
import { ICredentials } from "./AuthenticateModel";

// REDUX

// COMPONENTS

const Authenticate = () => {
  // PROPS

  // CONSTANTS USING LIBRARIES
  // const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // CONSTANTS USING HOOKS
  const [credentials, setCredentials] = useState<ICredentials>({
    username: "",
    password: "",
  });

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS
  const authenticate = () => {
    navigate("/dashboard");
  };

  // HANDLERS FUNCTIONS
  const handleChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <AuthenticateContainer>
      <FormWrapper>
        <AuthenticateTitle>SIGN IN TO YOUR ACCOUNT</AuthenticateTitle>
        <InputContainer
          name="username"
          fullWidth
          value={credentials.username}
          onChange={handleChange}
        />
        <InputContainer
          name="password"
          fullWidth
          value={credentials.password}
          onChange={handleChange}
          type="password"
        />
        <ButtonContainer onClick={authenticate}>
          <ButtonText>SIGN IN</ButtonText>
        </ButtonContainer>
      </FormWrapper>
    </AuthenticateContainer>
  );
};

export default Authenticate;
