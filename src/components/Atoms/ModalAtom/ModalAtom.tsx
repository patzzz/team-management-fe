import React from "react";

// STYLES
// import { ModalContainer } from "./ModalAtomStyle";

// LIBRARIES
import { Modal } from "@mui/material";

// MISC
import { ModalContentType } from "models/interfaces";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { modalProps, toggleModalState } from "slices/uiSlice";

// COMPONENTS
import ProjectsContent from "components/Atoms/ModalAtom/Content/ProjectsContent/ProjectsContent";
import PersonsContent from "./Content/PersonsContent/PersonsContent";
import AssignedPersonsContent from "./Content/AssignedPersonsContent/AssignedPersonsContent";

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
        return <ProjectsContent />;
      case ModalContentType.PERSONS:
        return <PersonsContent />;
      case ModalContentType.ASSIGNED_PERSONS:
        return <AssignedPersonsContent />;
      default:
        return <div>No Content Available</div>;
    }
  };

  return (
    <Modal
      open={modalPropsData?.isVisible || false}
      onClose={handleClose}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {renderContent()}
    </Modal>
  );
};

export default ModalAtom;
