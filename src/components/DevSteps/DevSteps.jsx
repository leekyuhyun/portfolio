import { blogData } from '@/data/blog_data';
import './DevSteps.css';

const DevSteps = () => {
  return (
    <div className="dev-steps-content" data-aos="fade-up">
      <header className="mb-4">
        {/* 다른 섹션처럼 글자는 검은색으로 유지 */}
        <h2 className="section-title">DevSteps</h2>
        {/* 파란색 밑줄 요소 */}
        <div className="title-underline"></div>
      </header>

      <div className="intro-text mb-5">
        <p className="description">
          배운 것을 내 것으로 만들기 위한 꾸준한 기록입니다. <br />
          매일의 TIL이 쌓여 견고한 실력이 된다고 믿습니다.
        </p>
      </div>

      <div className="row row-cols-1 row-cols-md-2 g-4">
        {blogData &&
          blogData.map((post, index) => (
            <div key={index} className="col">
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="blog-card-link"
              >
                <div className="achievement-service-card p-4 h-100 shadow-sm">
                  <div className="blog-date mb-2">{post.date}</div>
                  <h5 className="achievement-item-name mb-3">{post.title}</h5>
                  <p className="text-secondary small mb-3" style={{ lineHeight: '1.5' }}>
                    {post.summary}
                  </p>
                  <span className="read-more-text">글 보러가기 →</span>
                </div>
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DevSteps;
