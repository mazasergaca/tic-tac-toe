import styled from 'styled-components';

export const List = styled.ul`
  width: 90vw;
  height: 90vw;
  max-width: 500px;
  max-height: 500px;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-wrap: wrap;

  background-color: #ffffff20;

  @media screen and (min-width: 768px) {
    width: 500px;
    height: 500px;
  }
`;
