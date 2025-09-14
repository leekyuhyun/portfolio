<template>
  <section id="introduction" class="intro-section">
    <div class="intro-content">
      <h1>이규현</h1>
      <h2>프론트엔드 개발자 포트폴리오</h2>
      <p>안녕하세요.</p>
      <a href="#about" class="resume-button">더 알아보기 ↓</a>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.intro-section {
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  background:
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('@/assets/image/Introduct.png') no-repeat center center/cover;
}

.intro-content h1 {
  font-size: 5rem;
  margin-bottom: 1.5rem;
}

.intro-content h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.intro-content p {
  font-size: 1.8rem;
  margin-bottom: 3rem;
}

.resume-button {
  padding: 1.2rem 2.4rem;
  background-color: transparent;
  border: 2px solid white;
  color: white;
  font-size: 1.6rem;
  cursor: pointer;
  transition: all 0.3s;
  text-decoration: none;
}

.resume-button:hover {
  background-color: white;
  color: black;
}
</style>
