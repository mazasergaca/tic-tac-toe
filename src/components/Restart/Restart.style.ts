import styled from 'styled-components';
import { motion } from 'framer-motion';

type StylesProp = {
  winner?: boolean | null | string;
  bgc?: string;
  color?: string;
};

export const Container = styled(motion.div)<StylesProp>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 320px;

  /* display: ${props => (props.winner ? 'flex' : 'none')}; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  overflow: hidden;
  border-radius: 20px;
  background-color: #391898;
`;

export const Text = styled(motion.p)<StylesProp>`
  margin-bottom: 15px;
  font-size: 32px;

  color: ${props => props.color};
`;

export const Backdrop = styled(motion.div)<StylesProp>`
  height: 150px;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background-color: ${props => props.bgc};
`;

export const Svg = styled(motion.svg)`
  width: 100px;
  height: 100px;
`;

export const WrapperButton = styled(motion.div)`
  margin-top: 25px;
`;

export const Button = styled.button<StylesProp>`
  width: 100px;
  padding: 10px 0px;

  font-size: 12px;

  border: none;
  border-radius: 20px;
  color: #fff;
  background-color: ${props => props.bgc};
  cursor: pointer;
  transition: background-color 250ms;

  &:hover {
    background-color: ${props => props.bgc + '90'};
  }

  &:not(:last-child) {
    margin-right: 10px;
  }
`;
