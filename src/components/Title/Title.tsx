import React, { FC } from 'react';
import { WrapperTitle, Text } from './Title.style';

const Title: FC = () => {
  return (
    <WrapperTitle>
      <Text>TIC</Text>
      <Text>TAC</Text>
      <Text>TOE</Text>
    </WrapperTitle>
  );
};

export default Title;
