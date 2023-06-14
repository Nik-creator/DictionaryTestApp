import { Navigate, Route, Routes } from 'react-router-dom';
import { Fragment, Suspense, lazy } from 'react';
import { RouteType } from '@/types/routing';
import { PageLoader } from '@/components/PageLoader';
import { MainLayout } from '@/layouts/MainLayout';
import { TopBar } from '@/components/TopBar';
import { NavBar } from '@/components/NavBar';

const renderRoutes = (routes: RouteType[]) => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routes.map(({ component, path, layout }) => {
          const Component = component || Fragment;
          const Layout = layout;

          const element = Layout ? (
            <Layout
              content={<Component />}
              header={<TopBar />}
              navbar={<NavBar />}
            />
          ) : <Component />;

          return <Route key={path} path={path} element={element} />;
        })}
      </Routes>
    </Suspense>
  );
};

const routes: RouteType[] = [
  {
    path: '/',
    component: lazy(() => import('@/pages/MainPage')),
    layout: MainLayout,
  },
  {
    path: '/favorites',
    component: lazy(() => import('@/pages/FavoritesPage')),
    layout: MainLayout,
  },
  {
    path: '/404',
    component: lazy(() => import('@/pages/NotFoundPage')),
  },
  {
    path: '*',
    // @ts-ignore //TODO: разобраться с типами
    component: () => <Navigate to={'/404'} />,
  },
];

export { routes, renderRoutes };
