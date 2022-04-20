import React, { FC } from 'react';
import { IoPersonOutline } from 'react-icons/io5';
import { AiOutlineTeam } from 'react-icons/ai';
import {
  Container,
  ContainerInfo,
  InfoText,
  SwitchButton,
  SwitchContainer,
  SwitchItem,
  SwitchMarker,
} from './InfoTable.style';

interface InfoTabsProps {
  winner: string;
  xIsNext: boolean;
  togglePlayers: ()=> void;
  players: boolean;
}

 export const InfoTable: FC<InfoTabsProps> = ({ winner, xIsNext, togglePlayers, players }) => {
  return (
    <Container>
      <SwitchContainer>
        <SwitchItem>
          <SwitchButton onClick={togglePlayers} disabled={!players}>
            <IoPersonOutline size="25px" />
          </SwitchButton>
        </SwitchItem>
        <SwitchItem>
          <SwitchButton onClick={togglePlayers} disabled={players}>
            <AiOutlineTeam size="25px" />
          </SwitchButton>
        </SwitchItem>
        <SwitchMarker players={players} />
      </SwitchContainer>

      <ContainerInfo>
        <InfoText>
          {winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`}
        </InfoText>
      </ContainerInfo>
    </Container>
  );
}

