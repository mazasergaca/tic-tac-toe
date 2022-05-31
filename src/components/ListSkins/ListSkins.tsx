import React from 'react';
import Skin from '../Skin/Skin';
import { List } from './ListSkins.styles';

const ListSkins = () => {
  const arr = Array(1).fill(0);
  return (
    <List>
      {arr.map(item => (
        <Skin />
      ))}
    </List>
  );
};

export default ListSkins;
