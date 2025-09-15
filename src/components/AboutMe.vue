<template>
  <section id="about" class="section">
    <div class="container">
      <h2 class="section-title text-center">&lt;ABOUT ME /&gt;</h2>

      <div class="about-card shadow-sm">
        <div class="row align-items-center justify-content-between gy-5">
          <div class="col-lg-4 text-center">
            <img :src="getImageUrl(info.profile.imageUrl)" class="profile-img" alt="프로필 사진" />
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
                v-for="link in info.links"
                :key="link.name"
              >
                <img :src="getImageUrl(link.icon)" class="icon me-3" />
                <a :href="link.url" target="_blank">{{ link.name }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="row mt-5 pt-4 justify-content-center">
        <div class="col-md-8">
          <div class="card p-4 shadow-sm h-100">
            <h3 class="d-flex align-items-center fs-4">
              <img :src="getImageUrl(info.activity.icon)" class="icon me-3" />
              {{ info.activity.title }}
            </h3>
            <p class="mb-0" v-html="info.activity.description"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { aboutMeData } from '@/data/aboutMe.js'

const info = ref(aboutMeData)

const getImageUrl = path => {
  return new URL(path.replace('@', '/src'), import.meta.url).href
}
</script>

<style scoped>
.about-card {
  background-color: white;
  border-radius: 1.5rem;
  padding: 5rem;
  max-width: 95rem;
  margin: 0 auto;
  border: 1px solid #f0f0f0;
}

.profile-img {
  width: 30rem;
  height: 35rem;
  object-fit: cover;
  border: 5px solid #f8f9fa;
  border-radius: 50%;
}

.icon {
  width: 3rem;
  height: 3rem;
}

a {
  color: var(--bs-primary);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* --- 반응형 스타일 추가 --- */
@media (max-width: 992px) {
  .about-card {
    padding: 3rem;
  }
  .profile-img {
    width: 25rem;
    height: 28rem;
  }
}

@media (max-width: 576px) {
  .about-card {
    padding: 2rem;
  }
  .profile-img {
    width: 20rem;
    height: 23rem;
  }
  ul {
    text-align: center; /* 모바일에서 텍스트 중앙 정렬 */
  }
  .d-flex {
    justify-content: center; /* 아이콘과 텍스트 중앙 정렬 */
  }
}
</style>
