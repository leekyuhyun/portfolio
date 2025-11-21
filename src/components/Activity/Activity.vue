<template>
  <section id="activity" class="section">
    <div class="container">
      <h2 class="section-title text-center" data-aos="fade-up">&lt;Activity /&gt;</h2>

      <div class="row g-4 activity-card-wrapper">
        <div class="col-lg-6" data-aos="fade-up">
          <div class="card p-4 shadow-sm h-100">
            <h3 class="fs-4 mb-4 text-primary fw-bold">{{ activityData.onCampus.title }}</h3>
            <ul class="activity-list list-unstyled mb-0">
              <li
                v-for="(item, index) in activityData.onCampus.items"
                :key="'on-campus-' + index"
                class="activity-item"
              >
                <p class="activity-period fw-bold">{{ item.period }}</p>
                <p class="activity-title">{{ item.title }}</p>
                <div class="activity-details">
                  <p v-if="item.topic"><strong>주제:</strong> {{ item.topic }}</p>
                  <p v-if="item.role"><strong>역할:</strong> {{ item.role }}</p>
                  <p v-if="item.details" class="details-text">
                    <strong>주요 내용:</strong> {{ item.details }}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <div class="card p-4 shadow-sm h-100">
            <h3 class="fs-4 mb-4 text-primary fw-bold">{{ activityData.offCampus.title }}</h3>
            <ul class="activity-list list-unstyled mb-0">
              <li
                v-for="(item, index) in activityData.offCampus.items"
                :key="'off-campus-' + index"
                class="activity-item"
              >
                <p class="activity-period fw-bold">{{ item.period }}</p>
                <p class="activity-title">{{ item.title }}</p>
                <div class="activity-details">
                  <p v-if="item.topic"><strong>주제:</strong> {{ item.topic }}</p>
                  <p v-if="item.role"><strong>역할:</strong> {{ item.role }}</p>
                  <p v-if="item.details" class="details-text">
                    <strong>주요 내용:</strong> {{ item.details }}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script src="./Activity.js"></script>
<style scoped src="./Activity.css"></style>
