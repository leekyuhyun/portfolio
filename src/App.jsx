import React from 'react';
import HomeView from './views/HomeView'; // HomeView를 메인으로 사용
import './App.css';

function App() {
  return (
    <div className="App">
      {/* HomeView 내부에서 AboutMe를 보여줍니다 */}
      <HomeView />
    </div>
  );
}

export default App;
