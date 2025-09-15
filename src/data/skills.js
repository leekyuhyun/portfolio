// 스킬 데이터를 배열 형태로 관리합니다.
export const skillsData = [
  {
    name: 'Language',
    skills: [
      { name: 'HTML', color: '#E34F26' },
      { name: 'CSS', color: '#1572B6' },
      { name: 'JavaScript', color: '#F7DF1E', textColor: '#000' },
      { name: 'Java', color: '#F05032' },
      { name: 'Python', color: '#2496ED' },
    ],
  },

  {
    name: 'Frontend',
    skills: [
      { name: 'Vue.js', color: '#4FC08D' },
      { name: 'React', color: '#61DAFB' },
      { name: 'JSX', color: '#61DAFB' },
      { name: 'Axios', color: '#181717' },
      { name: 'Bootstrap', color: '#AE21C4' },
      { name: 'ESLint', color: '#4B32C3' },
      { name: 'Prettier', color: '#F7B93E', textColor: '#000' },
    ],
  },

  {
    name: 'Backend',
    skills: [
      { name: 'FastAPI', color: '#4FC08D' },
      { name: 'Flask', color: '#2496ED' },
      { name: 'Servlet', color: '#B60000' },
    ],
  },

  {
    name: 'Database',
    icon: '@/assets/image/database-icon.png',
    skills: [{ name: 'MySQL', color: '#2496ED' }],
  },

  {
    name: 'AI & Productivity',
    skills: [
      { name: 'ChatGPT', color: '#74AA9C' },
      { name: 'Gemini', color: '#8E75B7' },
      { name: 'v0.dev', color: '#000000' },
    ],
  },

  {
    name: 'DevOps & Version Control',
    skills: [
      { name: 'Git', color: '#F05032' },
      { name: 'GitHub', color: '#181717' },
      { name: 'Vercel', color: '#181717' },
      { name: 'Docker', color: '#2496ED' },
    ],
  },

  {
    name: 'Design & Collaboration',
    skills: [
      { name: 'Figma', color: '#F24E1E' },
      { name: 'Notion', color: '#000000' },
    ],
  },
]
