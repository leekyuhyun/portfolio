<template>
  <section id="journey" class="section">
    <div class="container" data-aos="fade-up">
      <h2 class="section-title text-center">&lt;Journey /&gt;</h2>
      <p class="text-center text-muted fs-4 mb-5 pb-4">
        끊임없이 배우고 성장하며, 더 나은 사용자 경험을 만들기 위해 나아가는 저의 여정입니다.
      </p>

      <div class="row g-3 g-lg-4 mb-5 justify-content-center">
        <div v-for="(photo, index) in journeyData.photos" :key="photo.src" class="col-6 col-md-3">
          <div class="photo-frame" data-aos="fade-up" :data-aos-delay="100 * index">
            <img :src="photo.src" :alt="photo.alt" />
          </div>
        </div>
      </div>

      <div class="row g-5 mt-5">
        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="400">
          <div class="journey-card h-100 shadow-sm">
            <h3 class="card-title">{{ journeyData.learning.title }}</h3>
            <ul class="list-unstyled">
              <li v-for="item in journeyData.learning.items" :key="item.subject">
                <strong class="d-block mb-1">{{ item.subject }}</strong>
                <span>{{ item.description }}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="500">
          <div class="journey-card h-100 shadow-sm">
            <h3 class="card-title">{{ journeyData.goals.title }}</h3>
            <ul class="list-unstyled">
              <li v-for="item in journeyData.goals.items" :key="item.subject">
                <strong class="d-block mb-1">{{ item.subject }}</strong>
                <span>{{ item.description }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script src="./Journey.js"></script>
<style scoped src="./Journey.css"></style>
