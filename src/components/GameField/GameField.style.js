import styled from 'styled-components';

export const Field = styled.div`
  position: relative;
  width: 90vw;
  height: 90vw;
  max-width: 500px;
  max-height: 500px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 500px;
    height: 500px;
  }
`;
