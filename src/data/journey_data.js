export const journeyData = {
  // "What I'm Learning" 섹션 데이터
  learning: {
    title: "What I'm Learning",
    items: [
      {
        subject: 'Vue.js 반응형 시스템 및 성능 최적화',
        description:
          'Composition API를 활용하여 복잡한 로직을 명확하게 분리하고, Vue의 반응형 시스템 원리를 깊이 학습하며 불필요한 렌더링을 방지하는 최적화에 집중하고 있습니다.',
      },
      {
        subject: 'React Hook 기반의 상태 관리 및 렌더링 최적화',
        description:
          'React Hook을 올바르게 사용하여 컴포넌트의 생명주기를 관리하고, 메모이제이션(Memoization)을 통해 대규모 데이터 처리 시에도 최적의 성능을 유지하는 UI 구축을 목표로 합니다.',
      },
      {
        subject: '크로스 브라우징 (Cross-browsing)',
        description:
          '다양한 브라우저와 기기에서 일관된 사용자 경험을 제공하기 위해 노력하고 있습니다. 최신 CSS 기능의 호환성 문제를 해결하고, 모든 사용자에게 안정적인 화면을 보여주는 방법을 학습하고 있습니다.',
      },
      {
        subject: 'Pinia를 활용한 전역 상태 관리',
        description:
          '프로젝트의 복잡한 상태를 효율적으로 관리하기 위해 Pinia의 고급 패턴을 학습하고 있습니다. 모듈화된 스토어 설계를 통해 유지보수성과 확장성이 높은 애플리케이션 구조를 만들어가고 있습니다.',
      },
      {
        subject: 'Vitest를 이용한 단위 테스트',
        description:
          '안정적인 코드 품질을 확보하기 위해 Vitest를 사용한 단위 테스트 작성을 학습하고 있습니다. 테스트 주도 개발(TDD)에 대한 이해를 바탕으로 버그를 사전에 방지하는 개발 역량을 키우고 있습니다.',
      },
    ],
  },

  // 사진 데이터
  photos: [
    { src: '/assets/image/koren1.jpg', alt: 'Journey Photo 1' },
    { src: '/assets/image/koren2.jpg', alt: 'Journey Photo 2' },
    { src: '/assets/image/taiwan1.jpg', alt: 'Journey Photo 3' },
    { src: '/assets/image/taiwan2.jpg', alt: 'Journey Photo 4' },
  ],

  // "Next Goals" 섹션 데이터
  goals: {
    title: 'Next Goals',
    items: [
      {
        subject: 'Next.js',
        description:
          '서버 사이드 렌더링(SSR)과 정적 사이트 생성(SSG)에 대한 깊은 이해를 바탕으로, SEO 친화적이고 초기 로딩 속도가 빠른 웹 서비스를 구축하는 것을 목표로 하고 있습니다.',
      },
      {
        subject: 'Tailwind CSS',
        description:
          'Bootstrap 경험을 바탕으로, 더 높은 디자인 자유도를 위해 유틸리티 우선 프레임워크인 Tailwind CSS 학습을 목표로 하고 있습니다. 정해진 컴포넌트에서 벗어나 맞춤형 디자인 시스템을 구축하는 역량을 키우고 싶습니다.',
      },
      {
        subject: 'GraphQL',
        description:
          '클라이언트가 필요한 데이터만 효율적으로 요청하여 API 통신을 최적화하는 방법을 학습하고, 개인 프로젝트에 적용하는 것을 목표로 하고 있습니다.',
      },
      {
        subject: '배포 자동화 (GitHub Actions)',
        description:
          'Vercel의 편리한 자동 배포 경험을 넘어, GitHub Actions를 활용한 CI/CD 파이프라인 구축을 목표로 하고 있습니다. 코드 변경 시 자동으로 테스트를 실행하고, 테스트를 통과한 코드만 Vercel에 배포하여 더욱 안정적인 서비스를 운영하는 경험을 쌓고 싶습니다.',
      },
      {
        subject: 'Docker 컨테이너',
        description:
          '개발 환경의 일관성을 유지하고 배포 효율성을 높이기 위해 Docker 학습을 목표로 하고 있습니다. 애플리케이션을 컨테이너화하여 안정적으로 실행하는 경험을 통해 DevOps에 대한 이해를 넓히고 싶습니다.',
      },
      {
        subject: 'FullStack 개발',
        description:
          '프론트엔드뿐만 아니라 백엔드 개발 역량도 함께 키워, 전체 애플리케이션 아키텍처를 이해하고 설계할 수 있는 FullStack 개발자로 성장하는 것을 목표로 하고 있습니다.',
      },
    ],
  },
};
