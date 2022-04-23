import { createRoot } from 'react-dom/client';
import App from './App';
import '@/style/index.scss';

// React 18 写法
const container = document.querySelector('#root');
const root = createRoot(container!);
root.render(<App />);
