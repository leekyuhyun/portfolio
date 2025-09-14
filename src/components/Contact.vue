<template>
  <section id="contact" class="section">
    <div class="container">
      <h2 class="section-title text-center">&lt;Contact /&gt;</h2>
      <div class="row align-items-center">
        <div class="col-lg-6">
          <img
            src="@/assets/image/Contact-Image.png"
            class="img-fluid rounded shadow"
            alt="Contact image"
          />
        </div>
        <div class="col-lg-6 mt-5 mt-lg-0">
          <form @submit.prevent="handleSubmit">
            <div class="mb-3">
              <label for="name" class="form-label">Name</label>
              <input type="text" class="form-control" id="name" v-model="form.name" required />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input type="email" class="form-control" id="email" v-model="form.email" required />
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Message</label>
              <textarea
                class="form-control"
                id="message"
                rows="5"
                v-model="form.message"
                required
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary float-end">Send</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({ name: '', email: '', message: '' })

const handleSubmit = () => {
  alert(`감사합니다, ${form.value.name}님. 메시지가 전송되었습니다.`)
  form.value = { name: '', email: '', message: '' }
}
</script>

<style scoped>
/* 이 컴포넌트는 특별한 스타일이 필요 없습니다. */
</style>
