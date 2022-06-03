import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  max-width: 300px;
  padding: 15px;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 20px;
  border: 3px solid #391898;
  background-color: #451cbb;
`;

export const WrapperSkins = styled.div`
  height: 80px;
  width: 130px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SkinStyled = styled(motion.p)`
  font-size: 5rem;
  line-height: 1;

  color: #fff;

  &:not(:last-of-type) {
    margin-right: 10px;
  }
`;

export const Button = styled.button`
  margin-top: 10px;
  height: 32px;
  width: 75px;

  border-radius: 20px;
  border: none;
  color: #fff;
  background-color: #4c9bd4;
  cursor: pointer;

  &:hover {
    background-color: #4c90d4;
  }

  &:disabled {
    background-color: #43e068;
  }
`;

export const ListColors = styled.ul`
  position: absolute;
  right: 3px;
`;

export const ItemColor = styled.li`
  width: 20px;
  height: 20px;
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const ButtonColor = styled.button`
  height: 100%;
  width: 100%;

  border: none;
  background-color: ${props => props.color};
  cursor: pointer;

  &:disabled {
    border-radius: 50%;
  }
`;

export const ArrowButton = styled.button`
  position: absolute;
  top: 20%;

  font-size: 40px;

  border: none;
  color: #fff;
  background-color: transparent;
  cursor: pointer;

  &.left {
    left: -45px;
  }

  &.right {
    right: -45px;
  }

  &:disabled {
    color: #ffffff90;
  }
`;
