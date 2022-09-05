// @ts-nocheck
import React, { useState } from "react";

// STYLES
import * as Styled from "./ProjectsContentStyled";

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
  console.log("projectForm", projectForm);
  return (
    <Styled.ProjectsContentContainer>
      <Styled.TitleLabel>Create a project</Styled.TitleLabel>
      <Styled.ProjectsContentInputContainer>
        <Styled.InputWrapper>
          <Styled.InputLabel>Title</Styled.InputLabel>
          <Styled.InputContainer
            name="title"
            fullWidth
            value={projectForm.title}
            onChange={(event) =>
              handleChange(event.target.value, event.target.name)
            }
          />
        </Styled.InputWrapper>
        <Styled.InputWrapper>
          <Styled.InputLabel>Status</Styled.InputLabel>
          <Styled.InputContainer
            name="status"
            fullWidth
            value={projectForm.status}
            onChange={(event) =>
              handleChange(event.target.value, event.target.name)
            }
          />
        </Styled.InputWrapper>
        <Styled.InputWrapper>
          <Styled.InputLabel>Description</Styled.InputLabel>
          <Styled.InputContainer
            name="description"
            fullWidth
            value={projectForm.description}
            onChange={(event) =>
              handleChange(event.target.value, event.target.name)
            }
          />
        </Styled.InputWrapper>

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Styled.DateWrapper>
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
          </Styled.DateWrapper>
        </MuiPickersUtilsProvider>
      </Styled.ProjectsContentInputContainer>
      <ButtonAtom
        text={"Create"}
        handleClick={handleCreateProject}
        buttonStyle={"secondary"}
      />
    </Styled.ProjectsContentContainer>
  );
};

export default ProjectsContent;
