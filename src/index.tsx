import { createRoot } from 'react-dom/client';
import { App } from './App';
import '@/styles/index.scss';

const container = document.getElementById('root');

const rootDiv = createRoot(container as HTMLElement);

rootDiv.render(<App />);
