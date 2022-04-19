import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  margin-bottom: 100px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    width: 500px;
  }
`;

export const ContainerInfo = styled.div`
  padding: 0 10px;
  width: 100%;
`;

export const InfoText = styled.p`
  text-align: center;
  font-size: 20px;

  color: #fff;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

export const SwitchContainer = styled.ul`
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.25);

  background-color: #000;
`;

export const SwitchItem = styled.li``;

export const SwitchButton = styled.button`
  position: relative;
  padding: 5px 10px;
  display: inline-block;

  transform: scale(0.8);
  opacity: 0.5;
  z-index: 100;
  border: none;
  backdrop-filter: blur(15px);
  background-color: transparent;
  color: #fff;
  transition: opacity 250ms linear;

  cursor: pointer;

  &:disabled {
    transform: scale(1);
    opacity: 1;
  }
`;

export const SwitchMarker = styled.div`
  position: absolute;
  top: 0;
  left: ${props => (props.players ? '67px' : '22px')};

  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 44px;
    height: 10px;

    border-radius: 4px;
    background-color: #0f0;
    box-shadow: 0 0 15px #5da6ff, 0 0 30px #5da6ff;

    @media screen and (min-width: 768px) {
      top: 0;
    }
  }
`;
