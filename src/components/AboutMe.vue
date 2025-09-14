<template>
  <section id="about" class="section">
    <div class="container">
      <h2 class="section-title">&lt;ABOUT ME /&gt;</h2>
      <div class="about-content">
        <div class="profile-image">
          <img src="@/assets/image/Profile.jpg" alt="이규현 프로필 사진" />
        </div>
        <div class="profile-details">
          <ul>
            <li>
              <img src="@/assets/image/user-icon.png" alt="이름 아이콘" class="icon" />
              <span>이규현</span>
            </li>
            <li>
              <img src="@/assets/image/birth-icon.png" alt="생년월일 아이콘" class="icon" />
              <span>2001.05.02</span>
            </li>
            <li>
              <img src="@/assets/image/home-icon.png" alt="주소 아이콘" class="icon" />
              <span>경기도 시흥시</span>
            </li>
            <li>
              <img src="@/assets/image/mail-icon.png" alt="이메일 아이콘" class="icon" />
              <span>leekh010502@naver.com</span>
            </li>
            <li>
              <img src="@/assets/image/instagram-icon.png" alt="인스타그램 아이콘" class="icon" />
              <a href="https://www.instagram.com/leeeeeee_kyu_h" target="_blank"> Instagram</a>
            </li>
            <li>
              <img src="@/assets/image/git-icon.png" alt="GitHub 아이콘" class="icon" />
              <a href="https://github.com/leekyuhyun" target="_blank"> GitHub</a>
            </li>
            <li>
              <img src="@/assets/image/vlog-icon.png" alt="Velog 아이콘" class="icon" />
              <a href="https://velog.io/@leekh010502" target="_blank"> Velog</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="activity-section">
        <div class="activity-box">
          <h3>
            <img src="@/assets/image/school-icon.png" alt="학력 아이콘" class="icon" /> Activity
          </h3>
          <p>2023.07.01 ~<br />멋쟁이사자처럼 프론트엔드 스쿨 1기 수료</p>
        </div>
        <div class="activity-box"></div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.about-content {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20rem;
}
.profile-image img {
  width: 30rem;
  height: auto;
  border-radius: 50%;
  border: 5px solid #eee;
}
.profile-details li {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
}
.icon {
  width: 2.4rem;
  height: 2.4rem;
  margin-right: 1.2rem;
}
.profile-details a {
  color: var(--primary-color);
  transition: text-decoration 0.2s;
}
.profile-details a:hover {
  text-decoration: underline;
}
.activity-section {
  display: flex;
  gap: 2rem;
  margin-top: 6rem;
}
.activity-box {
  flex: 1;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  min-height: 15rem;
}
.activity-box h3 {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 2rem;
}
</style>
