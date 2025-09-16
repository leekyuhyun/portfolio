<template>
  <div>
    <Header />
    <main>
      <Introduction />
      <AboutMe />
      <Skills />
      <Projects />
      <Journey />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue' // onMounted 가져오기
import AOS from 'aos' // AOS 가져오기
import Header from '@/components/Header.vue'
import Introduction from '@/components/Introduction.vue'
import AboutMe from '@/components/AboutMe.vue'
import Skills from '@/components/Skills.vue'
import Projects from '@/components/Projects.vue'
import Journey from '@/components/Journey.vue'
import Footer from '@/components/Footer.vue'

// 컴포넌트가 마운트되면 AOS를 초기화합니다.
onMounted(() => {
  AOS.init({
    duration: 1000, // 애니메이션 지속 시간 (1초)
    once: true, // 애니메이션이 한 번만 실행되도록 설정
  })
})
</script>
