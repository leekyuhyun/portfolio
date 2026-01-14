import gitIcon from '/assets/image/git-icon.png';
import './Projects.css';
import { projectsData } from '@/data/projects_data';

const Projects = () => {
  return (
    <div className="projects-content" data-aos="fade-up">
      <header className="mb-4">
        <h2 className="section-title">Projects</h2>
        <div className="title-underline"></div>
      </header>

      <div className="intro-text mb-5">
        <p className="description">
          기록하며 쌓아온 고민의 결과물입니다. <br />
          단순히 코드를 작성하는 것에 그치지 않고, <br />
          해결책을 찾기 위해 분투한 과정들을 담았습니다.
        </p>
      </div>

      <div className="projects-grid-container mt-5">
        <div className="row row-cols-1 row-cols-lg-2 g-4">
          {projectsData &&
            projectsData.map((project, index) => (
              <div key={index} className="col">
                <div className="project-item-card h-100 shadow-sm">
                  <div className="project-card-header d-flex justify-content-between align-items-start mb-3">
                    <span className={`project-badge ${project.type.toLowerCase()}`}>
                      {project.type}
                    </span>
                    <span className="project-period-text">{project.period}</span>
                  </div>

                  <div className="project-info mb-4">
                    <h3 className="project-item-title mb-1">{project.name}</h3>
                    <p className="project-context-text text-secondary mb-3">
                      <span className="context-icon">📌</span> {project.context}
                    </p>
                    <p className="project-desc-text text-muted">{project.description}</p>
                  </div>

                  <div className="project-footer mt-auto">
                    <div className="project-tag-list d-flex flex-wrap gap-2 mb-4">
                      {project.tags &&
                        project.tags.map((tag, tIndex) => (
                          <span key={tIndex} className="tech-tag">
                            {tag}
                          </span>
                        ))}
                    </div>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="github-link-btn"
                      >
                        <img src={gitIcon} alt="git" className="btn-icon" />
                        GitHub Repository
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
