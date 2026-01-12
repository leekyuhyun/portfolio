import { aboutMeData } from '@/data/aboutMe_data';
import { infoData } from '@/data/info_data';
import './AboutMe.css';

const AboutMe = () => {
  const info = aboutMeData;
  const profile = infoData.profile;
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div className="about-content" data-aos="fade-up">
      <header className="mb-4">
        <h2 className="section-title">About Me</h2>
        <div className="title-underline"></div>
      </header>

      <div className="intro-text mb-5">
        <p className="motto">{'"Never Give Up, 노력은 배신하지 않는다"'}</p>
        <p className="description">
          성장은 재능이 아닌 꾸준한 노력의 결과라고 믿으며, <br />
          매일 발전의 계단을 오르는 개발자 <strong>{profile.name}</strong>입니다.
        </p>
      </div>

      {/* 1. What I Do (전문 분야) */}
      <div className="mt-5">
        <h4 className="sub-title mb-4">What I Do</h4>
        <div className="row row-cols-1 row-cols-md-2 g-4 mb-5">
          {info.services &&
            info.services.map((service, index) => (
              <div key={index} className="col">
                <div className="achievement-service-card p-4 h-100 shadow-sm">
                  <div className="d-flex align-items-start">
                    <div className="achievement-icon-box me-3 fs-3">
                      {service.icon.includes('/') ? (
                        <img
                          src={`${baseUrl}${service.icon.startsWith('/') ? service.icon.slice(1) : service.icon}`}
                          alt="icon"
                        />
                      ) : (
                        service.icon
                      )}
                    </div>
                    <div>
                      <h5 className="achievement-item-name mb-2">{service.title}</h5>
                      <p className="text-secondary small mb-0" style={{ lineHeight: '1.5' }}>
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* 2. Achievements (수상이력) */}
      <div className="mt-5">
        <h4 className="sub-title mb-4">Achievements</h4>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {info.trophies &&
            info.trophies.map((trophy, index) => (
              <div key={index} className="col">
                <div className="achievement-service-card p-4 h-100 shadow-sm">
                  <div className="d-flex align-items-center">
                    <div className="achievement-icon-box me-3">
                      <img
                        src={`${baseUrl}${trophy.icon.startsWith('/') ? trophy.icon.slice(1) : trophy.icon}`}
                        alt="trophy"
                      />
                    </div>
                    <div className="achievement-text-box">
                      <h5 className="achievement-item-name mb-0">{trophy.name}</h5>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
