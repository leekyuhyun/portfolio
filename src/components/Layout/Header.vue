<template>
  <header class="header" :class="{ scrolled: isScrolled, 'menu-open': uiStore.isMenuOpen }">
    <div class="container header-inner">
      <a href="#" class="logo">kyulee's Portfolio</a>
      <nav class="nav" :class="{ active: uiStore.isMenuOpen }">
        <ul @click="uiStore.closeMenu">
          <li><a href="#about">&lt;About Me /&gt;</a></li>
          <li><a href="#skills">&lt;Skills /&gt;</a></li>
          <li><a href="#projects">&lt;Projects /&gt;</a></li>
          <li><a href="#journey">&lt;Journey /&gt;</a></li>
        </ul>
      </nav>
      <button class="hamburger" @click="uiStore.toggleMenu" :class="{ active: uiStore.isMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
// Pinia 스토어를 가져옵니다.
import { useUiStore } from '@/stores/ui.js'

// 스토어를 컴포넌트 안에서 사용할 수 있도록 초기화합니다.
const uiStore = useUiStore()

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0
  // 스크롤 시 메뉴를 닫는 로직도 스토어의 함수를 호출합니다.
  uiStore.closeMenu()
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* --- 기존 스타일은 그대로 유지합니다. --- */
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

  .header .nav a {
    display: block;
    width: 100%;
    padding: 1.5rem 2rem;
    text-align: center;
    color: var(--text-color);
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
