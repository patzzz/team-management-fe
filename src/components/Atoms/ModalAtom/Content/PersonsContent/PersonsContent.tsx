// @ts-nocheck
import React, { useEffect, useState } from "react";

// STYLES
import {
  ButtonsContainer,
  InputContainer,
  InputWrapper,
  PersonsContentContainer,
  PersonsContentInputContainer,
  TitleLabel,
} from "./PersonsContentStyle";

// LIBRARIES
import { InputLabel } from "@mui/material";

// MISC
import { IPersonForm } from "./PersonsContentModel";
import { ModalContentType, PersonStatus } from "models/interfaces";

// REDUX
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import {
  createPerson,
  deletePerson,
  editPerson,
  getPersonsByAvailabilityStatus,
} from "api/personsApi";
import { modalProps, toggleModalState } from "slices/uiSlice";

// COMPONENTS
import ButtonAtom from "components/Atoms/ButtonAtom/ButtonAtom";

const PersonsContent = () => {
  // PROPS

  // CONSTANTS USING LIBRARIES
  const dispatch = useAppDispatch();
  const modalPropsData = useAppSelector(modalProps);

  // CONSTANTS USING HOOKS
  const [personForm, setPersonForm] = useState<IPersonForm>({
    firstName: "",
    lastName: "",
    position: "",
  });

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION
  useEffect(() => {
    if (modalPropsData.editMode) {
      setPersonForm({
        firstName: modalPropsData.person.firstName,
        lastName: modalPropsData.person.lastName,
        position: modalPropsData.person.position,
        id: modalPropsData.person.id,
      });
    }
  }, [modalPropsData]);

  // REQUEST API FUNCTIONS
  const handleCreateOrEditPerson = () => {
    const action = modalPropsData.editMode ? editPerson : createPerson;
    dispatch(
      action({
        person: personForm,
        personId: modalPropsData.person?.id || null,
      })
    ).then(() => {
      dispatch(getPersonsByAvailabilityStatus(modalPropsData.tabSelection));
      dispatch(
        toggleModalState({
          isVisible: false,
          content: ModalContentType.PERSONS,
          editMode: false,
        })
      );
    });
  };

  const handleDeletePerson = () => {
    dispatch(deletePerson(modalPropsData.person?.id)).then(() => {
      dispatch(getPersonsByAvailabilityStatus(modalPropsData.tabSelection));
      dispatch(
        toggleModalState({
          isVisible: false,
          content: ModalContentType.PERSONS,
          editMode: false,
        })
      );
    });
  };

  // HANDLERS FUNCTIONS
  const handleChange = (event) => {
    setPersonForm({ ...personForm, [event.target.name]: event.target.value });
  };

  return (
    <PersonsContentContainer>
      {modalPropsData.editMode && <TitleLabel>Edit person</TitleLabel>}
      {!modalPropsData.editMode && <TitleLabel>Create a person</TitleLabel>}
      <PersonsContentInputContainer>
        <InputWrapper>
          <InputLabel>First name</InputLabel>
          <InputContainer
            name="firstName"
            fullWidth
            value={personForm.firstName}
            onChange={handleChange}
          />
        </InputWrapper>
        <InputWrapper>
          <InputLabel>Last name</InputLabel>
          <InputContainer
            name="lastName"
            fullWidth
            value={personForm.lastName}
            onChange={handleChange}
          />
        </InputWrapper>
        <InputWrapper>
          <InputLabel>Position</InputLabel>
          <InputContainer
            name="position"
            fullWidth
            value={personForm.position}
            onChange={handleChange}
          />
        </InputWrapper>
      </PersonsContentInputContainer>
      <ButtonsContainer>
        <ButtonAtom
          text={modalPropsData.editMode ? "Edit" : "Create"}
          handleClick={handleCreateOrEditPerson}
          buttonStyle={"secondary"}
        />
        {modalPropsData.editMode && (
          <ButtonAtom
            text={"Delete"}
            handleClick={handleDeletePerson}
            buttonStyle={"secondary"}
          />
        )}
      </ButtonsContainer>
    </PersonsContentContainer>
  );
};

export default PersonsContent;
