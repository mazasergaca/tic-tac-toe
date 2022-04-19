import styled from 'styled-components';

export const Item = styled.li`
  width: calc(100% / 3);
  height: calc(100% / 3);

  display: flex;
  align-items: center;
  justify-content: center;

  &:nth-child(1) {
    border-right: 1px solid #fff;
    border-bottom: 1px solid #fff;
  }
  &:nth-child(2) {
    border-right: 1px solid #fff;
    border-left: 1px solid #fff;
    border-bottom: 1px solid #fff;
  }
  &:nth-child(3) {
    border-left: 1px solid #fff;
    border-bottom: 1px solid #fff;
  }
  &:nth-child(4) {
    border-right: 1px solid #fff;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
  }
  &:nth-child(5) {
    border: 1px solid #fff;
  }
  &:nth-child(6) {
    border-left: 1px solid #fff;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
  }
  &:nth-child(7) {
    border-right: 1px solid #fff;
    border-top: 1px solid #fff;
  }
  &:nth-child(8) {
    border-right: 1px solid #fff;
    border-left: 1px solid #fff;
    border-top: 1px solid #fff;
  }
  &:nth-child(9) {
    border-left: 1px solid #fff;
    border-top: 1px solid #fff;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 100%;

  font-size: 80px;

  border: none;
  background-color: transparent;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    font-size: 120px;
  }
`;

export const Value = styled.span`
  color: #fff;
  filter: drop-shadow(0 0 10px #ea4884) drop-shadow(0 0 30px #ea4884)
    drop-shadow(0 0 60px #ea4884) drop-shadow(0 0 100px #ea4884);
`;
