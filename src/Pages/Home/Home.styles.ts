import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  position: relative;
  padding: 40px 15px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const WrapperLink = styled.div`
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
`;

export const Svg = styled(motion.svg)`
  position: absolute;
  transform: translateX(-50%);

  z-index: -1;
`;
