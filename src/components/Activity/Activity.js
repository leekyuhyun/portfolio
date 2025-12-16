import { onCampusData, offCampusData, ipAchievementsData } from '@/data/activity_data.js'

export default {
  setup() {
    // 데이터를 카테고리별로 명확히 구분하여 반환
    const activitySections = {
      onCampus: onCampusData,
      offCampus: offCampusData,
      ipAchievements: ipAchievementsData,
    }

    return {
      activitySections,
    }
  },
}
