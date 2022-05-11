import styled from 'styled-components';

type StylesProp = {
  winner: boolean | null | string;
};

export const Container = styled.div<StylesProp>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;

  display: ${props => (props.winner ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #00000090;
`;

export const Text = styled.div`
  font-size: 32px;

  color: #fff;
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin-top: 15px;

  font-size: 22px;

  background-color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #ccc;
  }
`;
