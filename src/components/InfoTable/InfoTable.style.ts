import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  margin-bottom: 70px;

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
