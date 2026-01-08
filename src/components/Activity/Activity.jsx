import React from 'react';
import './Activity.css';
import { onCampusData, offCampusData, ipAchievementsData } from '../../data/activity_data';

const Activity = () => {
  return (
    <section id="activity" className="activity-section">
      <div className="container">
        <h2 className="section-title text-center">{'<ACTIVITY />'}</h2>

        {/* 1. 교내 활동 섹션 */}
        <div className="activity-group">
          <h3 className="group-title"># {onCampusData.title}</h3>
          <div className="activity-grid">
            {onCampusData.items.map((item, index) => (
              <div key={index} className="activity-card">
                <span className="activity-period">{item.period}</span>
                <h4 className="activity-name">{item.title}</h4>
                {item.topic && (
                  <p className="activity-topic">
                    <strong>주제:</strong> {item.topic}
                  </p>
                )}
                <p className="activity-role">
                  <strong>역할:</strong> {item.role}
                </p>
                {item.details && <p className="activity-details">{item.details}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* 2. 교외 활동 섹션 */}
        <div className="activity-group">
          <h3 className="group-title"># {offCampusData.title}</h3>
          <div className="activity-grid">
            {offCampusData.items.map((item, index) => (
              <div key={index} className="activity-card highlight">
                <span className="activity-period">{item.period}</span>
                <h4 className="activity-name">{item.title}</h4>
                {item.topic && (
                  <p className="activity-topic">
                    <strong>주제:</strong> {item.topic}
                  </p>
                )}
                {item.role && (
                  <p className="activity-role">
                    <strong>역할:</strong> {item.role}
                  </p>
                )}
                {item.details && <p className="activity-details">{item.details}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* 3. 특허 및 지식재산 성과 섹션 */}
        <div className="activity-group">
          <h3 className="group-title"># {ipAchievementsData.title}</h3>
          <div className="ip-list">
            {ipAchievementsData.items.map((item, index) => (
              <div key={index} className="ip-card">
                <div className="ip-header">
                  <span className="ip-period">{item.period}</span>
                  <h4 className="ip-title">{item.title}</h4>
                </div>
                <div className="ip-body">
                  <p>
                    <strong>주제:</strong> {item.topic}
                  </p>
                  <p>
                    <strong>역할:</strong> {item.role}
                  </p>
                  {/* details의 <br> 태그를 렌더링하기 위해 dangerouslySetInnerHTML 사용 */}
                  <p className="ip-details" dangerouslySetInnerHTML={{ __html: item.details }}></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activity;
