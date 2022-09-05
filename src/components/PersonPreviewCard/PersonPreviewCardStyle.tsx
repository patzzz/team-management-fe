import styled from "styled-components";
import { COLORS } from "constants/variables";

export const PersonPreviewCardContainer = styled.div`
  background-color: ${COLORS.primaryWhite};
  width: 100%;
  height: 100%;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 5px 5px 19px -3px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  cursor: pointer;
  gap: 10px;
`;

export const PersonPreviewCardTitle = styled.span`
  font-size: 20px;
  text-transform: capitalize;
`;

export const PersonPreviewCardStatus = styled.span`
  font-size: 18px;
  text-transform: uppercase;
  color: ${COLORS.secondaryRed};
`;

export const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

export const DetailsWrapper = styled.div`
  background-color: "transparent";
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
`;
