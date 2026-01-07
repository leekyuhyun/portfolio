<template>
  <section id="activity" class="section bg-light">
    <div class="container">
      <h2 class="section-title text-center" data-aos="fade-up">&lt; ACTIVITY /&gt;</h2>

      <div class="activity-group mt-5" data-aos="fade-up">
        <h3 class="activity-group-title mb-4">{{ onCampus.title }}</h3>
        <div class="row g-4">
          <div class="col-12" v-for="(item, index) in onCampus.items" :key="'on-' + index">
            <div class="card activity-card border-0 shadow-sm">
              <div 
                class="card-header bg-white p-4 d-flex justify-content-between align-items-center"
                style="cursor: pointer;"
                data-bs-toggle="collapse" 
                :data-bs-target="'#onCollapse' + index"
                aria-expanded="false"
              >
                <div class="d-flex align-items-center flex-wrap gap-3">
                  <span class="badge bg-primary px-3 py-2 fs-6">{{ item.period }}</span>
                  <h4 class="mb-0 fw-bold fs-3 text-dark">{{ item.title }}</h4>
                </div>
                <i class="bi bi-chevron-down toggle-icon fs-3"></i>
              </div>
              <div :id="'onCollapse' + index" class="collapse">
                <div class="card-body p-4 border-top bg-body-tertiary">
                  <div class="activity-detail-text fs-4 text-secondary">
                    <p v-if="item.topic"><strong>주제:</strong> {{ item.topic }}</p>
                    <p v-if="item.role"><strong>역할:</strong> {{ item.role }}</p>
                    <p v-if="item.details" class="mb-0" v-html="item.details"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="activity-group mt-5" data-aos="fade-up">
        <h3 class="activity-group-title mb-4 text-success-emphasis border-success">{{ offCampus.title }}</h3>
        <div class="row g-4">
          <div class="col-12" v-for="(item, index) in offCampus.items" :key="'off-' + index">
            <div class="card activity-card border-0 shadow-sm">
              <div 
                class="card-header bg-white p-4 d-flex justify-content-between align-items-center"
                style="cursor: pointer;"
                data-bs-toggle="collapse" 
                :data-bs-target="'#offCollapse' + index"
                aria-expanded="false"
              >
                <div class="d-flex align-items-center flex-wrap gap-3">
                  <span class="badge bg-success px-3 py-2 fs-6">{{ item.period }}</span>
                  <h4 class="mb-0 fw-bold fs-3 text-dark">{{ item.title }}</h4>
                </div>
                <i class="bi bi-chevron-down toggle-icon fs-3"></i>
              </div>
              <div :id="'offCollapse' + index" class="collapse">
                <div class="card-body p-4 border-top bg-body-tertiary">
                  <div class="activity-detail-text fs-4 text-secondary">
                    <p v-if="item.topic"><strong>주제:</strong> {{ item.topic }}</p>
                    <p v-if="item.role"><strong>역할:</strong> {{ item.role }}</p>
                    <p v-if="item.details" class="mb-0" v-html="item.details"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="activity-group mt-5" data-aos="fade-up">
        <h3 class="activity-group-title mb-4 text-warning-emphasis border-warning">{{ ipAchievements.title }}</h3>
        <div class="row g-4">
          <div class="col-12" v-for="(item, index) in ipAchievements.items" :key="'ip-' + index">
            <div class="card activity-card border-0 shadow-sm">
              <div 
                class="card-header bg-white p-4 d-flex justify-content-between align-items-center"
                style="cursor: pointer;"
                data-bs-toggle="collapse" 
                :data-bs-target="'#ipCollapse' + index"
                aria-expanded="false"
              >
                <div class="d-flex align-items-center flex-wrap gap-3">
                  <span class="badge bg-warning text-dark px-3 py-2 fs-6">{{ item.period }}</span>
                  <h4 class="mb-0 fw-bold fs-3 text-dark">{{ item.title }}</h4>
                </div>
                <i class="bi bi-chevron-down toggle-icon fs-3"></i>
              </div>
              <div :id="'ipCollapse' + index" class="collapse">
                <div class="card-body p-4 border-top bg-body-tertiary">
                  <div class="activity-detail-text fs-4 text-secondary">
                    <p v-if="item.topic"><strong>주제:</strong> {{ item.topic }}</p>
                    <p v-if="item.role"><strong>역할:</strong> {{ item.role }}</p>
                    <p v-if="item.details" class="mb-0" v-html="item.details"></p>
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