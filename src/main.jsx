import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './main.css';
import HomeView from './views/HomeView';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomeView />
  </StrictMode>,
);
