import React from 'react';
import { useNavigate } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';
import { Container, MenuItem, Field, Svg, Name } from './MenuNav.styles';

const MenuNav = () => {
  const navigation = useNavigate();

  const navigate = (path: string): void => {
    navigation(path);
  };

  const navigateToGame = (type: string): void => {
    navigation({ pathname: '/game', search: `type=${type}` });
  };

  return (
    <Container>
      <MenuItem onClick={() => navigateToGame('one-player')}>
        <Field className="field" style={{ border: '2px solid #FF8A00' }}>
          <Svg>
            <use href={sprite + '#alien-1player'}></use>
          </Svg>
        </Field>
        <Name className="name" bgc="#F3501D" borderColor="#FFA800">
          Single Player
        </Name>
      </MenuItem>
      <MenuItem onClick={() => navigateToGame('two-players')}>
        <Field
          className="field"
          style={{ backgroundColor: '#EB00FF', border: '1px solid #FF00A8' }}
        >
          <Svg>
            <use href={sprite + '#alien-1player'}></use>
          </Svg>
          <Svg>
            <use href={sprite + '#alien-2players'}></use>
          </Svg>
        </Field>
        <Name className="name" bgc="#7213EB" borderColor="#EB00FF">
          Two Players
        </Name>
      </MenuItem>
      <MenuItem onClick={() => navigate('/market')}>
        <Field
          className="field"
          style={{ backgroundColor: '#391898', border: '1px solid #843CE0' }}
        >
          <Svg>
            <use href={sprite + '#market'}></use>
          </Svg>
        </Field>
        <Name className="name" bgc="#451CBB" borderColor="#843CE0">
          Market Place
        </Name>
      </MenuItem>
      <MenuItem onClick={() => navigate('/achievement')}>
        <Field
          className="field"
          style={{ backgroundColor: '#4C9BD4', border: '2px solid #5D5FEF' }}
        >
          <Svg>
            <use href={sprite + '#achievement'}></use>
          </Svg>
        </Field>
        <Name className="name" bgc="#33A6BF" borderColor="#5D5FEF">
          Achievements
        </Name>
      </MenuItem>
    </Container>
  );
};

export default MenuNav;
