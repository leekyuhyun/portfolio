<template>
  <section id="about" class="section">
    <div class="container">
      <h2 class="section-title text-center">&lt;ABOUT ME /&gt;</h2>

      <div class="about-card shadow-sm">
        <div class="row align-items-center justify-content-between gy-5">
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

      <div class="row mt-5 pt-4 justify-content-center">
        <div class="col-md-8">
          <div class="card p-4 shadow-sm h-100">
            <h3 class="d-flex align-items-center fs-4">
              <img :src="info.activity.icon" class="icon me-3" />
              {{ info.activity.title }}
            </h3>
            <p class="mb-0" v-html="info.activity.description"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script src="./AboutMe.js"></script>
<style scoped src="./AboutMe.css"></style>
