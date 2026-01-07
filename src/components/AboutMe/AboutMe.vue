<template>
  <section id="about" class="section">
    <div class="container">
      <h2 class="section-title text-center" data-aos="fade-up">&lt;ABOUT ME /&gt;</h2>
      <h2 class="section-subtitle text-center mb-5" data-aos="fade-up" data-aos-delay="100">
        제 소개를 할께요!
      </h2>
      <div class="about-card shadow-sm" data-aos="fade-up" data-aos-delay="100">
        <div class="row align-items-center justify-content-around gy-5">
          <div class="col-lg-4 text-center">
            <img :src="info.profile.imageUrl" class="profile-img" alt="프로필 사진" />
          </div>
          <div class="col-lg-6">
            <ul class="list-unstyled fs-4">
              <li class="d-flex align-items-center mb-4">
                <img src="/assets/image/user-icon.png" class="icon me-3" />
                <span>{{ info.profile.name }}</span>
              </li>
              <li class="d-flex align-items-center mb-3">
                <img src="/assets/image/birth-icon.png" class="icon me-3" />
                <span>{{ info.profile.birth }}</span>
              </li>
              <li class="d-flex align-items-center mb-3">
                <img src="/assets/image/home-icon.png" class="icon me-3" />
                <span>{{ info.profile.address }}</span>
              </li>
              <li class="d-flex align-items-center mb-3">
                <img src="/assets/image/mail-icon.png" class="icon me-3" />
                <span>{{ info.profile.email }}</span>
              </li>
              <li class="d-flex align-items-center">
                <img src="/assets/image/school-icon.png" class="icon me-3" />
                <span>{{ info.profile.education }}</span>
              </li>

              <li class="mt-5"></li>
              <li
                class="d-flex align-items-center mb-3"
                v-for="trophy in info.trophies"
                :key="trophy.name"
              >
                <img :src="trophy.icon" class="icon me-3" alt="Trophy Icon" />
                <span>{{ trophy.name }}</span>
              </li>

              <li class="mt-5"></li>
              <li
                class="d-flex align-items-center mb-3"
                v-for="link in info.links"
                :key="link.name"
              >
                <img :src="link.icon" class="icon me-3" />
                <a :href="link.url" target="_blank">{{ link.name }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script src="./AboutMe.js"></script>
<style scoped src="./AboutMe.css"></style>
