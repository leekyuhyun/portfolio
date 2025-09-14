<template>
  <section id="contact" class="section">
    <div class="container">
      <h2 class="section-title">&lt;Contact /&gt;</h2>
      <div class="contact-content">
        <div class="contact-image">
          <img src="@/assets/image/Contact-Image.png" alt="Contact image" />
        </div>
        <form @submit.prevent="handleSubmit" class="contact-form">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" v-model="form.name" required />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="form.email" required />
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" rows="5" v-model="form.message" required></textarea>
          </div>
          <button type="submit" class="submit-button">Send</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({ name: '', email: '', message: '' })

const handleSubmit = () => {
  alert(`감사합니다, ${form.value.name}님. 메시지가 전송되었습니다.`)
  console.log(form.value)
  form.value = { name: '', email: '', message: '' }
}
</script>

<style scoped>
.contact-content {
  display: flex;
  gap: 3rem;
  align-items: flex-start;
}
.contact-image {
  flex: 1;
}
.contact-image img {
  max-width: 100%;
  border-radius: 8px;
}
.contact-form {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.form-group {
  margin-bottom: 1.5rem;
}
.form-group label {
  display: block;
  margin-bottom: 0.5rem;
}
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1.6rem;
}
.submit-button {
  padding: 1rem 1.5rem;
  background-color: var(--primary-color);
  color: white;
  border-radius: 4px;
  cursor: pointer;
  align-self: flex-end;
  font-size: 1.6rem;
}
</style>
