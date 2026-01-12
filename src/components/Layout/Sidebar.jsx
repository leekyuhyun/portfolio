import React, { useState } from 'react';
import { infoData } from '@/data/info_data';
import './Sidebar.css';

const Sidebar = () => {
  const info = infoData.profile;
  const links = infoData.links;
  const baseUrl = import.meta.env.BASE_URL;

  // 연락처 숨김/펼침 상태 관리
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <aside className={`sidebar shadow-sm ${isContactOpen ? 'active' : ''}`}>
      {/* Show Contact 버튼 (모바일/화면 절반일 때만 보임) */}
      <button className="info_more-btn" onClick={() => setIsContactOpen(!isContactOpen)}>
        <span>{isContactOpen ? 'Hide Info' : 'Show Info'}</span>
      </button>

      <div className="sidebar-info">
        <figure className="avatar-box">
          <img
            src={`${baseUrl}${info.imageUrl.startsWith('/') ? info.imageUrl.slice(1) : info.imageUrl}`}
            alt={info.name}
          />
        </figure>
        <div className="info-content">
          <h1 className="name">{info.name}</h1>
          <p className="job-title">Frontend Developer</p>
        </div>
      </div>

      <div className="sidebar-more-info">
        <div className="divider my-4"></div>

        <div className="sidebar-contact">
          {/* 이메일 */}
          <div className="contact-item">
            <div className="icon-box">
              <img
                src={`${baseUrl}assets/image/mail-icon.png`}
                alt="Email"
                className="contact-icon"
              />
            </div>
            <div className="contact-text">
              <p className="contact-label">Email</p>
              <a href={`mailto:${info.email}`}>{info.email}</a>
            </div>
          </div>

          {/* 주소 */}
          <div className="contact-item">
            <div className="icon-box">
              <img
                src={`${baseUrl}assets/image/home-icon.png`}
                alt="Location"
                className="contact-icon"
              />
            </div>
            <div className="contact-text">
              <p className="contact-label">Location</p>
              <span>{info.address}</span>
            </div>
          </div>

          {/* 학력 */}
          <div className="contact-item">
            <div className="icon-box">
              <img
                src={`${baseUrl}assets/image/school-icon.png`}
                alt="Education"
                className="contact-icon"
              />
            </div>
            <div className="contact-text">
              <p className="contact-label">Education</p>
              <span>{info.education}</span>
            </div>
          </div>

          {/* 생년월일 */}
          <div className="contact-item">
            <div className="icon-box">
              <img
                src={`${baseUrl}assets/image/birth-icon.png`}
                alt="Birthday"
                className="contact-icon"
              />
            </div>
            <div className="contact-text">
              <p className="contact-label">Birthday</p>
              <span>{info.birth}</span>
            </div>
          </div>
        </div>

        {/* 소셜 링크 섹션 (GitHub, Velog) */}
        <div className="social-list d-flex justify-content-center gap-3 mt-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-item"
              title={link.name}
            >
              <img
                src={`${baseUrl}${link.icon.startsWith('/') ? link.icon.slice(1) : link.icon}`}
                alt={link.name}
                className="social-icon"
              />
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
