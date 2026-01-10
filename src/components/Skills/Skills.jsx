import React from 'react';
import './Skills.css';
import { skillsData } from '../../data/skills_data';

const Skills = () => {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div className="skills-content" data-aos="fade-up">
      <header className="mb-4">
        <h2 className="section-title">Skills</h2>
        <div className="title-underline"></div>
      </header>

      <div className="skills-grid-container mt-5">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {skillsData.map((category, index) => (
            <div key={index} className="col">
              <div className="skill-category-card h-100 shadow-sm">
                <div className="category-header d-flex align-items-center mb-4">
                  <div className="category-icon-wrapper me-3">
                    {category.icon && (
                      <img
                        src={`${baseUrl}${category.icon.startsWith('/') ? category.icon.slice(1) : category.icon}`}
                        alt={category.name}
                        className="category-icon"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    )}
                  </div>
                  <h3 className="category-name mb-0">{category.name}</h3>
                </div>

                <div className="skill-badge-list d-flex flex-wrap gap-2">
                  {category.skills.map((skill, sIndex) => (
                    <div
                      key={sIndex}
                      className="skill-badge-item"
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
