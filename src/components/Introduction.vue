<template>
  <section id="introduction" class="d-flex align-items-center text-center text-white">
    <div class="container">
      <h1 class="display-2 fw-bold">이규현</h1>
      <p class="lead fs-1 my-4">프론트엔드 개발자 포트폴리오</p>
      <p class="lead fs-2 my-5">
        안녕하세요, 사용자 경험을 중요하게 생각하는 프론트엔드 개발자입니다
      </p>
      <a href="#about" class="btn btn-outline-light btn-lg px-4"> 더 알아보기 ↓ </a>
    </div>
  </section>
</template>
<script setup></script>

<style scoped>
#introduction {
  height: 80vh;
  background:
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('/assets/image/Introduct.png') no-repeat center center/cover;
}

/* --- 반응형 스타일 추가 --- */
@media (max-width: 768px) {
  #introduction {
    height: 70vh;
  }
  .display-2 {
    font-size: calc(1.625rem + 4.5vw); /* 부트스트랩 기본값 활용 */
  }
  .fs-1 {
    font-size: calc(1.375rem + 1.5vw) !important;
  }
  .fs-2 {
    font-size: calc(1.325rem + 0.9vw) !important;
  }
}
</style>
