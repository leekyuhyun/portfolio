import React from 'react';
import './Footer.css';

const Footer = () => {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-links">
          <a
            href="https://github.com/leekyuhyun"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img src={`${baseUrl}assets/image/git-icon.png`} alt="GitHub" />
          </a>
          <a href="mailto:leekh010502@naver.com" className="social-icon">
            <img src={`${baseUrl}assets/image/mail-icon.png`} alt="Email" />
          </a>
        </div>

        <p className="copyright-text">&copy; 2025 kyulee Portfolio. All rights reserved.</p>

        <div className="attributions">
          <details>
            <summary>Icon Attributions</summary>
            <ul>
              <li>
                <a href="https://www.flaticon.com/" target="_blank" rel="noreferrer">
                  Icons by Freepik, Stasy, Those Icons - Flaticon
                </a>
              </li>
            </ul>
          </details>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
