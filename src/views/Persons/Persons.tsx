import React from "react";

// STYLES
import {
  PersonListElement,
  PersonsContainer,
  PersonsListWrapper,
} from "./PersonsStyle";

// LIBRARIES

// MISC
import { personsList } from "mocks/projectsMock";

// REDUX

// COMPONENTS
import PersonPreviewCard from "components/PersonPreviewCard/PersonPreviewCard";

const Persons = () => {
  // PROPS

  // CONSTANTS USING LIBRARIES

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  return (
    <PersonsContainer>
      <PersonsListWrapper>
        {personsList?.map((person, index) => {
          return (
            <PersonListElement>
              <PersonPreviewCard {...person} key={`project-list--${index}`} />
            </PersonListElement>
          );
        })}
      </PersonsListWrapper>
    </PersonsContainer>
  );
};

export default Persons;
