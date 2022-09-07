// @ts-nocheck
import React from "react";

// STYLES
import { TabsContainer, TabsWrapper } from "./TabsStyle";

// LIBRARIES

// MISC
import { PersonStatus, ProjectStatusEnum } from "models/interfaces";

// REDUX

// COMPONENTS
import ButtonAtom from "components/Atoms/ButtonAtom/ButtonAtom";

export interface IProps {
  selectedTab: ProjectStatusEnum | PersonStatus;
  selections: Array<ITabSelection>;
  handleSelectTab: (event: Event) => {};
  handleOpenModal: (event: Event) => {};
}

export interface ITabSelection {
  title: string;
  selection: ProjectStatusEnum;
}

const Tabs = (props: IProps) => {
  // PROPS
  const {
    selectedTab,
    selections,
    handleSelectTab = () => {},
    handleOpenModal = () => {},
  } = props;

  // CONSTANTS USING LIBRARIES

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  return (
    <TabsContainer>
      <TabsWrapper>
        {selections.map((selection) => (
          <ButtonAtom
            text={selection.title}
            buttonStyle={"secondary"}
            selected={selectedTab === selection.selection ? true : false}
            handleClick={() => handleSelectTab(selection.selection)}
            key={`selection--${selection.selection}`}
          />
        ))}
      </TabsWrapper>
      <ButtonAtom
        text="Add entity"
        buttonStyle={"secondary"}
        handleClick={handleOpenModal}
      />
    </TabsContainer>
  );
};

export default Tabs;
