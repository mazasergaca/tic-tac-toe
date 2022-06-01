import styled from 'styled-components';

export const Item = styled.li`
  position: relative;
  padding: 15px;
  width: calc((100% - 15px) / 2);
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 3px solid #391898;
  border-radius: 20px;
  background-color: #451cbb;

  &:nth-child(2n - 1) {
    margin-right: 15px;
  }

  &:nth-last-child(n + 3) {
    margin-bottom: 15px;
  }
`;

export const WrapperSkins = styled.div`
  display: flex;
`;

export const SkinStyled = styled.p`
  font-size: 5rem;
  line-height: 1;

  color: #fff;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const Button = styled.button`
  margin-top: 10px;
  height: 32px;
  width: 75px;

  border-radius: 20px;
  border: none;
  color: #fff;
  background-color: #4c9bd4;
  cursor: pointer;

  &:hover {
    background-color: #4c90d4;
  }

  &:disabled {
    background-color: #43e068;
  }
`;

export const ListColors = styled.ul`
  position: absolute;
  right: 3px;
`;

export const ItemColor = styled.li`
  width: 20px;
  height: 20px;
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const ButtonColor = styled.button`
  height: 100%;
  width: 100%;

  border: none;
  background-color: ${props => props.color};
  cursor: pointer;

  &:disabled {
    border-radius: 50%;
  }
`;
