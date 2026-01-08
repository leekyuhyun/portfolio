import React from 'react';
import './Skills.css';
import { skillsData } from '../../data/skills_data';

const Skills = () => {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title text-center">{'<SKILLS />'}</h2>

        <div className="skills-container">
          {skillsData.map((category, index) => (
            <div key={index} className="skill-category-card">
              <div className="category-header">
                {category.icon && (
                  <img
                    // baseUrl과 결합 시 경로가 //가 되지 않도록 처리
                    src={`${baseUrl}${category.icon.startsWith('/') ? category.icon.slice(1) : category.icon}`}
                    alt={category.name}
                    className="category-icon"
                    onError={(e) => {
                      e.target.style.display = 'none'; // 이미지 로드 실패 시 아이콘 영역 숨김
                    }}
                  />
                )}
                <h3 className="category-name">{category.name}</h3>
              </div>

              <div className="skill-list">
                {category.skills.map((skill, sIndex) => (
                  <div
                    key={sIndex}
                    className="skill-item"
                    style={{
                      backgroundColor: skill.color,
                      color: skill.textColor || '#fff',
                    }}
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
