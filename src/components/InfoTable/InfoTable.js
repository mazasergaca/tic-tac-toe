import React from "react";
import {
  Container,
  ContainerInfo,
  InfoText,
  SwitchButton,
  SwitchContainer,
} from "./InfoTable.style";

export default function InfoTable({ winner, xIsNext, togglePlayers, players }) {
  return (
    <Container>
      <SwitchContainer>
        <SwitchButton disabled={players} onClick={togglePlayers}>
          2 players
        </SwitchButton>
        <SwitchButton disabled={!players} onClick={togglePlayers}>
          Computer
        </SwitchButton>
      </SwitchContainer>

      <ContainerInfo>
        <InfoText>
          {winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? "X" : "O"}`}
        </InfoText>
      </ContainerInfo>
    </Container>
  );
}
