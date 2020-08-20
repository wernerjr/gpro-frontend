import styled from 'styled-components';
import { Tabs, Tab } from '@material-ui/core';

export const MaterialTabs = styled(Tabs)`
  display: flex;
  width: 100%;
`;

export const MaterialTab = styled(Tab)`
  flex: 1;
  max-width: none !important;
`;
