<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>맛집 포트폴리오</title>
  <link rel="stylesheet" href="style.css"/>
</head>

<body>

  <!-- 헤더 -->
  <header>
    <h1>🍽️ My Food Portfolio</h1>
    <p>맛집 콘텐츠 제작 포트폴리오</p>
  </header>

  <!-- 포스터 -->
  <section class="card">
    <h2>📌 맛집 포스터</h2>
    <img src="images/poster.jpg" alt="맛집 포스터">
  </section>

  <!-- 영상 -->
  <section class="card">
    <h2>🎬 맛집 홍보 영상</h2>

    <div class="video-box">
      <video id="video" src="video/promo.mp4"></video>
      <button id="playBtn">▶ 재생</button>
    </div>
  </section>

  <!-- 굿즈 -->
  <section class="card">
    <h2>🎁 맛집 굿즈</h2>
    <img src="images/goods.jpg" alt="맛집 굿즈">
  </section>

  <footer>
    <p>© 2026 My Portfolio</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>

body {
  margin: 0;
  font-family: 'Arial', sans-serif;
  background: linear-gradient(180deg, #d9f3ff, #ffffff);
  color: #1b2b34;
}

/* 헤더 */
header {
  text-align: center;
  padding: 60px 20px;
  background: #8fd3ff;
  color: white;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
}

/* 카드 */
.card {
  width: 80%;
  max-width: 900px;
  margin: 40px auto;
  background: white;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
}

.card h2 {
  margin-bottom: 20px;
}

/* 이미지 */
.card img {
  width: 100%;
  border-radius: 15px;
}

/* 영상 영역 */
.video-box {
  position: relative;
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
}

video {
  width: 100%;
  border-radius: 15px;
}

/* 재생 버튼 */
#playBtn {
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: rgba(0, 140, 255, 0.85);
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 30px;
  cursor: pointer;
  font-size: 14px;
}

#playBtn:hover {
  background: rgba(0, 120, 220, 1);
}

/* 푸터 */
footer {
  text-align: center;
  padding: 30px;
  color: #555;
}

const video = document.getElementById("video");
const btn = document.getElementById("playBtn");

btn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    btn.textContent = "⏸ 일시정지";
  } else {
    video.pause();
    btn.textContent = "▶ 재생";
  }
});
