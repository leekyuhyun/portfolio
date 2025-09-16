<template>
  <section id="journey" class="section">
    <div class="container" data-aos="fade-up">
      <h2 class="section-title text-center">&lt;Journey /&gt;</h2>
      <p class="text-center text-muted fs-4 mb-5 pb-4">
        끊임없이 배우고 성장하며, 더 나은 사용자 경험을 만들기 위해 나아가는 저의 여정입니다.
      </p>

      <div class="row align-items-center justify-content-center g-5">
        <div class="col-lg-4">
          <div class="journey-card h-100 shadow-sm">
            <h3 class="card-title">What I'm Learning</h3>
            <ul class="list-unstyled">
              <li>
                <strong class="d-block mb-1">TypeScript</strong>
                <span
                  >정적 타이핑을 통해 코드의 안정성을 높이고, 대규모 애플리케이션 개발 역량을 키우고
                  있습니다.</span
                >
              </li>
              <li>
                <strong class="d-block mb-1">Component Driven Development</strong>
                <span
                  >Storybook으로 독립적인 UI 컴포넌트를 개발하고, 재사용성과 테스트 효율성을 높이는
                  방법을 학습 중입니다.</span
                >
              </li>
            </ul>
          </div>
        </div>

        <div class="col-lg-4 col-md-8 my-5 my-lg-0">
          <div class="photo-collage">
            <div class="photo-frame photo-1" data-aos="fade-up" data-aos-delay="200">
              <img src="/assets/image/koren1.jpg" alt="Journey Photo 1" />
            </div>
            <div class="photo-frame photo-2" data-aos="fade-up" data-aos-delay="300">
              <img src="/assets/image/koren2.jpg" alt="Journey Photo 2" />
            </div>
            <div class="photo-frame photo-3" data-aos="fade-up" data-aos-delay="400">
              <img src="/assets/image/koren3.jpg" alt="Journey Photo 3" />
            </div>
            <div class="photo-frame photo-4" data-aos="fade-up" data-aos-delay="500">
              <img src="/assets/image/taiwan1.jpg" alt="Journey Photo 4" />
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="journey-card h-100 shadow-sm">
            <h3 class="card-title">My Next Goals</h3>
            <ul class="list-unstyled">
              <li>
                <strong class="d-block mb-1">Next.js</strong>
                <span
                  >SSR과 SSG에 대한 이해를 바탕으로 SEO 친화적이고 성능이 뛰어난 웹을 구축하고
                  싶습니다.</span
                >
              </li>
              <li>
                <strong class="d-block mb-1">GraphQL</strong>
                <span
                  >API 통신을 최적화하는 방법을 학습하고, 개인 프로젝트에 적용하는 것을 목표로 하고
                  있습니다.</span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// 이 컴포넌트는 UI만 담당합니다.
</script>

<style scoped>
#journey {
  background-color: #ffffff; /* 깔끔한 흰색 배경 */
}

.journey-card {
  background-color: #f8f9fa;
  border-radius: 15px;
  padding: 3rem;
  border: 1px solid #e9ecef;
}

.card-title {
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 2.5rem;
  color: var(--bs-primary);
}

.journey-card ul li {
  font-size: 1.6rem;
  line-height: 1.7;
  color: #495057;
}

.journey-card ul li:not(:last-child) {
  margin-bottom: 2rem;
}

.journey-card ul li strong {
  font-weight: 600;
  color: var(--text-color);
  font-size: 1.7rem;
}

/* --- 사진 콜라주 스타일 --- */
.photo-collage {
  position: relative;
  height: 350px;
  max-width: 400px; /* 최대 너비 지정 */
  margin: 0 auto; /* 가운데 정렬 */
}

.photo-frame {
  position: absolute;
  background-color: white;
  border: 10px solid white;
  border-bottom-width: 25px; /* 폴라로이드 아래쪽 여백 */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease-in-out;
}

.photo-frame:hover {
  transform: scale(1.05) rotate(0deg) !important; /* 호버 시 정면으로 확대 */
  z-index: 10;
}

.photo-frame img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* ▼▼▼ 각 사진의 위치와 각도 수정 (데스크톱) ▼▼▼ */
.photo-1 {
  width: 150px;
  height: 180px;
  top: 10%;
  left: 5%;
  transform: rotate(-12deg);
  z-index: 1;
}

.photo-2 {
  width: 160px;
  height: 200px;
  top: 0;
  left: 50%;
  transform: translateX(-50%) rotate(5deg);
  z-index: 2;
}

.photo-3 {
  width: 150px;
  height: 190px;
  top: 40%;
  left: 15%;
  transform: rotate(8deg);
  z-index: 3;
}

.photo-4 {
  width: 140px;
  height: 170px;
  top: 35%;
  left: 55%;
  transform: rotate(-5deg);
  z-index: 4;
}

/* 모바일 반응형 스타일 추가 */
@media (max-width: 991px) {
  .photo-collage {
    height: 300px; /* 모바일에서 높이 살짝 줄임 */
  }

  /* 모바일에서 사진 크기와 위치 재조정 */
  .photo-1 {
    width: 130px;
    height: 150px;
  }
  .photo-2 {
    width: 140px;
    height: 170px;
  }
  .photo-3 {
    width: 130px;
    height: 160px;
  }
  .photo-4 {
    width: 120px;
    height: 140px;
  }
}
</style>
