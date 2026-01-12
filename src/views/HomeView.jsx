import React, { useState } from 'react';
import Sidebar from '../components/Layout/Sidebar';
import Navbar from '../components/Layout/Navbar';
import AboutMe from '../components/AboutMe/AboutMe';
import Activity from '../components/Activity/Activity';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import './HomeView.css';

const HomeView = () => {
  const [activeTab, setActiveTab] = useState('About');

  const renderContent = () => {
    switch (activeTab) {
      case 'About':
        return <AboutMe />;
      case 'Activity':
        return <Activity />;
      case 'Skills':
        return <Skills />;
      case 'Projects':
        return <Projects />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div className="container py-4 py-lg-5">
      <div className="row g-4">
        {/* xl(1200px) 미만에서 상단으로 배치되도록 변경 */}
        <div className="col-xl-3">
          <Sidebar />
        </div>

        <div className="col-xl-9">
          <main
            className="main-content shadow-sm bg-white"
            style={{
              position: 'relative', // Navbar 배치를 위한 기준점
              borderRadius: '20px',
              overflow: 'visible', // Navbar가 카드 경계에 걸쳐있으므로 visible 권장
            }}
          >
            <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

            {/* Navbar의 높이만큼 위쪽 여백(pt-5 등)을 주어야 내용이 겹치지 않습니다. */}
            <div className="content-area p-4 pt-5">{renderContent()}</div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
