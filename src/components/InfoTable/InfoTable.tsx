import React, { FC } from 'react';

import {
  Container,
  ContainerInfo,
  InfoText,
  LinkStyled,
} from './InfoTable.style';

interface InfoTabsProps {
  winner: {
    winner: string;
    lines: number[];
  } | null;
  xIsNext: boolean;
}

const InfoTable: FC<InfoTabsProps> = ({ winner, xIsNext }) => {
  return (
    <Container>
      <ContainerInfo>
        <LinkStyled to="/menu">⇐</LinkStyled>
        <InfoText>
          {winner?.winner
            ? `Winner: ${winner.winner}`
            : `Next player: ${xIsNext ? 'X' : 'O'}`}
        </InfoText>
      </ContainerInfo>
    </Container>
  );
};

export default InfoTable;
