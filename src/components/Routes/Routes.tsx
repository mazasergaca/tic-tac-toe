import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('../../Pages/Home/Home'));
const Menu = lazy(() => import('../../Pages/Menu/Menu'));
const Game = lazy(() => import('../../Pages/Game/Game'));
const Market = lazy(() => import('../../Pages/Market/Market'));
const Achievement = lazy(() => import('../../Pages/Achievement/Achievement'));

const RoutesComponent = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/game" element={<Game />} />
        <Route path="/market" element={<Market />} />
        <Route path="/achievement" element={<Achievement />} />
      </Routes>
    </Suspense>
  );
};

export default RoutesComponent;
