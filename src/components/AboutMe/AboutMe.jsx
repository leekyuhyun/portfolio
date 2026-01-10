import React from 'react';
import './AboutMe.css';
import { aboutMeData } from '../../data/aboutMe_data';

const AboutMe = () => {
  const info = aboutMeData;
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div className="about-content" data-aos="fade-up">
      <header className="mb-4">
        <h2 className="section-title">About Me</h2>
        <div className="title-underline"></div>
      </header>

      <div className="intro-text mb-5">
        <p className="motto">{'"Never Give Up, 노력은 배신하지 않는다"'}</p>
        <p className="description">
          성장은 재능이 아닌 꾸준한 노력의 결과라고 믿으며, <br />
          매일 발전의 계단을 오르는 개발자 <strong>이규현</strong>입니다.
        </p>
      </div>

      <div className="mt-5">
        <h4 className="sub-title mb-4">What I Do</h4>
        <div className="row g-4">
          <div className="col-md-12">
            <div className="achievement-card p-4 rounded-4 shadow-sm bg-light">
              <h5 className="fw-bold mb-3 text-primary">🏆 Achievements</h5>
              <div className="achievement-list">
                {info.trophies &&
                  info.trophies.map((trophy, index) => (
                    <div key={index} className="d-flex align-items-center mb-3">
                      <img
                        src={`${baseUrl}${trophy.icon.startsWith('/') ? trophy.icon.slice(1) : trophy.icon}`}
                        className="icon me-3"
                        style={{ width: '24px', height: '24px' }}
                        alt="trophy"
                      />
                      <span className="info-value">{trophy.name}</span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
