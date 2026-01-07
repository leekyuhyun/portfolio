import { onCampusData, offCampusData, ipAchievementsData } from '@/data/activity_data.js'

export default {
  name: 'Activity',
  setup() {
    return {
      onCampus: onCampusData,
      offCampus: offCampusData,
      ipAchievements: ipAchievementsData,
    }
  },
}