import { ref } from 'vue'
import { aboutMeData } from '@/data/aboutMe_data.js'

export default {
  setup() {
    const info = ref(aboutMeData)

    const getImageUrl = path => {
      return path
    }

    return {
      info,
      getImageUrl,
    }
  },
}
