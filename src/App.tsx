import React from 'react';
import { renderRoutes, routes } from './routes';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from './store/StoreProvider';

const App = () => {
  return (
    <StoreProvider>
      <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
    </StoreProvider>
  );
};

export { App };
