<template>
  <header class="header" :class="{ scrolled: isScrolled }">
    <div class="container header-inner">
      <a href="#" class="logo">kyulee's Portfolio</a>
      <nav class="nav">
        <ul>
          <li><a href="#about">&lt;About Me /&gt;</a></li>
          <li><a href="#skills">&lt;Skills /&gt;</a></li>
          <li><a href="#projects">&lt;Projects /&gt;</a></li>
          <li><a href="#contact">&lt;Contact /&gt;</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// 스크롤 상태를 저장하는 반응형 변수 (기본값: false)
const isScrolled = ref(false)

// 스크롤 위치를 감지하여 isScrolled 값을 업데이트하는 함수
const handleScroll = () => {
  // 스크롤 위치가 0보다 크면 true, 아니면 false
  isScrolled.value = window.scrollY > 0
}

// 컴포넌트가 화면에 로드되면 스크롤 이벤트를 감지하기 시작합니다.
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

// 컴포넌트가 화면에서 사라지면 이벤트 감지를 중단합니다. (메모리 누수 방지)
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  height: var(--header-height);
  transition:
    background-color 0.4s ease,
    box-shadow 0.4s ease;
  background-color: transparent;
  box-shadow: none;
}

/* 기본 상태일 때 로고와 네비게이션 링크 색상 */
.header .logo,
.header .nav a {
  color: LightGray;
  text-decoration: none;
}

.header.scrolled {
  background-color: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* 스크롤 내렸을 때 로고와 네비게이션 링크 색상 */
.header.scrolled .logo,
.header.scrolled .nav a {
  color: var(--text-color);
}

/* --- 호버 효과 수정 --- */

/* 1. 처음 상태 (최상단)일 때 로고와 버튼 호버 효과 */
.header:not(.scrolled) .logo:hover,
.header:not(.scrolled) .nav a:hover {
  color: white;
}

/* 2. 스크롤 내렸을 때 로고와 버튼 호버 효과 */
.header.scrolled .logo:hover,
.header.scrolled .nav a:hover {
  color: #0dcaf0; /* 하늘색 계열 */
}
/* ------------------- */

.header-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.logo {
  font-weight: bold;
  font-size: 2rem;
  transition: color 0.4s ease;
}

.nav ul {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.nav a {
  font-size: 1.4rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  transition: color 0.3s;
}
</style>
