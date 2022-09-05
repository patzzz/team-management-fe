// @ts-nocheck
import React, { useState } from "react";

// STYLES
import {
  DateWrapper,
  InputContainer,
  InputWrapper,
  ProjectsContentContainer,
  ProjectsContentInputContainer,
  TitleLabel,
} from "./ProjectsContentStyled";

// LIBRARIES
import { useNavigate } from "react-router-dom";
import { DatePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

// MISC
import { IProjectForm } from "./ProjectsContentModel";

// REDUX

// COMPONENTS
import ButtonAtom from "components/Atoms/ButtonAtom/ButtonAtom";
import { InputLabel } from "@mui/material";

const ProjectsContent = () => {
  // PROPS

  // CONSTANTS USING LIBRARIES
  // const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // CONSTANTS USING HOOKS
  const [projectForm, setProjectForm] = useState<IProjectForm>({
    title: "",
    description: "",
    status: "",
    deadline: "",
    endDate: "",
    startDate: "",
  });

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS
  const handleCreateProject = () => {
    navigate("/dashboard");
  };

  // HANDLERS FUNCTIONS
  const handleChange = (value, name) => {
    setProjectForm({ ...projectForm, [name]: value });
  };

  return (
    <ProjectsContentContainer>
      <TitleLabel>Create a project</TitleLabel>
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

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DateWrapper>
            <DatePicker
              label="Start date"
              value={projectForm.startDate}
              onChange={(event) => handleChange(event, "startDate")}
              animateYearScrolling
            />

            <DatePicker
              label="End date"
              value={projectForm.endDate}
              onChange={(event) => handleChange(event, "endDate")}
              animateYearScrolling
            />
            <DatePicker
              label="Deadline"
              value={projectForm.deadline}
              onChange={(event) => handleChange(event, "deadline")}
              animateYearScrolling
            />
          </DateWrapper>
        </MuiPickersUtilsProvider>
      </ProjectsContentInputContainer>
      <ButtonAtom
        text={"Create"}
        handleClick={handleCreateProject}
        buttonStyle={"secondary"}
      />
    </ProjectsContentContainer>
  );
};

export default ProjectsContent;
