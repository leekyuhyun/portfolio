<template>
  <header class="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
    <div class="container">
      <a class="navbar-brand fw-bold fs-4" href="#">kyulee's Portfolio</a>
      <div class="collapse navbar-collapse justify-content-end">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#about">&lt;About Me /&gt;</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#skills">&lt;Skills /&gt;</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#projects">&lt;Projects /&gt;</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">&lt;Contact /&gt;</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup></script>

<style scoped>
.navbar {
  height: var(--header-height);
  transition: background-color 0.3s;
  background-color: rgba(255, 255, 255, 0.85) !important;
  backdrop-filter: blur(10px);
}
.nav-link {
  font-weight: 500;
}
</style>
