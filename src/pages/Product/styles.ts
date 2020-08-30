import styled, { css } from 'styled-components';
import {
  ListItemText as ListItemTextMaterial,
  ListSubheader as ListSubheaderMaterial,
  Button as ButtonMaterial,
} from '@material-ui/core';

interface ContainerProps {
  last?: boolean;
}

export const ListItemText = styled(ListItemTextMaterial)`
  margin-left: 15px;

  span {
    color: #803934;
    font-weight: 500;
  }

  p {
    color: #cb4116;
  }
`;

export const ListSubheader = styled(ListSubheaderMaterial)`
  color: #803934 !important;
  background: #ece0df !important;
  font-weight: normal !important;
  font-size: 16px !important;
`;

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  margin: 0 5px;

  ${(props) =>
    !props.last &&
    css`
      border-bottom: 1px solid #dddddd;
    `}

  > span {
    color: #803934 !important;
    font-weight: 500;
    width: 50px;
    text-align: center;
  }
`;

export const Button = styled(ButtonMaterial)`
  border-radius: 4px;
  background: #ba000d !important;
  color: #ffffff !important;
  min-width: 40px !important;
`;

export const ButtonSubmit = styled(ButtonMaterial)`
  border-radius: 4px;
  width: 300px;
  background: #ba000d !important;
  color: #ffffff !important;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 15px;
  position: fixed;
  bottom: 0;
`;

export const ListContainer = styled.div`
  margin-bottom: 65px;
`;
