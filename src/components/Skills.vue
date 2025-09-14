<template>
  <section id="skills" class="section">
    <div class="container">
      <h2 class="section-title">&lt;Skills /&gt;</h2>
      <div class="skills-grid">
        <div class="skill-category">
          <h3>Frontend</h3>
          <p>HTML, CSS, JavaScript, Vue.js, React</p>
        </div>
        <div class="skill-category">
          <h3>Backend</h3>
          <p>Node.js, Express</p>
        </div>
        <div class="skill-category">
          <h3>DevOps & Version Control</h3>
          <p>Git, GitHub, Docker</p>
        </div>
        <div class="skill-category">
          <h3>Design & Collaboration</h3>
          <p>Figma, Slack, Notion</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.skills-grid {
  /* 기존 grid 대신 flex를 사용합니다. */
  display: flex;
  flex-wrap: wrap; /* 카드가 화면 너비를 넘어가면 다음 줄로 자동 줄바꿈합니다. */
  justify-content: center; /* 각 줄의 카드들을 항상 중앙에 정렬합니다. */
  gap: 2rem;
}

.skill-category {
  background-color: white;
  padding: 2.5rem; /* 내부 여백을 조금 더 줍니다. */
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);

  /* 카드의 크기를 조절합니다. */
  width: 28rem; /* 280px */
}

.skill-category h3 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--bg-skills-section);
}
</style>
