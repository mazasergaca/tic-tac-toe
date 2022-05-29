import React from 'react';
import sprite from '../../assets/sprite.svg';
import { Container, MenuItem, Field, Svg, LinkStyled } from './MenuNav.styles';

const MenuNav = () => {
  return (
    <Container>
      <MenuItem>
        <Field style={{ border: '2px solid #FF8A00' }}>
          <Svg>
            <use href={sprite + '#alien-1player'}></use>
          </Svg>
        </Field>
        <LinkStyled to="/game" bgc="#F3501D" borderColor="#FFA800">
          Single Player
        </LinkStyled>
      </MenuItem>
      <MenuItem>
        <Field
          style={{ backgroundColor: '#EB00FF', border: '1px solid #FF00A8' }}
        >
          <Svg>
            <use href={sprite + '#alien-1player'}></use>
          </Svg>
          <Svg>
            <use href={sprite + '#alien-2players'}></use>
          </Svg>
        </Field>
        <LinkStyled to="/game" bgc="#7213EB" borderColor="#EB00FF">
          Two Players
        </LinkStyled>
      </MenuItem>
      <MenuItem>
        <Field
          style={{ backgroundColor: '#391898', border: '1px solid #843CE0' }}
        >
          <Svg>
            <use href={sprite + '#market'}></use>
          </Svg>
        </Field>
        <LinkStyled to="/market" bgc="#451CBB" borderColor="#843CE0">
          Market Place
        </LinkStyled>
      </MenuItem>
      <MenuItem>
        <Field
          style={{ backgroundColor: '#4C9BD4', border: '2px solid #5D5FEF' }}
        >
          <Svg>
            <use href={sprite + '#achievement'}></use>
          </Svg>
        </Field>
        <LinkStyled to="/achievement" bgc="#33A6BF" borderColor="#5D5FEF">
          Achievements
        </LinkStyled>
      </MenuItem>
    </Container>
  );
};

export default MenuNav;
