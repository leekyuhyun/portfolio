<template>
  <div>
    <Header />
    <main>
      <Introduction />
      <AboutMe />
      <Activity />
      <Skills />
      <Projects />
      <Journey />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import Header from '@/components/Layout/Header.vue'
import Introduction from '@/components/Introduction/Introduction.vue'
import AboutMe from '@/components/AboutMe/AboutMe.vue'
import Activity from '@/components/Activity/Activity.vue'
import Skills from '@/components/Skills/Skills.vue'
import Projects from '@/components/Projects/Projects.vue'
//import Journey from '@/components/Journey/Journey.vue'
import Footer from '@/components/Layout/Footer.vue'

onMounted(() => {
  AOS.init({
    duration: 1000,
    once: true,
  })
})
</script>
