export const projectsData = [
  // --- 팀 프로젝트 ---
  {
    type: 'Team',
    // ▼▼▼ [수정] 첫 번째 프로젝트의 name(주제)을 원래 내용으로 복원 ▼▼▼
    name: '국내 10개 이상의 주요 뉴스를 읽어와서 NoSQL DB로 저장하고 키워드, 날짜 별 기사 내용을 보여주는 앱',
    context: '안양대학교 서버프로그래밍',
    team: '5인',
    // ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲
    period: '2023.09 - 2023.12',
    description:
      '팀원들과 함께 개발한 첫 번째 프로젝트입니다. 주요 기능은 뉴스 기사 수집, 키워드 분석 및 날짜별 필터링 기능입니다.', // Description을 조금 더 명확하게 수정
    tags: ['HTML', 'CSS', 'JavaScript', 'Python'],
    githubUrl: 'https://github.com/your-team/repo1',
    readmePath: 'static/Project_1_README.md',
  },
  {
    type: 'Team',
    name: 'AI 기반 가상피팅 및 커뮤니티 서비스',
    context: '안양대학교 캡스톤 디자인',
    team: '3인',
    period: '2025.03 - (진행 중)',
    description: 'AI 기반 가상 피팅 서비스와 사용자 피드 기능이 포함된 풀스택 웹 프로젝트입니다.',
    tags: ['React', 'React Router', 'Axios', 'CSS Modules', 'Crawling'],
    githubUrl: 'https://github.com/toran1678/VirtualFitting',
    readmeUrl: 'https://raw.githubusercontent.com/toran1678/VirtualFitting/main/README.md',
  },
  {
    type: 'Team',
    name: '범죄 취약 계층을 위한 AI 기반 실시간 대응 서비스',
    context: 'Net 챌린지 캠프 시즌 12',
    team: '6인',
    period: '2025.07.08 - (진행 중)',
    description:
      'K-디지털 챌린지 공모전 출품작으로, 스마트 장치 데이터를 AI로 분석하여 위험 상황을 감지하고 신속한 초동 대응을 지원하는 통합 관제 시스템입니다.',
    tags: ['Vue.js', 'Vue Router', 'Axios', 'Bootstrap', 'Kakao Maps API'],
    githubUrl: 'https://github.com/leekyuhyun/contest_frontend',
    readmeUrl: 'https://raw.githubusercontent.com/leekyuhyun/contest_frontend/main/README.md',
  },

  // --- 개인 프로젝트 ---
  {
    type: 'Personal',
    name: 'Java Swing 기반 오목 및 채팅 프로그램',
    context: '안양대학교 JAVA 프로그래밍 Ⅱ',
    period: '2024.09 - 2024.12',
    description:
      'Java Swing으로 구현한 데스크톱 멀티플레이어 오목 게임 및 채팅 애플리케이션입니다. 클라이언트-서버 아키텍처를 기반으로 합니다.',
    tags: ['Java', 'Java Swing', 'AWT', 'Socket', 'JDBC', 'MySQL', 'Multithreading'],
    githubUrl: 'https://github.com/leekyuhyun/JavaOmokProject',
    readmeUrl: 'https://raw.githubusercontent.com/leekyuhyun/JavaOmokProject/main/README.md',
  },
  {
    type: 'Personal',
    name: 'KBO 팬 커뮤니티',
    context: '안양대학교 웹&앱 응용 프로그래밍',
    period: '2025.04 - 2025.06',
    description:
      'JSP와 Servlet을 기반으로 제작된 KBO 리그 팬 커뮤니티입니다. 팀별 게시판을 통해 사용자들이 자유롭게 소통하고 정보를 공유할 수 있습니다.',
    tags: ['Java', 'Servlet', 'JSP', 'JDBC', 'MySQL', 'JavaScript', 'jQuery', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/leekyuhyun/JSP-Servlet-KBO-Fan-Community',
    readmeUrl:
      'https://raw.githubusercontent.com/leekyuhyun/JSP-Servlet-KBO-Fan-Community/main/README.md',
  },
  {
    type: 'Personal',
    name: 'Vue.js 기반 포트폴리오 웹사이트',
    context: '개인 프로젝트',
    period: '2025.09.13 - 2025.09.15',
    description:
      'Vue.js와 Vite를 기반으로 제작한 반응형 개인 포트폴리오 웹사이트입니다. 컴포넌트 기반 아키텍처와 데이터 분리를 통해 유지보수성을 높였습니다.',
    tags: ['Vue.js', 'Vite', 'Bootstrap', 'JavaScript'],
    githubUrl: 'https://github.com/leekyuhyun/portfolio',
    readmeUrl: 'https://raw.githubusercontent.com/leekyuhyun/portfolio/main/README.md',
  },
]
