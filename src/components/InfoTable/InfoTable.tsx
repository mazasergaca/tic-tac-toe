import React, { FC } from 'react';
import { Container, ContainerInfo, InfoText } from './InfoTable.style';

interface InfoTabsProps {
  winner: string | null;
  xIsNext: boolean;
}

const InfoTable: FC<InfoTabsProps> = ({ winner, xIsNext }) => {
  return (
    <Container>
      <ContainerInfo>
        <InfoText>
          {winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`}
        </InfoText>
      </ContainerInfo>
    </Container>
  );
};

export default InfoTable;
