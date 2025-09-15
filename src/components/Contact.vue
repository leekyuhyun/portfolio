<template>
  <section id="contact" class="section">
    <div class="container">
      <div class="row g-5 align-items-center justify-content-center">
        <div class="col-lg-5">
          <div class="card p-4 text-center border-0 shadow-sm">
            <div class="card-body">
              <h2 class="card-title display-6 fw-bold mb-3">&lt;Contact /&gt;</h2>
              <p class="card-text text-muted fs-4 mb-4">Thank you : )</p>
              <img
                src="/assets/image/Contact-Image.png"
                class="img-fluid rounded"
                alt="Contact image"
              />
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <form @submit.prevent="handleSubmit">
            <div class="mb-4">
              <input
                type="text"
                class="form-control form-control-lg"
                placeholder="Name"
                v-model="form.name"
                required
              />
            </div>
            <div class="mb-4">
              <input
                type="text"
                class="form-control form-control-lg"
                placeholder="Title"
                v-model="form.title"
                required
              />
            </div>
            <div class="mb-4">
              <textarea
                class="form-control form-control-lg"
                rows="6"
                placeholder="Message"
                v-model="form.message"
                required
              ></textarea>
            </div>
            <div class="d-grid">
              <button type="submit" class="btn btn-dark btn-lg">SEND</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// form 상태를 이미지에 맞게 'title'로 변경
const form = ref({
  name: '',
  title: '',
  message: '',
})

const handleSubmit = () => {
  alert(`감사합니다, ${form.value.name}님. 메시지가 전송되었습니다.`)
  // 폼 초기화
  form.value = { name: '', title: '', message: '' }
}
</script>

<style scoped>
.form-control:focus {
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

/* 버튼 스타일 커스텀 */
.btn-dark {
  background-color: #343a40;
  border-color: #343a40;
  padding: 1.2rem;
  transition: background-color 0.2s;
}

.btn-dark:hover {
  background-color: #23272b;
}
</style>
