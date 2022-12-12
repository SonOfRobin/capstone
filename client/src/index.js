import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './css/index.css';
import { ThemeProvider } from '@mui/material/styles';
import RootTheme from './css/RootTheme';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthWrapper from './layouts/AuthWrapper';
import ProtectedRoutes from './layouts/ProtectedRoutes';
import PublicRoutes from './layouts/PublicRoutes';
import ErrorPage from './routes/error-page';
import Root from './routes/Root';
import Home from './routes/Home';

const router = createBrowserRouter([
  {
    element: <AuthWrapper />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Root />,
      },
      {
        element: <PublicRoutes />,
        children: [
          {
            path: '/main',
            element: <Home />,
          },
        ],
      },
      {
        element: <ProtectedRoutes />,
        children: []
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={RootTheme} >
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
