<template>
  <div>
    <Header />
    <main>
      <Introduction />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Introduction from '@/components/Introduction.vue'
import AboutMe from '@/components/AboutMe.vue'
import Skills from '@/components/Skills.vue'
import Projects from '@/components/Projects.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'
</script>

<style scoped>
main {
  padding-top: var(--header-height);
}
</style>
