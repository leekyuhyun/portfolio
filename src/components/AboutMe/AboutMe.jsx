import React from 'react';
import './AboutMe.css';
import { aboutMeData } from '../../data/aboutMe_data';

const AboutMe = () => {
  const info = aboutMeData;

  // Vite에서 public 경로를 처리하기 위한 베이스 URL
  const baseUrl = import.meta.env.BASE_URL;

  if (!info || !info.profile) return null;

  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title text-center">{'<ABOUT ME />'}</h2>

        <div className="about-card shadow-sm">
          <div className="row align-items-center">
            {/* 프로필 이미지 섹션 */}
            <div className="col-lg-4 text-center">
              <img
                src={`${baseUrl}${info.profile.imageUrl.startsWith('/') ? info.profile.imageUrl.slice(1) : info.profile.imageUrl}`}
                className="profile-img"
                alt="프로필 사진"
                onError={(e) => {
                  // 에러 시 기본 이미지 경로도 baseUrl 적용
                  e.target.src = `${baseUrl}assets/image/Profile.jpg`;
                }}
              />
            </div>

            {/* 정보 리스트 섹션 */}
            <div className="col-lg-6">
              <ul className="list-unstyled">
                <li className="mb-3 d-flex align-items-center">
                  <img
                    src={`${baseUrl}assets/image/user-icon.png`}
                    className="icon me-3"
                    alt="icon"
                  />
                  <span>이름: {info.profile.name}</span>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <img
                    src={`${baseUrl}assets/image/birth-icon.png`}
                    className="icon me-3"
                    alt="icon"
                  />
                  <span>생년월일: {info.profile.birth}</span>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <img
                    src={`${baseUrl}assets/image/home-icon.png`}
                    className="icon me-3"
                    alt="icon"
                  />
                  <span>주소: {info.profile.address}</span>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <img
                    src={`${baseUrl}assets/image/mail-icon.png`}
                    className="icon me-3"
                    alt="icon"
                  />
                  <span>이메일: {info.profile.email}</span>
                </li>
                <li className="mb-4 d-flex align-items-center">
                  <img
                    src={`${baseUrl}assets/image/school-icon.png`}
                    className="icon me-3"
                    alt="icon"
                  />
                  <span>학력: {info.profile.education}</span>
                </li>

                <hr />
                {info.trophies.map((trophy, index) => (
                  <li key={index} className="mb-2 d-flex align-items-center">
                    <img
                      src={`${baseUrl}${trophy.icon.startsWith('/') ? trophy.icon.slice(1) : trophy.icon}`}
                      className="icon me-3"
                      alt="trophy"
                    />
                    <span>{trophy.name}</span>
                  </li>
                ))}

                <hr />
                {info.links.map((link, index) => (
                  <li key={index} className="mb-2 d-flex align-items-center">
                    <img
                      src={`${baseUrl}${link.icon.startsWith('/') ? link.icon.slice(1) : link.icon}`}
                      className="icon me-3"
                      alt="link"
                    />
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.name} 바로가기
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
