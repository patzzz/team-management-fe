// LIBRARIES
import styled, { css } from "styled-components";
import { COLORS } from "constants/styleVariables";

export const StatusCardContainer = styled.div(
  ({ color }) => css`
    background-color: ${COLORS.primaryWhite};
    width: 330px;
    height: 110px;
    border-radius: 15px;
    box-shadow: 0px 5px 0px 0px ${color};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  `
);

export const IconWrapper = styled.div(
  ({ color }) => css`
    width: 30px;
    color: ${color};
    display: flex;
    align-items: center;
  `
);

export const DetailsWraper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 17px;
  text-align: left;
  color: ${COLORS.secondaryBlack};
  padding-bottom: 2px;
`;

export const Value = styled.div`
  font-size: 25px;
  text-align: left;
  color: ${COLORS.secondaryBlack};
  font-weight: 900;
  margin-right: 7px;
`;
