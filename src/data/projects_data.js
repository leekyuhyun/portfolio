export const projectsData = [
  // --- 팀 프로젝트 ---
  {
    type: 'Team', // 팀 프로젝트
    title:
      '국내 10개 이상의 주요 뉴스를 읽어와서 NoSQL DB로 저장하고 키워드, 날짜 별 기사 내용을 보여주는 앱 (안양대학교 서버프로그래밍) -5인',
    period: '2023.09 - 2023.12',
    description: '팀원들과 함께 개발한 첫 번째 프로젝트입니다. 주요 기능은 ...',
    tags: ['HTML', 'CSS', 'JavaScript', 'Python'],
    githubUrl: 'https://github.com/your-team/repo1',
    readmePath: 'static/Project_1_README.md',
  },
  {
    type: 'Team', // 팀 프로젝트
    title: 'AI 기반 가상피팅 및 커뮤니티 서비스 (안양대학교 캡스톤 디자인) -3인',
    period: '2025.03 - (진행 중)',
    description: 'AI 기반 가상 피팅 서비스 + 사용자 피드 기능이 포함된 풀스택 웹 프로젝트입니다.',
    tags: ['React', 'React Router', 'Axios', 'CSS Modules', 'Crawling'],
    githubUrl: 'https://github.com/toran1678/VirtualFitting',
    readmeUrl: 'https://raw.githubusercontent.com/toran1678/VirtualFitting/main/README.md',
  },

  {
    type: 'Team', // 팀 프로젝트
    title:
      '범죄 취약 계층의 초동 대응을 위한 스마트 장치 및 AI 기반 실시간 대응 서비스 (Net 챌린지 캠프 시즌 12) -6인',
    period: '2025.07.08 - (진행 중)',
    description:
      'K-디지털 챌린지 공모전 출품작으로, 범죄 취약 계층의 안전을 확보하고 골든타임을 사수하기 위해 개발된 AI 기반 통합 관제 시스템입니다. 스마트 장치로부터 수집된 데이터를 AI가 실시간으로 분석하여 위험 상황을 감지하고, 관계 기관에 신속하게 전파하여 초동 대응을 지원합니다.',
    tags: ['Vue.js', 'Vue Router', 'Axios', 'Bootstrap', 'Kakao Maps API'],
    githubUrl: 'https://github.com/leekyuhyun/contest_frontend',
    readmeUrl: 'https://raw.githubusercontent.com/leekyuhyun/contest_frontend/main/README.md',
  },

  // --- 개인 프로젝트 ---
  {
    type: 'Personal',
    title: 'Java Swing UI를 활용한 오목 및 채팅 프로그램 제작 (안양대학교 JAVA 프로그래밍 Ⅱ)',
    period: '2024.09 - 2024.12',
    description:
      'Java Swing으로 구현한 데스크톱 멀티플레이어 오목 게임 및 채팅 애플리케이션입니다. 클라이언트-서버 아키텍처를 기반으로 하여 여러 사용자가 동시에 접속하여 게임을 즐기고, 실시간으로 채팅을 나눌 수 있습니다.',
    tags: ['Java', 'Java Swing', 'AWT', 'Socket', 'JDBC', 'MySQL', 'Multithreading'],
    githubUrl: 'https://github.com/leekyuhyun/JavaOmokProject',
    readmeUrl: 'https://raw.githubusercontent.com/leekyuhyun/JavaOmokProject/main/README.md',
  },

  {
    type: 'Personal', // 개인 프로젝트
    title: 'KBO 팬 커뮤니티 제작 (안양대학교 웹&앱 응용 프로그래밍)',
    period: '2025.04 - 2025.06',
    description:
      'KBO 리그 팬들을 위한 커뮤니티 웹 애플리케이션입니다. 사용자들은 팀별 게시판에서 자유롭게 소통하고, 경기 소식 및 정보를 공유할 수 있습니다. 프론트엔드는 JSP(JavaServer Pages)를 통해 동적인 웹 페이지를 렌더링하고, 백엔드는 Java Servlet으로 비즈니스 로직과 데이터 처리를 담당했습니다.',
    tags: ['Java', 'Servlet', 'JSP', 'JDBC', 'MySQL', 'JavaScript', 'jQuery', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/leekyuhyun/JSP-Servlet-KBO-Fan-Community',
    readmeUrl:
      'https://raw.githubusercontent.com/leekyuhyun/JSP-Servlet-KBO-Fan-Community/main/README.md',
  },

  {
    type: 'Personal', // 개인 프로젝트
    title: '포트폴리오 웹 사이트 제작 (개인 프로젝트)',
    period: '2025.09.13 - 2025.09.15',
    description:
      'Vue.js와 Vite를 기반으로 제작한 반응형 개인 포트폴리오 웹사이트입니다. 컴포넌트 기반 아키텍처와 데이터 분리를 통해 유지보수성을 높였습니다.',
    tags: ['Vue.js', 'Vite', 'Bootstrap', 'JavaScript'],
    githubUrl: 'https://github.com/leekyuhyun/portfolio',
    readmeUrl: 'https://raw.githubusercontent.com/leekyuhyun/portfolio/main/README.md',
  },
]
