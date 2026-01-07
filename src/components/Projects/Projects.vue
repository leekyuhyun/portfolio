<template>
  <section id="projects" class="section">
    <div class="container">
      <h2 class="section-title text-center" data-aos="fade-up">&lt;PROJECTS /&gt;</h2>

      <div class="row g-4 project-section-container mt-5">
        <div class="col-lg-12 d-flex flex-column" data-aos="fade-up" data-aos-delay="100">
          <h3 class="project-type-title">{{ teamProjectsTitle }}</h3>

          <div class="project-scroll-container">
            <div class="project-horizontal-list">
              <div
                class="project-item-card"
                v-for="(project, index) in teamProjects"
                :key="project.name"
                data-aos="fade-up"
                :data-aos-delay="100 * index + 100"
              >
                <div class="card h-100 shadow-sm project-card d-flex flex-column">
                  <div class="card-body d-flex flex-column">
                    <div class="project-title-wrapper">
                      <h5 class="card-title fw-bold">{{ project.name }}</h5>
                      <p class="project-context text-muted">
                        {{ project.context }} ({{ project.team }})
                      </p>
                    </div>
                    <p class="card-text text-muted">{{ project.period }}</p>
                    <p class="card-text project-description-content">{{ project.description }}</p>
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
        </div>
      </div>
<!-----
      <div class="row g-4 project-section-container mt-5">
        <div class="col-lg-12 d-flex flex-column" data-aos="fade-up" data-aos-delay="200">
          <h3 class="project-type-title">{{ personalProjectsTitle }}</h3>

          <div class="project-scroll-container">
            <div class="project-horizontal-list">
              <div
                class="project-item-card"
                v-for="(project, index) in personalProjects"
                :key="project.name"
                data-aos="fade-up"
                :data-aos-delay="100 * index + 200"
              >
                <div class="card h-100 shadow-sm project-card d-flex flex-column">
                  <div class="card-body d-flex flex-column">
                    <div class="project-title-wrapper">
                      <h5 class="card-title fw-bold">{{ project.name }}</h5>
                      <p class="project-context text-muted">{{ project.context }}</p>
                    </div>
                    <p class="card-text text-muted">{{ project.period }}</p>
                    <p class="card-text project-description-content">{{ project.description }}</p>
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
        </div>
      </div> --->
      <div class="modal fade" id="projectReadmeModal" tabindex="-1">
        <div class="modal-dialog modal-xl modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">{{ selectedProject?.name }} - README</h5>
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
    </div>
  </section>
</template>

<script src="./Projects.js"></script>
<style scoped src="./Projects.css"></style>
