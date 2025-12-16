<template>
  <section id="activity" class="section">
    <div class="container">
      <h2 class="section-title text-center" data-aos="fade-up">&lt;Activity /&gt;</h2>

      <div class="row g-4 activity-section-container">
        <div class="col-lg-12 d-flex flex-column" data-aos="fade-up">
          <h3 class="activity-section-title">{{ activitySections.onCampus.title }}</h3>
          <div class="activity-scroll-container">
            <div class="activity-horizontal-list">
              <div
                v-for="(item, index) in activitySections.onCampus.items"
                :key="'on-campus-' + index"
                class="activity-item-card"
                data-aos="fade-up"
                :data-aos-delay="index * 100"
              >
                <div class="card p-4 shadow-sm h-100 d-flex flex-column">
                  <p class="activity-period fw-bold text-primary">{{ item.period }}</p>
                  <h4 class="activity-title fs-5 fw-bold">{{ item.title }}</h4>

                  <div class="activity-details">
                    <p v-if="item.topic"><strong>주제:</strong> {{ item.topic }}</p>
                    <p v-if="item.role"><strong>역할:</strong> {{ item.role }}</p>
                    <p v-if="item.details" class="details-text">
                      <strong>내용:</strong> <span v-html="item.details"></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row g-4 activity-section-container mt-4">
        <div class="col-lg-12 d-flex flex-column" data-aos="fade-up" data-aos-delay="100">
          <h3 class="activity-section-title">{{ activitySections.offCampus.title }}</h3>
          <div class="activity-scroll-container">
            <div class="activity-horizontal-list">
              <div
                v-for="(item, index) in activitySections.offCampus.items"
                :key="'off-campus-' + index"
                class="activity-item-card"
                data-aos="fade-up"
                :data-aos-delay="index * 100 + 100"
              >
                <div class="card p-4 shadow-sm h-100 d-flex flex-column">
                  <p class="activity-period fw-bold text-primary">{{ item.period }}</p>
                  <h4 class="activity-title fs-5 fw-bold">{{ item.title }}</h4>

                  <div class="activity-details">
                    <p v-if="item.topic"><strong>주제:</strong> {{ item.topic }}</p>
                    <p v-if="item.role"><strong>역할:</strong> {{ item.role }}</p>
                    <p v-if="item.details" class="details-text">
                      <strong>내용:</strong> <span v-html="item.details"></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row g-4 activity-section-container mt-4">
        <div class="col-lg-12 d-flex flex-column" data-aos="fade-up" data-aos-delay="200">
          <h3 class="activity-section-title">{{ activitySections.ipAchievements.title }}</h3>
          <div class="activity-scroll-container">
            <div class="activity-horizontal-list">
              <div
                v-for="(item, index) in activitySections.ipAchievements.items"
                :key="'ip-achievements-' + index"
                class="activity-item-card"
                data-aos="fade-up"
                :data-aos-delay="index * 100 + 200"
              >
                <div class="card p-4 shadow-sm h-100 d-flex flex-column">
                  <p class="activity-period fw-bold text-primary">{{ item.period }}</p>
                  <h4 class="activity-title fs-5 fw-bold">{{ item.title }}</h4>

                  <div class="activity-details">
                    <p v-if="item.topic"><strong>주제:</strong> {{ item.topic }}</p>
                    <p v-if="item.role"><strong>역할:</strong> {{ item.role }}</p>
                    <p v-if="item.details" class="details-text">
                      <strong>내용:</strong> <span v-html="item.details"></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script src="./Activity.js"></script>
<style scoped src="./Activity.css"></style>
