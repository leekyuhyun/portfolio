import { ref } from 'vue'
import { marked } from 'marked'

// README를 불러오는 로직을 담은 컴포저블 함수
export function useReadme() {
  const readmeContent = ref('')
  const isLoading = ref(false)

  const fetchReadme = async url => {
    if (!url) {
      readmeContent.value = '<p>README 파일 링크가 없습니다.</p>'
      return
    }
    isLoading.value = true
    try {
      const response = await fetch(url)
      if (!response.ok) throw new Error('README를 불러오는 데 실패했습니다.')
      const markdown = await response.text()
      readmeContent.value = marked.parse(markdown)
    } catch (error) {
      console.error('Error fetching README:', error)
      readmeContent.value = '<p>README 파일을 불러올 수 없습니다. 링크를 확인해주세요.</p>'
    } finally {
      isLoading.value = false
    }
  }

  return {
    readmeContent,
    isLoading,
    fetchReadme,
  }
}
