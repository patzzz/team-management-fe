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
import { IPerson } from "models/interfaces";

// REDUX
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { personsList } from "slices/personSlice";
import { getAllPersons } from "api/personsApi";

// COMPONENTS
import PersonPreviewCard from "components/PersonPreviewCard/PersonPreviewCard";

const Persons = () => {
  // PROPS

  // CONSTANTS USING LIBRARIES
  const dispatch = useAppDispatch();
  const personsData: Array<IPerson> = useAppSelector(personsList);

  console.log("personsData", personsData);

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION
  useEffect(() => {
    dispatch(getAllPersons());
    // eslint-disable-next-line
  }, []);

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  return (
    <PersonsContainer>
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
