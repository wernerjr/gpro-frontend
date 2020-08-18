import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  background: #ffffff;
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  height: calc(100vh - 75px);
  width: 79px;
  float: left;

  display: flex;
  align-items: baseline;
  justify-content: center;

  svg {
    margin-top: 24px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #bdbdbd;
  }
`;
