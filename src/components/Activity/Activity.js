import { ref } from 'vue'
import { activityData } from '@/data/activity_data.js'

export default {
  setup() {
    const activity = ref(activityData)
    return {
      activity,
    }
  },
}
