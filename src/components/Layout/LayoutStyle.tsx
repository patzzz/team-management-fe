// LIBRARIES
import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
`;

export const SideMenuWrapper = styled.div`
  width: 15vw;
  height: 100vh;
`;

export const RightSideWrapper = styled.div`
  width: 85vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f8f9fb;
`;

export const HeaderWrapper = styled.div`
  width: 85vw;
  height: 15vh;
`;

export const ContentWrapper = styled.div`
  width: 85vw;
  height: 100%;
  overflow: auto;
`;
