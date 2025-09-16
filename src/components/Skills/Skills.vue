<template>
  <section id="skills" class="section">
    <div class="container" data-aos="fade-up">
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

<script src="./Skills.js"></script>
<style scoped src="./Skills.css"></style>
