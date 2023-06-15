import React from 'react';
import { renderRoutes, routes } from './routes';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from './store/StoreProvider';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useInitFavorites } from './hooks/useInitFavorites';

const App = () => {
  useInitFavorites()

  return (
    <BrowserRouter>
    <DndProvider backend={HTML5Backend}>
      <div className='app'>
        {renderRoutes(routes)}
      </div>
    </DndProvider>
    </BrowserRouter>
  );
};

export { App };
