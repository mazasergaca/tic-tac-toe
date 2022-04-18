import React from "react";
import Square from "../Square/Square";
import { List } from "./SquaresList.style";

export default function SquaresList({ squares, onClick }) {
  return (
    <List>
      {Array(9)
        .fill(1)
        .map((_, index) => (
          <Square
            key={index}
            value={squares[index]}
            onClick={() => onClick(index)}
          />
        ))}
    </List>
  );
}
