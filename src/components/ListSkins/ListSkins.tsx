import React from 'react';
import Skin from '../Skin/Skin';
import { skins } from 'src/utils/skins';
import { List } from './ListSkins.styles';

const ListSkins = () => {
  return (
    <List>
      {skins.map((style, index) => (
        <Skin key={index} style={style} index={index} />
      ))}
    </List>
  );
};

export default ListSkins;
