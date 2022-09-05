import React from "react";

// STYLES
import { ModalContainer } from "./ModalAtomStyle";

// LIBRARIES
import { Modal } from "@mui/material";

// MISC
import { ModalContentType } from "constants/variables";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { modalProps, toggleModalState } from "slices/uiSlice";

// COMPONENTS

const ModalAtom = () => {
  // PROPS

  // CONSTANTS USING LIBRARIES
  const dispatch = useDispatch();
  const modalPropsData = useSelector(modalProps);

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS
  const handleClose = () => {
    dispatch(
      toggleModalState({
        isVisible: false,
        content: ModalContentType.EMPTY,
      })
    );
  };

  const renderContent = () => {
    switch (modalPropsData?.content) {
      case ModalContentType.DASHBOARD:
        return <div>Dashboard</div>;
      case ModalContentType.PROJECTS:
        return <div>Project</div>;
      default:
        return <div>No Content Available</div>;
    }
  };

  return (
    <ModalContainer>
      <Modal open={modalPropsData?.isVisible || false} onClose={handleClose}>
        {renderContent()}
      </Modal>
    </ModalContainer>
  );
};

export default ModalAtom;
