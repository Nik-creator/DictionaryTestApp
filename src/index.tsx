import { createRoot } from 'react-dom/client';
import { App } from './App';
import '@/styles/index.scss';
import { StoreProvider } from './store/StoreProvider';

const container = document.getElementById('root');

const rootDiv = createRoot(container as HTMLElement);

rootDiv.render(
  <StoreProvider>
    <App />
  </StoreProvider>
);
