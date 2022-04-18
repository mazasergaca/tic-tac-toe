import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 500px;
  margin: 0 auto 15px auto;

  display: flex;
`;

export const ContainerInfo = styled.div`
  width: 300px;
  margin: 0 auto;
  padding: 5px;
  background-color: #000;
`;

export const InfoText = styled.p`
  text-align: center;
  font-size: 32px;

  color: #fff;
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
    background-color: #66ffab;
  }
`;
