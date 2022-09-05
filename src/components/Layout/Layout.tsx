import React from "react";

// STYLES
import * as Styled from "./LayoutStyle";

// LIBRARIES

// MISC
import { IProps } from "./LayoutModel";

// REDUX

// COMPONENTS
import Header from "components/Header/Header";
import SideMenu from "components/SideMenu/SideMenu";

const Layout = (props: IProps) => {
  // PROPS
  const { children } = props;

  // CONSTANTS USING LIBRARIES

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  return (
    <Styled.LayoutContainer>
      <Styled.SideMenuWrapper>
        <SideMenu />
      </Styled.SideMenuWrapper>
      <Styled.RightSideWrapper>
        <Styled.HeaderWrapper>
          <Header />
        </Styled.HeaderWrapper>
        <Styled.ContentWrapper>{children}</Styled.ContentWrapper>
      </Styled.RightSideWrapper>
    </Styled.LayoutContainer>
  );
};

export default Layout;
