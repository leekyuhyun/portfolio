import { onCampusData, offCampusData, ipAchievementsData } from '@/data/activity_data.js'

export default {
  setup() {
    const activityData = {
      onCampus: onCampusData,
      offCampus: offCampusData,
      ipAchievements: ipAchievementsData,
    }

    return {
      activityData,
    }
  },
}
