<template>
  <transition name="fade">
    <button v-if="isVisible" @click="scrollToTop" class="scroll-top-btn">↑</button>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)

const handleScroll = () => {
  isVisible.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.scroll-top-btn {
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  z-index: 1000;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: lighgtay;
  color: black;
  border: black;
  font-size: 2.4rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition:
    opacity 0.3s,
    transform 0.3s;
}

.scroll-top-btn:hover {
  transform: scale(1.1);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* --- 반응형 스타일 추가 --- */
@media (max-width: 768px) {
  .scroll-top-btn {
    width: 4.5rem;
    height: 4.5rem;
    font-size: 2rem;
    right: 2rem;
    bottom: 2rem;
  }
}
</style>
