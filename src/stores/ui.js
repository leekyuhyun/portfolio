import { defineStore } from 'pinia'
import { ref } from 'vue'

// 'ui'라는 이름의 스토어를 정의합니다.
export const useUiStore = defineStore('ui', () => {
  // state: 모바일 메뉴가 열렸는지 여부
  const isMenuOpen = ref(false)

  // actions: state를 변경하는 함수들
  function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value
  }

  function closeMenu() {
    if (isMenuOpen.value) {
      isMenuOpen.value = false
    }
  }

  // 외부에서 사용할 수 있도록 state와 actions를 반환합니다.
  return {
    isMenuOpen,
    toggleMenu,
    closeMenu,
  }
})
