import React, { useEffect } from 'react';
import './Introduction.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Introduction = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="introduction" className="intro-section">
      <div className="intro-container">
        <h1 className="intro-title" data-aos="fade-up">
          개발자 포트폴리오
        </h1>

        <div className="intro-motto" data-aos="fade-up" data-aos-delay="100">
          <p className="motto-text-strong">Never Give Up</p>
          <p className="motto-text-strong">노력은 배신하지 않는다</p>
        </div>

        <p className="intro-description" data-aos="fade-up" data-aos-delay="200">
          성장은 재능이 아닌 꾸준한 노력의 결과라고 믿으며,
          <br />
          매일 발전의 계단을 오르는 개발자 이규현입니다
        </p>

        <a href="#about" className="intro-btn" data-aos="fade-up" data-aos-delay="300">
          더 알아보기 ↓
        </a>
      </div>
    </section>
  );
};

export default Introduction;
