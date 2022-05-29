import React from 'react';
import sprite from '../../assets/sprite.svg';
import Title from 'src/components/Title/Title';
import Link from 'src/components/Link/Link';
import { Container, WrapperLink, Svg } from './Home.styles';

const Home = () => {
  return (
    <Container>
      <Title />
      <Svg style={{ width: 65, height: 65, top: 320, left: '30%' }}>
        <use href={sprite + '#star'}></use>
      </Svg>
      <Svg style={{ width: 65, height: 65, top: 400, left: '50%' }}>
        <use href={sprite + '#star'}></use>
      </Svg>
      <Svg style={{ width: 65, height: 65, top: 320, left: '70%' }}>
        <use href={sprite + '#star'}></use>
      </Svg>
      <Svg style={{ width: 35, height: 35, top: 200, left: '90%' }}>
        <use href={sprite + '#star'}></use>
      </Svg>
      <Svg style={{ width: 35, height: 35, top: 200, left: '10%' }}>
        <use href={sprite + '#star'}></use>
      </Svg>
      <Svg style={{ width: 35, height: 35, top: 100, left: '6%' }}>
        <use href={sprite + '#star'}></use>
      </Svg>
      <Svg style={{ width: 35, height: 35, top: 100, left: '94%' }}>
        <use href={sprite + '#star'}></use>
      </Svg>
      <Svg style={{ width: 65, height: 65, top: '88%', left: '20%' }}>
        <use href={sprite + '#rocket'}></use>
      </Svg>
      <Svg style={{ width: 65, height: 65, top: '65%', left: '85%' }}>
        <use href={sprite + '#alien'}></use>
      </Svg>
      <WrapperLink>
        <Link color="#000" size={24} bgc="#ffffff" to="/menu">
          Let’s play
        </Link>
      </WrapperLink>
    </Container>
  );
};

export default Home;
