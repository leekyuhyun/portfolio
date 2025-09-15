<template>
  <section id="projects" class="section">
    <div class="container">
      <h2 class="section-title text-center">&lt;PROJECTS /&gt;</h2>

      <h3 class="project-type-title text-center mt-5 mb-4">TEAM PROJECTS</h3>
      <div class="row row-cols-1 row-cols-md-2 g-4 mb-5">
        <div class="col" v-for="project in teamProjects" :key="project.title">
          <div class="card h-100 shadow-sm project-card">
            <div class="card-body">
              <h5 class="card-title fw-bold">{{ project.title }}</h5>
              <p class="card-text text-muted">{{ project.period }}</p>
              <p class="card-text">{{ project.description }}</p>
              <div class="d-flex flex-wrap gap-2 mb-3">
                <span v-for="tag in project.tags" :key="tag" class="badge bg-secondary">{{
                  tag
                }}</span>
              </div>
              <div class="d-flex gap-2">
                <a :href="project.githubUrl" target="_blank" class="btn btn-dark btn-sm">GitHub</a>
                <a
                  v-if="project.deployUrl"
                  :href="project.deployUrl"
                  target="_blank"
                  class="btn btn-primary btn-sm"
                  >Demo</a
                >
                <button @click="openModal(project)" class="btn btn-info btn-sm">README</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 class="project-type-title text-center mt-5 mb-4">PERSONAL PROJECTS</h3>
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col" v-for="project in personalProjects" :key="project.title">
          <div class="card h-100 shadow-sm project-card">
            <div class="card-body">
              <h5 class="card-title fw-bold">{{ project.title }}</h5>
              <p class="card-text text-muted">{{ project.period }}</p>
              <p class="card-text">{{ project.description }}</p>
              <div class="d-flex flex-wrap gap-2 mb-3">
                <span v-for="tag in project.tags" :key="tag" class="badge bg-secondary">{{
                  tag
                }}</span>
              </div>
              <div class="d-flex gap-2">
                <a :href="project.githubUrl" target="_blank" class="btn btn-dark btn-sm">GitHub</a>
                <a
                  v-if="project.deployUrl"
                  :href="project.deployUrl"
                  target="_blank"
                  class="btn btn-primary btn-sm"
                  >Demo</a
                >
                <button @click="openModal(project)" class="btn btn-info btn-sm">README</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="projectReadmeModal"
      tabindex="-1"
      aria-labelledby="projectReadmeModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="projectReadmeModalLabel">
              {{ selectedProject?.title }} - README
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
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

<script setup>
import { ref, onMounted, computed } from 'vue'
import { projectsData } from '@/data/projects.js'
import { marked } from 'marked' // Markdown 파싱 라이브러리
import { Modal } from 'bootstrap' // Bootstrap Modal JS

// 프로젝트 데이터를 타입별로 분류
const teamProjects = computed(() => projectsData.filter(p => p.type === 'Team'))
const personalProjects = computed(() => projectsData.filter(p => p.type === 'Personal'))

// 모달 관련
const selectedProject = ref(null)
const readmeContent = ref('')
let projectReadmeModal = null // Bootstrap Modal 인스턴스

onMounted(() => {
  projectReadmeModal = new Modal(document.getElementById('projectReadmeModal'))
})

// README 파일을 fetch하여 HTML로 변환하는 함수
const fetchReadme = async url => {
  if (!url) {
    readmeContent.value = '<p>README 파일 링크가 없습니다.</p>'
    return
  }
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`README 파일을 불러오는 데 실패했습니다: ${response.statusText}`)
    }
    const markdown = await response.text()
    readmeContent.value = marked.parse(markdown)
  } catch (error) {
    console.error('Error fetching README:', error)
    readmeContent.value = '<p>README 파일을 불러올 수 없습니다. 링크를 확인해주세요.</p>'
  }
}

const openModal = project => {
  selectedProject.value = project
  // project.readmeUrl을 fetchReadme 함수에 전달
  fetchReadme(project.readmeUrl)
  projectReadmeModal.show()
}
</script>

<style scoped>
/* 기존 스타일은 그대로 유지합니다. */
.project-type-title {
  font-size: 2.2rem;
  color: var(--bs-primary); /* 강조 색상 */
  margin-top: 5rem;
  margin-bottom: 3rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.project-type-title::before,
.project-type-title::after {
  content: '';
  flex-grow: 1;
  height: 1px;
  background-color: #e0e0e0;
  margin: 0 1.5rem;
}

.section-title {
  margin-bottom: 4rem;
}

.project-card {
  transition:
    transform 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out;
  cursor: pointer;
  border-radius: 10px;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.card-title {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

.card-text {
  font-size: 1.4rem;
  line-height: 1.6;
}

.badge {
  font-size: 1.1rem;
  padding: 0.5em 0.75em;
}

.modal-title {
  font-weight: bold;
}

/* README content 내부의 마크다운 스타일링 */
.readme-content :deep(img) {
  /* :deep() 셀렉터를 사용하여 scoped css에서 자식 컴포넌트(v-html로 렌더링된) 스타일링 */
  max-width: 100%;
  height: auto;
  display: block;
  margin: 1.5rem auto;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.readme-content :deep(h1),
.readme-content :deep(h2),
.readme-content :deep(h3) {
  margin-top: 2rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.5rem;
}

.readme-content :deep(h1) {
  font-size: 2.5rem;
}
.readme-content :deep(h2) {
  font-size: 2rem;
}
.readme-content :deep(h3) {
  font-size: 1.75rem;
}

.readme-content :deep(p) {
  margin-bottom: 1rem;
  line-height: 1.7;
}

.readme-content :deep(ul),
.readme-content :deep(ol) {
  margin-bottom: 1rem;
  padding-left: 2rem;
}

.readme-content :deep(code) {
  background-color: #f8f8f8;
  border-radius: 4px;
  padding: 0.2em 0.4em;
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
}

.readme-content :deep(pre) {
  background-color: #f8f8f8;
  border-radius: 4px;
  padding: 1rem;
  overflow-x: auto;
}

/* 추가: Demo 버튼이 없을 경우 GitHub 버튼이 꽉 차도록 */
.d-flex.gap-2 > a.btn:first-child:last-child {
  flex-grow: 1;
}
</style>
