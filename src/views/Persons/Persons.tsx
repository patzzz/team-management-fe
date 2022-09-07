// @ts-nocheck
import React, { useEffect, useState } from "react";

// STYLES
import {
  PersonListElement,
  PersonsContainer,
  PersonsListWrapper,
} from "./PersonsStyle";

// LIBRARIES

// MISC
import { IPerson, ModalContentType, PersonStatus } from "models/interfaces";

// REDUX
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { getPersonsByAvailabilityStatus } from "api/personsApi";
import { toggleModalState } from "slices/uiSlice";
import { personsList } from "slices/personSlice";

// COMPONENTS
import PersonPreviewCard from "components/PersonPreviewCard/PersonPreviewCard";
import Tabs, { ITabSelection } from "components/Tabs/Tabs";
import ModalAtom from "components/Atoms/ModalAtom/ModalAtom";

const Persons = () => {
  // PROPS

  // CONSTANTS USING LIBRARIES
  const dispatch = useAppDispatch();
  const personsData: Array<IPerson> = useAppSelector(personsList);

  // CONSTANTS USING HOOKS
  const [selectedTab, setSelectedTab] = useState<PersonStatus>(
    PersonStatus.AVAILABLE
  );

  // GENERAL CONSTANTS
  const selections: ITabSelection = [
    {
      title: "Available",
      selection: PersonStatus.AVAILABLE,
    },
    {
      title: "On project",
      selection: PersonStatus.ON_PROJECT,
    },
  ];

  // USE EFFECT FUNCTION
  useEffect(() => {
    dispatch(getPersonsByAvailabilityStatus(PersonStatus.AVAILABLE));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    dispatch(getPersonsByAvailabilityStatus(selectedTab));
    // eslint-disable-next-line
  }, [selectedTab]);

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS
  const handleFilterClick = (event) => {
    setSelectedTab(event);
  };

  const handleOpenModal = () => {
    dispatch(
      toggleModalState({
        isVisible: true,
        content: ModalContentType.PERSONS,
        editMode: false,
        tabSelection: selectedTab,
      })
    );
  };

  const handleSelectPerson = (person: IPerson) => {
    dispatch(
      toggleModalState({
        isVisible: true,
        content: ModalContentType.PERSONS,
        editMode: true,
        person,
        tabSelection: selectedTab,
      })
    );
  };

  return (
    <PersonsContainer>
      <Tabs
        selectedTab={selectedTab}
        selections={selections}
        handleSelectTab={handleFilterClick}
        handleOpenModal={handleOpenModal}
      />
      <PersonsListWrapper>
        {personsData?.length > 0 &&
          personsData?.map((person, index) => (
            <PersonListElement>
              <PersonPreviewCard
                person={person}
                key={`person-card--${index}`}
                onSelect={handleSelectPerson}
              />
            </PersonListElement>
          ))}
      </PersonsListWrapper>

      <ModalAtom />
    </PersonsContainer>
  );
};

export default Persons;
