<template>
  <section id="projects" class="section">
    <div class="container" data-aos="fade-up">
      <h2 class="section-title text-center">&lt;PROJECTS /&gt;</h2>

      <h3 class="project-type-title text-center mt-5 mb-4">TEAM PROJECTS</h3>
      <div class="row row-cols-1 row-cols-md-2 g-4 mb-5">
        <div class="col" v-for="project in teamProjects" :key="project.title">
          <div class="card h-100 shadow-sm project-card">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title fw-bold">{{ project.title }}</h5>
              <p class="card-text text-muted">{{ project.period }}</p>
              <p class="card-text">{{ project.description }}</p>
              <div class="d-flex flex-wrap gap-2 mt-auto pt-3">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="badge"
                  :style="getTagStyle(tag)"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
            <div class="card-footer bg-white border-0 p-3 d-flex justify-content-end gap-2">
              <a
                v-if="project.githubUrl"
                :href="project.githubUrl"
                target="_blank"
                class="btn btn-dark btn-sm"
                >GitHub</a
              >
              <a
                v-if="project.deployUrl"
                :href="project.deployUrl"
                target="_blank"
                class="btn btn-primary btn-sm"
                >Demo</a
              >
              <button
                v-if="project.readmeUrl"
                @click="openModal(project)"
                class="btn btn-info btn-sm"
              >
                README
              </button>
            </div>
          </div>
        </div>
      </div>

      <h3 class="project-type-title text-center mt-5 mb-4">PERSONAL PROJECTS</h3>
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col" v-for="project in personalProjects" :key="project.title">
          <div class="card h-100 shadow-sm project-card">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title fw-bold">{{ project.title }}</h5>
              <p class="card-text text-muted">{{ project.period }}</p>
              <p class="card-text">{{ project.description }}</p>
              <div class="d-flex flex-wrap gap-2 mt-auto pt-3">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="badge"
                  :style="getTagStyle(tag)"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
            <div class="card-footer bg-white border-0 p-3 d-flex justify-content-end gap-2">
              <a
                v-if="project.githubUrl"
                :href="project.githubUrl"
                target="_blank"
                class="btn btn-dark btn-sm"
                >GitHub</a
              >
              <a
                v-if="project.deployUrl"
                :href="project.deployUrl"
                target="_blank"
                class="btn btn-primary btn-sm"
                >Demo</a
              >
              <button
                v-if="project.readmeUrl"
                @click="openModal(project)"
                class="btn btn-info btn-sm"
              >
                README
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="projectReadmeModal" tabindex="-1">
      <div class="modal-dialog modal-xl modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ selectedProject?.title }} - README</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <div v-html="readmeContent" class="readme-content"></div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script src="./Projects.js"></script>
<style scoped src="./Projects.css"></style>
