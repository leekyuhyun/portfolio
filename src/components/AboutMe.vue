<template>
  <section id="about" class="section">
    <div class="container">
      <h2 class="section-title text-center">&lt;ABOUT ME /&gt;</h2>
      <div class="row align-items-center justify-content-center">
        <div class="col-lg-4 text-center">
          <img
            src="@/assets/image/Profile.jpg"
            class="img-fluid rounded-circle shadow"
            alt="프로필 사진"
          />
        </div>
        <div class="col-lg-5 mt-5 mt-lg-0">
          <ul class="list-unstyled fs-5">
            <li class="d-flex align-items-center mb-3">
              <img src="@/assets/image/user-icon.png" class="icon me-3" /> 이규현
            </li>
            <li class="d-flex align-items-center mb-3">
              <img src="@/assets/image/birth-icon.png" class="icon me-3" /> 2001.05.02
            </li>
            <li class="d-flex align-items-center mb-3">
              <img src="@/assets/image/home-icon.png" class="icon me-3" /> 경기도 시흥시
            </li>
            <li class="d-flex align-items-center">
              <img src="@/assets/image/mail-icon.png" class="icon me-3" />
              leekh010502@naver.com
            </li>
            <hr class="my-4" />
            <li class="d-flex align-items-center mb-3">
              <img src="@/assets/image/instagram-icon.png" class="icon me-3" />
              <a href="https://www.instagram.com/leeeeeee_kyu_h" target="_blank">Instagram</a>
            </li>
            <li class="d-flex align-items-center mb-3">
              <img src="@/assets/image/git-icon.png" class="icon me-3" />
              <a href="https://github.com/leekyuhyun" target="_blank">GitHub</a>
            </li>
            <li class="d-flex align-items-center">
              <img src="@/assets/image/vlog-icon.png" class="icon me-3" />
              <a href="https://velog.io/@leekh010502" target="_blank">Velog</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="row mt-5 pt-5">
        <div class="col-md-8 mx-auto">
          <div class="card p-4 shadow-sm">
            <h3 class="d-flex align-items-center fs-4">
              <img src="@/assets/image/school-icon.png" class="icon me-3" /> Activity
            </h3>
            <p class="mb-0">2023.07.01 ~<br />멋쟁이사자처럼 프론트엔드 스쿨 1기 수료</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.rounded-circle {
  width: 25rem;
  height: 25rem;
  object-fit: cover;
}
.icon {
  width: 2.4rem;
  height: 2.4rem;
}
a {
  color: var(--bs-primary);
}
</style>
