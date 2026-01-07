import { ref, onMounted, computed } from 'vue'
import { projectsData } from '@/data/projects_data.js'
import { skillsData } from '@/data/skills_data.js'
import { Modal } from 'bootstrap'
import { useReadme } from '@/composables/useReadme.js'

export default {
  setup() {
    const { readmeContent, fetchReadme } = useReadme()

    // 제목 데이터 정의
    const teamProjectsTitle = ref('Team Projects')
    const personalProjectsTitle = ref('Personal Projects')

    const teamProjects = computed(() => projectsData.filter(p => p.type === 'Team'))
    const personalProjects = computed(() => projectsData.filter(p => p.type === 'Personal'))

    const selectedProject = ref(null)
    let projectReadmeModal = null

    onMounted(() => {
      const modalElement = document.getElementById('projectReadmeModal')
      if (modalElement) {
        projectReadmeModal = new Modal(modalElement)
      }
    })

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

    const getTagStyle = tagName => {
      return skillColorMap.value.get(tagName) || { backgroundColor: '#6c757d', color: 'white' }
    }

    const openModal = project => {
      selectedProject.value = project
      fetchReadme(project.readmeUrl)
      if (projectReadmeModal) {
        projectReadmeModal.show()
      }
    }

    return {
      teamProjectsTitle,
      personalProjectsTitle,
      teamProjects,
      personalProjects,
      selectedProject,
      readmeContent,
      openModal,
      getTagStyle,
    }
  },
}