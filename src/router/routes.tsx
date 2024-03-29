import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

const Layout = lazy(() => import('@/components/Layout'));
const NoMatch = lazy(() => import('@/components/NoMatch'));
const Home = lazy(() => import('@/pages/Home'));
const Read = lazy(() => import('@/pages/Read'));
const Recommend = lazy(() => import('@/pages/Read/pages/Recommend'));
const Like = lazy(() => import('@/pages/Read/pages/Like'));
const Random = lazy(() => import('@/pages/Read/pages/Random'));
const Temple = lazy(() => import('@/pages/Temple'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Temple />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/read',
        element: <Read />,
        children: [
          {
            index: true,
            element: <Recommend />,
          },
          {
            path: '/read/recommend',
            element: <Recommend />,
          },
          {
            path: '/read/like',
            element: <Like />,
          },
          {
            path: '/read/:id',
            element: <Random />,
          },
        ],
      },
      {
        path: '/temple',
        element: <Temple />,
      },
      { path: '*', element: <NoMatch /> },
    ],
  },
];

export default routes;
