import { onCampusData, offCampusData } from '@/data/activity_data.js'

export default {
  setup() {
    const activityData = {
      onCampus: onCampusData,
      offCampus: offCampusData,
    }

    return {
      activityData,
    }
  },
}
