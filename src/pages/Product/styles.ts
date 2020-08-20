import styled from 'styled-components';
import {
  ListItemText as ListItemTextMaterial,
  ListSubheader as ListSubheaderMaterial,
} from '@material-ui/core';

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

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  > span {
    color: #803934 !important;
    font-weight: 500;
  }
`;
