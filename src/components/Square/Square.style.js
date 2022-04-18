import styled from 'styled-components';

export const Item = styled.li`
  width: calc(100% / 3);
  height: calc(100% / 3);

  display: flex;
  align-items: center;
  justify-content: center;

  outline: 1px solid #fff;
`;

export const Button = styled.button`
  width: 100%;
  height: 100%;

  font-size: 80px;

  border: none;
  background-color: transparent;
  color: #fff;
  cursor: pointer;

  &:focus {
    background-color: #ffffff30;
  }

  @media screen and (min-width: 768px) {
    font-size: 120px;
  }
`;
