import { createRoot } from 'react-dom/client';
import { App } from './App';

const container = document.getElementById('root');

const rootDiv = createRoot(container as HTMLElement);

rootDiv.render(<App />);
