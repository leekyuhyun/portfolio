<template>
  <header class="header" :class="{ scrolled: isScrolled, 'menu-open': isMenuOpen }">
    <div class="container header-inner">
      <a href="#" class="logo">kyulee's Portfolio</a>
      <nav class="nav" :class="{ active: isMenuOpen }">
        <ul @click="closeMenu">
          <li><a href="#about">&lt;About Me /&gt;</a></li>
          <li><a href="#skills">&lt;Skills /&gt;</a></li>
          <li><a href="#projects">&lt;Projects /&gt;</a></li>
          <li><a href="#contact">&lt;Contact /&gt;</a></li>
        </ul>
      </nav>
      <button class="hamburger" @click="toggleMenu" :class="{ active: isMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0
  if (isMenuOpen.value) {
    isMenuOpen.value = false
  }
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = event => {
  if (event.target.tagName === 'A') {
    isMenuOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* --- 기본 스타일 --- */
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

.header.scrolled .logo,
.header.scrolled .nav a {
  color: var(--text-color);
}

.header.scrolled .hamburger span {
  background-color: var(--text-color);
}

.header:not(.scrolled) .logo:hover,
.header:not(.scrolled) .nav a:hover {
  color: white;
}

.header.scrolled .logo:hover,
.header.scrolled .nav a:hover {
  color: #0dcaf0;
}

.header.menu-open {
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(5px);
}

.header.menu-open .logo {
  color: var(--text-color);
}

.header.menu-open .hamburger span {
  background-color: var(--text-color);
}

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
  z-index: 1002;
}

.nav ul {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
}

.nav a {
  font-size: 1.4rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  transition: color 0.3s;
}

.hamburger {
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1002;
}

.hamburger span {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px 0;
  background-color: LightGray;
  transition: all 0.3s ease;
}

.hamburger.active span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}
.hamburger.active span:nth-child(2) {
  opacity: 0;
}
.hamburger.active span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* --- 모바일 드롭다운 메뉴 스타일 --- */
@media (max-width: 768px) {
  .nav {
    position: absolute;
    top: var(--header-height);
    left: 0;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(5px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease-out;
  }

  .nav.active {
    max-height: 300px;
  }

  .nav ul {
    flex-direction: column;
    width: 100%;
    padding: 1rem 0;
    gap: 0;
  }

  .nav li {
    width: 100%;
  }

  /* ▼ 드롭다운 메뉴 링크 글씨를 검은색으로 수정 (스타일 우선순위 문제 해결) ▼ */
  .header .nav a {
    display: block;
    width: 100%;
    padding: 1.5rem 2rem;
    text-align: center;
    color: var(--text-color); /* 검은색 변수 적용 */
    font-size: 1.6rem;
    font-weight: 500;
  }

  .header .nav a:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  .hamburger {
    display: block;
  }
}
</style>
