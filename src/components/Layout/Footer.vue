<template>
  <footer class="footer bg-light pt-5 pb-4">
    <div class="container text-center">
      <div class="social-links mb-4">
        <a href="https://github.com/leekyuhyun" target="_blank" class="social-icon mx-3">
          <img src="/assets/image/git-icon.png" alt="GitHub" />
        </a>
        <a href="mailto:leekh010502@naver.com" class="social-icon mx-3">
          <img src="/assets/image/mail-icon.png" alt="Email" />
        </a>
      </div>
      <p class="mb-0 copyright-text">&copy; 2025 kyulee's Portfolio. All rights reserved.</p>

      <div class="attributions mt-4">
        <details>
          <summary>Icon Attributions</summary>
          <ul class="list-unstyled mt-2">
            <li>
              <a
                href="https://www.flaticon.com/kr/free-icons/"
                title="정체 아이콘"
                target="_blank"
                >정체 아이콘 제작자: Freepik - Flaticon</a
              >
            </li>
            <li>
              <a
                href="https://www.flaticon.com/kr/free-icons/-"
                title="생일 케이크 아이콘"
                target="_blank"
                >생일 케이크 아이콘 제작자: Stasy - Flaticon</a
              >
            </li>
            <li>
              <a href="https://www.flaticon.com/kr/free-icons/ui" title="ui 아이콘" target="_blank"
                >Ui 아이콘 제작자: Element Warehouse - Flaticon</a
              >
            </li>
            <li>
              <a
                href="https://www.flaticon.com/kr/free-icons/"
                title="이메일 아이콘"
                target="_blank"
                >이메일 아이콘 제작자: Those Icons - Flaticon</a
              >
            </li>
            <li>
              <a
                href="https://www.flaticon.com/kr/free-icons/"
                title="학교 아이콘"
                target="_blank"
                >학교 아이콘 제작자: Freepik - Flaticon</a
              >
            </li>
            <li>
              <a
                href="https://www.flaticon.com/kr/free-icons/github"
                title="github 아이콘"
                target="_blank"
                >Github 아이콘 제작자: Freepik - Flaticon</a
              >
            </li>
            <li>
              <a
                href="https://www.flaticon.com/kr/free-icons/"
                title="블로그 아이콘"
                target="_blank"
                >블로그 아이콘 제작자: Freepik - Flaticon</a
              >
            </li>
            <li>
              <a
                href="https://www.flaticon.com/kr/free-icons/-"
                title="인스 타 그램 아이콘"
                target="_blank"
                >인스 타 그램 아이콘 제작자: Freepik - Flaticon</a
              >
            </li>
          </ul>
        </details>
      </div>
      </div>
  </footer>
</template>

<script setup>
// 이 컴포넌트는 UI만 담당합니다.
</script>

<style scoped>
.footer {
  /* ▼▼▼ 배경색에 맞춰 텍스트와 선 색상을 조정하세요 ▼▼▼ */
  border-top: 1px solid #dee2e6; /* 연한 회색 선 */
  color: #212529; /* 기본 텍스트 색상을 어둡게 */
}

.social-links a {
  display: inline-block;
  transition: transform 0.3s ease-in-out;
}

.social-links a:hover {
  transform: translateY(-5px); /* 아이콘이 살짝 위로 올라가는 효과 */
}

/* ▼▼▼ 아이콘 스타일 수정 ▼▼▼ */
.social-icon img {
  width: 32px;
  height: 32px;
  /* 어떤 배경에서도 잘 보이도록 그림자 효과 추가 */
  filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.2));
  transition: filter 0.3s ease;
}

/* 호버 시 그림자를 더 진하게 만들어 입체감 강조 */
.social-icon:hover img {
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3));
}
/* ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲ */

.copyright-text {
  font-size: 1.4rem;
  color: #6c757d; /* 저작권 텍스트를 회색으로 */
}

/* ▼▼▼ [추가] 출처 섹션 스타일 ▼▼▼ */
.attributions {
  font-size: 1.2rem;
  color: #888;
}

.attributions summary {
  cursor: pointer;
  display: inline-block;
  font-weight: 500;
}

.attributions a {
  color: #888;
  text-decoration: none;
}

.attributions a:hover {
  text-decoration: underline;
}
/* ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲ */
</style>