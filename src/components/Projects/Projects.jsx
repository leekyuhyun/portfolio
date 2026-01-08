import React from 'react';
import './Projects.css';
// projects_data.js에 정의된 정확한 변수명인 projectsData를 불러옵니다.
import { projectsData } from '../../data/projects_data';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title text-center">{'<PROJECTS />'}</h2>

        <div className="projects-grid">
          {/* projectsData 배열을 순회하며 카드를 생성합니다. */}
          {projectsData &&
            projectsData.map((project, index) => (
              <div key={index} className="project-card" data-aos="fade-up">
                <div className="project-content">
                  <div className="project-header">
                    <span className="project-type">{project.type}</span>
                    <span className="project-period">{project.period}</span>
                  </div>

                  <h3 className="project-title">{project.name}</h3>
                  <p className="project-context"># {project.context}</p>

                  <div className="project-description">
                    <p>{project.description}</p>
                  </div>

                  {/* 기술 스택 태그 출력 */}
                  <div className="project-tags">
                    {project.tags &&
                      project.tags.map((tag, tIndex) => (
                        <span key={tIndex} className="tag">
                          {tag}
                        </span>
                      ))}
                  </div>

                  {/* GitHub 링크 버튼 (보안 속성 rel="noreferrer" 추가) */}
                  <div className="project-links">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="link-btn github"
                      >
                        GitHub 바로가기
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
