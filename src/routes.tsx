import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { RouteType } from './types/routing';
import { PageLoader } from './components/PageLoader';

const renderRoutes = (routes: RouteType[]) => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routes.map(({ component: Component, path }) => {
          return <Route key={path} path={path} element={<Component />} />;
        })}
      </Routes>
    </Suspense>
  );
};

const routes: RouteType[] = [
  {
    path: '/',
    component: lazy(() => import('@/pages/MainPage')),
  },
];

export { routes, renderRoutes };
