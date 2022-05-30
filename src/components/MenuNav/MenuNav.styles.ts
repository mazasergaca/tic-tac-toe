import styled from 'styled-components';

type StylesI = {
  bgc: string;
  borderColor: string;
};

export const Container = styled.div`
  margin-top: 70px;
`;

export const MenuItem = styled.button`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  border: none;
  background-color: transparent;

  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 70px;
  }

  &:hover .field {
    transform: translateY(-50%) scale(1.1) rotate(30deg);
  }

  &:hover .name {
    background-color: #d00e0e;
  }
`;

export const Field = styled.div`
  height: 100px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%) scale(1);

  border-radius: 50%;
  border: 1px solid #ff8a00;
  background-color: #ffa800;
  transition: transform 250ms;
`;

export const Svg = styled.svg`
  height: 60px;
  width: 70px;
`;

export const Name = styled.div<StylesI>`
  padding: 10px 0 10px 100px;
  width: 100%;

  text-align: center;
  border-radius: 20px;
  border: 2px solid ${props => props.borderColor};
  color: #fff;
  background-color: ${props => props.bgc};
  transition: background-color 250ms;
`;
