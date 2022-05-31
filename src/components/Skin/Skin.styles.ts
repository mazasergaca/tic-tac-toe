import styled from 'styled-components';

export const Item = styled.li`
  padding: 15px;
  width: calc((100% - 15px) / 2);
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
  font-size: 80px;

  color: #fff;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const Button = styled.button`
  padding: 8px 24px;

  border-radius: 20px;
  border: none;
  color: #bbb;
  background-color: #4c9bd4;

  &:disabled {
    background-color: #377aab;
  }
`;
