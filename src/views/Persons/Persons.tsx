// @ts-nocheck
import React, { useEffect } from "react";

// STYLES
import {
  PersonListElement,
  PersonsContainer,
  PersonsListWrapper,
} from "./PersonsStyle";

// LIBRARIES

// MISC
import { IPerson, PersonStatus } from "models/interfaces";

// REDUX
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { personsList } from "slices/personSlice";
import { getPersonsByAvailabilityStatus } from "api/personsApi";

// COMPONENTS
import PersonPreviewCard from "components/PersonPreviewCard/PersonPreviewCard";
import Tabs, { ITabSelection } from "components/Tabs/Tabs";
import { useState } from "react";

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
    dispatch(toggleModalState({ isVisible: true, content: "persons" }));
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
              <PersonPreviewCard {...person} key={`person-card--${index}`} />
            </PersonListElement>
          ))}
      </PersonsListWrapper>
    </PersonsContainer>
  );
};

export default Persons;
