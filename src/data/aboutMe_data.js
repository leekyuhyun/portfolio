// About Me 섹션의 데이터를 객체 형태로 관리합니다.
export const aboutMeData = {
  profile: {
    imageUrl: '/assets/image/Profile.jpg',
    name: '이규현',
    birth: '2001.05.02',
    address: '경기도 시흥시',
    email: 'leekh010502@naver.com',
    education: '안양대학교 (주: 소프트웨어학과 / 소단위: 지식재산융합)',
  },
  links: [
    /* {
      name: 'Instagram',
      url: 'https://www.instagram.com/leeeeeee_kyu_h',
      icon: '/assets/image/instagram-icon.png',
    }, */
    {
      name: 'GitHub',
      url: 'https://github.com/leekyuhyun',
      icon: '/assets/image/git-icon.png',
    },
    /*  {
      name: 'Velog',
      url: 'https://velog.io/@leekh010502',
      icon: '/assets/image/vlog-icon.png',
    }, */
  ],
  activity: {
    title: '주요 활동', // 활동들의 통합 제목
    icon: '/assets/image/activity-icon.png', // 대표 아이콘
    description: `
      <b>2023.09 ~ 2023.12</b><br/>
      서버 프로그래밍 프로젝트 진행 (안양대학교)<br/>
      주제 : 국내 10개 이상의 주요 뉴스를 읽어와서 NoSQL DB로 저장하고 키워드, 날짜 별 기사 내용을 보여주는 앱<br/>
      (역할: UI/UX 설계 및 프론트엔드 개발, 시각화, 크롤링 보조)<br/><br/>

      <b>2024.01.02 ~ 2025.01.04</b><br/>
      2023 AI 기반 신산업 융합인재 양성 지식재산(IP) 창업 캠프<br/><br/>

      <b>2025.01.08 ~ 2025.01.13</b><br/>
      2024 신산업 융합인재양성사업 명전대-안양대 연합 해외 IP-PBL 워크샵 및 기업탐방<br/>
      (학과 인원 중에 인원 통솔 및 교수님과 소통 역활을 하였으며 대만 명전대학교 학생들과 아이디어 토론을 통해 나온 결과를 교수님들 앞에서 발표)<br/><br/>

      <b>2025.03 ~</b><br />
      캡스톤 디자인 졸업작품 진행 중 (안양대학교) <br />
      주제 : AI 기반 가상피팅 및 커뮤니티 서비스 <br/>
      (역할 : 팀장 / UI/UX 설계 및 프론트엔드 개발 / 크롤링)<br/><br/>

      <b>2025.07.08 ~</b><br />
      K-디지털 챌린지 : Net 챌린지 캠프 시즌 12 참가 중 (주최 : 과학기술정보통신부)<br/>
      주제 : 범죄 취약 계층의 초동 대응을 위한 스마트 장치 및 AI 기반 실시간 대응 서비스 <br/>
      (역할 : UI/UX 설계 및 프론트엔드 개발)

    `,
  },
}
