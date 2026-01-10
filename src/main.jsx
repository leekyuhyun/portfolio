// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; // 부트스트랩 추가
import './main.css';
import HomeView from './views/HomeView';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomeView />
  </StrictMode>,
);
