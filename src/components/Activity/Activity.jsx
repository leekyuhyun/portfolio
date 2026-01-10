import React, { useState } from 'react';
import './Activity.css';
import { onCampusData, offCampusData, ipAchievementsData } from '../../data/activity_data';

const Activity = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // category 프로프를 추가하여 색상을 구분합니다.
  const ActivityItem = ({ item, id, category }) => {
    const isExpanded = expandedId === id;

    return (
      <div className={`activity-list-item ${category} ${isExpanded ? 'active' : ''}`}>
        <div className="activity-item-header" onClick={() => toggleExpand(id)}>
          <div className="activity-item-main">
            <span className="activity-period-badge">{item.period}</span>
            <h4 className="activity-item-title">{item.title}</h4>
          </div>
          <span className={`expand-icon ${isExpanded ? 'rotated' : ''}`}>▼</span>
        </div>

        <div className={`activity-item-details ${isExpanded ? 'show' : ''}`}>
          <div className="details-inner">
            {item.topic && (
              <p className="details-text">
                <strong>주제:</strong> {item.topic}
              </p>
            )}
            {item.role && (
              <p className="details-text">
                <strong>역할:</strong> {item.role}
              </p>
            )}
            {item.details && (
              <div className="details-text details-extra">
                <p dangerouslySetInnerHTML={{ __html: item.details }}></p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="activity-content" data-aos="fade-up">
      <header className="mb-4">
        <h2 className="section-title">Activity</h2>
        <div className="title-underline"></div>
      </header>

      {/* 1. 교내 활동 - 블루(on-campus) */}
      <div className="activity-group-box">
        <h3 className="group-title-text title-blue"># {onCampusData.title}</h3>
        <div className="activity-list-container">
          {onCampusData.items.map((item, index) => (
            <ActivityItem key={`on-${index}`} item={item} id={`on-${index}`} category="on-campus" />
          ))}
        </div>
      </div>

      {/* 2. 교외 활동 - 그린(off-campus) */}
      <div className="activity-group-box">
        <h3 className="group-title-text title-green"># {offCampusData.title}</h3>
        <div className="activity-list-container">
          {offCampusData.items.map((item, index) => (
            <ActivityItem
              key={`off-${index}`}
              item={item}
              id={`off-${index}`}
              category="off-campus"
            />
          ))}
        </div>
      </div>

      {/* 3. 특허 및 성과 - 옐로우/오렌지(ip-achieve) */}
      <div className="activity-group-box">
        <h3 className="group-title-text title-yellow"># {ipAchievementsData.title}</h3>
        <div className="activity-list-container">
          {ipAchievementsData.items.map((item, index) => (
            <ActivityItem
              key={`ip-${index}`}
              item={item}
              id={`ip-${index}`}
              category="ip-achieve"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activity;
