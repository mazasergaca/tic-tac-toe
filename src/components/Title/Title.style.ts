import styled from 'styled-components';

export const WrapperTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.span`
  font-size: 76px;
  font-weight: bold;
  line-height: 1.1;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:nth-child(1) {
    color: #ffa800;
  }
  &:nth-child(2) {
    color: #eb00ff;
  }
  &:nth-child(3) {
    color: #4c9bd4;
  }
`;
