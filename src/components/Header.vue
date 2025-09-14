<template>
  <header class="header">
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

<script setup></script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  z-index: 1000;
  height: var(--header-height);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
}

.nav ul {
  display: flex;
  gap: 2rem;
}

.nav a {
  font-size: 1.4rem;
  font-weight: 500;
  transition: color 0.3s;
  padding: 0.5rem 1rem;
}

.nav a:hover {
  color: var(--primary-color);
}
</style>
