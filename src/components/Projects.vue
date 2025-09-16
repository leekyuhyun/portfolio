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

<script setup>
import { ref, onMounted, computed } from 'vue'
import { projectsData } from '@/data/projects.js'
import { skillsData } from '@/data/skills.js' // skills.js 데이터 가져오기
import { marked } from 'marked'
import { Modal } from 'bootstrap'

const teamProjects = computed(() => projectsData.filter(p => p.type === 'Team'))
const personalProjects = computed(() => projectsData.filter(p => p.type === 'Personal'))

const selectedProject = ref(null)
const readmeContent = ref('')
let projectReadmeModal = null

onMounted(() => {
  projectReadmeModal = new Modal(document.getElementById('projectReadmeModal'))
})

// --- 태그 색상 관련 로직 추가 ---
// skills.js 데이터를 기반으로 기술 이름과 색상 정보를 매핑하는 객체를 생성합니다.
const skillColorMap = computed(() => {
  const map = new Map()
  skillsData.forEach(category => {
    category.skills.forEach(skill => {
      map.set(skill.name, {
        backgroundColor: skill.color,
        color: skill.textColor || 'white',
      })
    })
  })
  return map
})

// 태그 이름에 맞는 스타일 객체를 반환하는 함수
const getTagStyle = tagName => {
  return skillColorMap.value.get(tagName) || { backgroundColor: '#6c757d', color: 'white' } // 기본값 (회색)
}
// ------------------------------

const fetchReadme = async url => {
  if (!url) {
    readmeContent.value = '<p>README 파일 링크가 없습니다.</p>'
    return
  }
  try {
    const response = await fetch(url)
    if (!response.ok) throw new Error('README를 불러오는 데 실패했습니다.')
    const markdown = await response.text()
    readmeContent.value = marked.parse(markdown)
  } catch (error) {
    console.error('Error fetching README:', error)
    readmeContent.value = '<p>README 파일을 불러올 수 없습니다. 링크를 확인해주세요.</p>'
  }
}

const openModal = project => {
  selectedProject.value = project
  fetchReadme(project.readmeUrl)
  projectReadmeModal.show()
}
</script>

<style scoped>
#projects {
  background: linear-gradient(to top, #f3e7e9 0%, #e3eeff 100%);
}

.project-type-title {
  font-size: 2.2rem;
  color: var(--bs-primary);
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

/* --- ▼ 태그(badge) 스타일 및 호버 효과 추가 ▼ --- */
.badge {
  font-size: 1.1rem;
  padding: 0.5em 0.75em;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out;
}

.badge:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}
/* ------------------------------------------- */

.modal-title {
  font-weight: bold;
}
.readme-content :deep(img) {
  max-width: 100%;
  height: auto;
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

@media (max-width: 768px) {
  .project-type-title {
    font-size: 2rem;
  }
  .card-title {
    font-size: 1.6rem;
  }
}
</style>
