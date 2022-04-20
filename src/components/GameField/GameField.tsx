import React, {FC} from "react";
import { Field } from "./GameField.style";

interface GameFieldProps {
  children: React.ReactChild | React.ReactNode;
}

export const GameField: FC<GameFieldProps> = ({ children }) => {
  return <Field>{children}</Field>;
}
