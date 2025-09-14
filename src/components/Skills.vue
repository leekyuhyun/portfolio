<template>
  <section id="skills" class="section">
    <div class="container">
      <h2 class="section-title text-center">&lt;Skills /&gt;</h2>
      <div class="row g-4">
        <div class="col-lg-3 col-md-6">
          <div class="card h-100 shadow-sm">
            <div class="card-body">
              <h3 class="card-title fs-4">Frontend</h3>
              <p class="card-text">HTML, CSS, JavaScript, Vue.js, React</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="card h-100 shadow-sm">
            <div class="card-body">
              <h3 class="card-title fs-4">Backend</h3>
              <p class="card-text">Node.js, Express</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="card h-100 shadow-sm">
            <div class="card-body">
              <h3 class="card-title fs-4">DevOps & Version Control</h3>
              <p class="card-text">Git, GitHub, Docker</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="card h-100 shadow-sm">
            <div class="card-body">
              <h3 class="card-title fs-4">Design & Collaboration</h3>
              <p class="card-text">Figma, Slack, Notion</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.card {
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1) !important;
}
</style>
