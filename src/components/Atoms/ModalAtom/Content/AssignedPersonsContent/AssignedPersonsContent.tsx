// @ts-nocheck
import React, { useEffect } from "react";

// STYLES
import {
  AssignedPersonsContentContainer,
  Delimiter,
  LeftSideContainer,
  PersonListWrapper,
  PersonWrapper,
  RightSideContainer,
  TitleLabel,
} from "./AssignedPersonsContentStyle";

// LIBRARIES
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

// MISC

// REDUX
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import {
  assignOrUnassignPerson,
  getPersonsByAvailabilityStatus,
} from "api/personsApi";
import { modalProps, toggleModalState } from "slices/uiSlice";
import { projectTeam } from "slices/projectSlice";
import { getProjectTeam } from "api/projectApi";
import { personsList } from "slices/personSlice";

// COMPONENTS
import ButtonAtom from "components/Atoms/ButtonAtom/ButtonAtom";
import PeopleSummaryCard from "components/PeopleSummaryCard/PeopleSummaryCard";

const AssignedPersonsContent = () => {
  // PROPS

  // CONSTANTS USING LIBRARIES
  const dispatch = useAppDispatch();
  const modalPropsData = useAppSelector(modalProps);
  const projectTeamData = useAppSelector(projectTeam);
  const availablePersonsData = useAppSelector(personsList);

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  useEffect(() => {
    getData();
  }, []);

  // useEffect(() => {}, [modalPropsData]);

  // REQUEST API FUNCTIONS
  const getData = () => {
    dispatch(getProjectTeam(modalPropsData.project.id));
    dispatch(getPersonsByAvailabilityStatus("AVAILABLE"));
  };
  const handleAssignOrUnassignPerson = (person, status) => {
    dispatch(
      assignOrUnassignPerson({
        personId: person.id,
        projectId: modalPropsData.project.id,
      })
    ).then(() => getData());
  };

  // HANDLERS FUNCTIONS

  return (
    <AssignedPersonsContentContainer>
      <LeftSideContainer>
        <TitleLabel>Assigned persons</TitleLabel>
        <PersonListWrapper>
          {projectTeamData?.length > 0 &&
            projectTeamData?.map((person) => (
              <PersonWrapper>
                <RemoveCircleOutlineIcon
                  onClick={() =>
                    handleAssignOrUnassignPerson(person, "UNASSIGN")
                  }
                />
                <PeopleSummaryCard people={person} hasDelimiter={false} />
              </PersonWrapper>
            ))}
        </PersonListWrapper>
      </LeftSideContainer>
      <Delimiter />
      <RightSideContainer>
        <TitleLabel>Available persons</TitleLabel>
        <PersonListWrapper>
          {availablePersonsData?.length > 0 &&
            availablePersonsData?.map((person) => (
              <PersonWrapper>
                <AddCircleOutlineIcon
                  onClick={() => handleAssignOrUnassignPerson(person, "ASSIGN")}
                />
                <PeopleSummaryCard people={person} hasDelimiter={false} />
              </PersonWrapper>
            ))}
        </PersonListWrapper>
      </RightSideContainer>
    </AssignedPersonsContentContainer>
  );
};

export default AssignedPersonsContent;
