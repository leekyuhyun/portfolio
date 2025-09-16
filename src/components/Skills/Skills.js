import { ref } from 'vue'
import { skillsData } from '@/data/skills_data.js'

export default {
  setup() {
    const skillCategories = ref(skillsData)

    return {
      skillCategories,
    }
  },
}
