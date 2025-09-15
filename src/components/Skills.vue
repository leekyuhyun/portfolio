<template>
  <section id="skills" class="section">
    <div class="container">
      <h2 class="section-title text-center">&lt;Skills /&gt;</h2>

      <div class="skills-card shadow-sm">
        <template v-for="category in skillCategories" :key="category.name">
          <div class="category-title">
            <div
              :class="[
                'category-icon',
                category.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-'),
              ]"
            ></div>
            <span class="fw-bold">{{ category.name }}</span>
          </div>
          <div class="skills-tags">
            <span
              v-for="skill in category.skills"
              :key="skill.name"
              class="skill-badge"
              :style="{ backgroundColor: skill.color, color: skill.textColor || 'white' }"
            >
              {{ skill.name }}
            </span>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { skillsData } from '@/data/skills.js'

const skillCategories = ref(skillsData)
</script>

<style scoped>
.skills-card {
  background-color: white;
  border-radius: 15px;
  padding: 4rem;
  max-width: 950px;
  margin: 0 auto;
  border: 1px solid #f0f0f0;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 3rem 2rem;
  align-items: center;
}

.category-title {
  display: flex;
  align-items: center;
  font-size: 1.8rem;
}

.category-icon {
  width: 3rem;
  height: 3rem;
  margin-right: 1.5rem;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

/* --- 각 아이콘에 대한 배경 이미지 경로 설정 --- */
.category-icon.language {
  background-image: url('@/assets/image/language-icon.png');
}
.category-icon.frontend {
  background-image: url('@/assets/image/frontend-icon.png');
}
.category-icon.backend {
  background-image: url('@/assets/image/backend-icon.png');
}
.category-icon.database {
  background-image: url('@/assets/image/database-icon.png');
}
.category-icon.devops-version-control {
  background-image: url('@/assets/image/devops-icon.png');
}
.category-icon.design-collaboration {
  background-image: url('@/assets/image/design-icon.png');
}
.category-icon.ai-productivity {
  background-image: url('@/assets/image/ai-icon.png');
}
/* ------------------------------------ */

.skills-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.skill-badge {
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  font-size: 1.4rem;
  font-weight: 500;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer; /* 마우스를 올릴 수 있다는 표시 */
  /* --- 효과를 부드럽게 만들기 위한 transition 추가 --- */
  transition:
    transform 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out;
}

/* --- 마우스를 올렸을 때의 스타일 --- */
.skill-badge:hover {
  /* Y축으로 -3px 만큼 이동 (살짝 위로 뜨는 효과) */
  transform: translateY(-3px);
  /* 그림자를 조금 더 진하게 만들어 입체감 부여 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

/* --- 반응형 스타일 추가 --- */
@media (max-width: 768px) {
  .skills-card {
    grid-template-columns: 1fr; /* 한 줄에 하나씩 표시 */
    gap: 2rem;
    padding: 3rem;
  }
  .category-title {
    font-size: 2rem;
    border-bottom: 1px solid #eee;
    padding-bottom: 1rem;
    justify-content: center; /* 아이콘과 텍스트 중앙 정렬 */
  }
  .skills-tags {
    justify-content: center; /* 태그 중앙 정렬 */
  }
}
</style>
