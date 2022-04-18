import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 80vw;
  margin: 0 auto 15px auto;

  display: flex;

  @media screen and (min-width: 768px) {
    width: 500px;
  }
`;

export const ContainerInfo = styled.div`
  width: 30vw;
  margin: 0 auto;
  padding: 5px;
  background-color: #000;

  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;

export const InfoText = styled.p`
  text-align: center;
  font-size: 16px;

  color: #fff;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

export const SwitchContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
`;

export const SwitchButton = styled.button`
  width: 80px;

  border: 1px solid #000;
  background-color: #fff;
  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 5px;
  }

  &:disabled {
    color: #000;

    border: none;
    background: rgb(182, 116, 186);
    background: linear-gradient(
      83deg,
      rgba(182, 116, 186, 1) 0%,
      rgba(255, 55, 224, 1) 100%
    );
  }
`;
