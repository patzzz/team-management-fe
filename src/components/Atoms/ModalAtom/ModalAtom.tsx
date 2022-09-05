import React from "react";

// STYLES
// import { ModalContainer } from "./ModalAtomStyle";

// LIBRARIES
import { Modal } from "@mui/material";

// MISC
import { ModalContentType } from "constants/variables";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { modalProps, toggleModalState } from "slices/uiSlice";

// COMPONENTS
// import Projects from "views/Projects/Projects";
import ProjectsContent from "components/Atoms/ModalAtom/Content/ProjectsContent/ProjectsContent";

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
