// @ts-nocheck
import React, { useEffect, useState } from "react";

// STYLES
import {
  ButtonsContainer,
  DateWrapper,
  InputContainer,
  InputWrapper,
  ProjectsContentContainer,
  ProjectsContentInputContainer,
  TitleLabel,
} from "./ProjectsContentStyle";

// LIBRARIES
import { DatePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { InputLabel } from "@mui/material";

// MISC
import { IProjectForm } from "./ProjectsContentModel";
import { ModalContentType } from "models/interfaces";

// REDUX
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import {
  createProject,
  deleteProject,
  editProject,
  getProjectsByStatus,
} from "api/projectApi";
import { modalProps, toggleModalState } from "slices/uiSlice";

// COMPONENTS
import ButtonAtom from "components/Atoms/ButtonAtom/ButtonAtom";

const ProjectsContent = () => {
  // PROPS

  // CONSTANTS USING LIBRARIES
  const dispatch = useAppDispatch();
  const modalPropsData = useAppSelector(modalProps);

  // CONSTANTS USING HOOKS
  const [projectForm, setProjectForm] = useState<IProjectForm>({
    title: "",
    description: "",
    deadline: "",
    startDate: "",
    endDate: "",
    status: "",
  });

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION
  useEffect(() => {
    if (modalPropsData.editMode) {
      setProjectForm({
        title: modalPropsData.project.title,
        description: modalPropsData.project.description,
        deadline: modalPropsData.project.deadline,
        startDate: modalPropsData.project.startDate,
        endDate: modalPropsData.project.endDate,
        id: modalPropsData.project.id,
        status: modalPropsData.project.status,
      });
    }
  }, [modalPropsData]);

  // REQUEST API FUNCTIONS
  const handleCreateOrEditProject = () => {
    const action = modalPropsData.editMode ? editProject : createProject;
    dispatch(
      action({
        project: projectForm,
        projectId: modalPropsData.project?.id || null,
      })
    ).then(() => {
      dispatch(getProjectsByStatus(modalPropsData.tabSelection));
      dispatch(
        toggleModalState({
          isVisible: false,
          content: ModalContentType.PROJECTS,
          editMode: false,
        })
      );
    });
  };

  const handleDeleteProject = () => {
    dispatch(deleteProject(modalPropsData.project?.id)).then(() => {
      dispatch(getProjectsByStatus(modalPropsData.tabSelection));
      dispatch(
        toggleModalState({
          isVisible: false,
          content: ModalContentType.PROJECTS,
          editMode: false,
        })
      );
    });
  };

  // HANDLERS FUNCTIONS
  const handleChange = (value, name) => {
    setProjectForm({ ...projectForm, [name]: value });
  };

  return (
    <ProjectsContentContainer>
      {modalPropsData.editMode && <TitleLabel>Edit project</TitleLabel>}
      {!modalPropsData.editMode && <TitleLabel>Create a project</TitleLabel>}
      <ProjectsContentInputContainer>
        <InputWrapper>
          <InputLabel>Title</InputLabel>
          <InputContainer
            name="title"
            fullWidth
            value={projectForm.title}
            onChange={(event) =>
              handleChange(event.target.value, event.target.name)
            }
          />
        </InputWrapper>
        <InputWrapper>
          <InputLabel>Description</InputLabel>
          <InputContainer
            name="description"
            fullWidth
            value={projectForm.description}
            onChange={(event) =>
              handleChange(event.target.value, event.target.name)
            }
          />
        </InputWrapper>
        {modalPropsData.editMode && (
          <InputWrapper>
            <InputLabel>Status</InputLabel>
            <InputContainer
              name="status"
              fullWidth
              value={projectForm.status}
              onChange={(event) =>
                handleChange(event.target.value, event.target.name)
              }
            />
          </InputWrapper>
        )}

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DateWrapper>
            <DatePicker
              label="Start date"
              value={projectForm.startDate}
              onChange={(event) => handleChange(event, "startDate")}
              animateYearScrolling
            />
            <DatePicker
              label="Deadline"
              value={projectForm.deadline}
              onChange={(event) => handleChange(event, "deadline")}
              animateYearScrolling
            />
            {modalPropsData.editMode && (
              <DatePicker
                label="End date"
                value={projectForm.endDate}
                onChange={(event) => handleChange(event, "endDate")}
                animateYearScrolling
              />
            )}
          </DateWrapper>
        </MuiPickersUtilsProvider>
      </ProjectsContentInputContainer>
      <ButtonsContainer>
        <ButtonAtom
          text={modalPropsData.editMode ? "Edit" : "Create"}
          handleClick={handleCreateOrEditProject}
          buttonStyle={"secondary"}
        />
        {modalPropsData.editMode && (
          <ButtonAtom
            text={"Delete"}
            handleClick={handleDeleteProject}
            buttonStyle={"secondary"}
          />
        )}
      </ButtonsContainer>
    </ProjectsContentContainer>
  );
};

export default ProjectsContent;
