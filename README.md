<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Taste Archive Portfolio</title>
  <link rel="stylesheet" href="style.css"/>
</head>

<body>

  <!-- INTRO -->
  <section class="section intro">
    <h1>HOW DO WE TASTE VISUALLY?</h1>
    <p>Poster · Video · Goods<br/>하나의 맛을 세 가지 언어로 기록하다</p>
  </section>

  <!-- POSTER -->
  <section class="section poster">
    <div class="text">
      <h2>FOOD POSTER</h2>
      <p>시각적으로 맛을 압축하다</p>
    </div>
    <div class="media">
      <img src="poster.jpg" alt="poster">
    </div>
  </section>

  <!-- VIDEO -->
  <section class="section video">
    <video autoplay muted loop>
      <source src="video.mp4" type="video/mp4">
    </video>
    <div class="overlay">
      <h2>MOTION FLAVOR STUDY</h2>
      <p>맛을 시간으로 기록하다</p>
    </div>
  </section>

  <!-- GOODS -->
  <section class="section goods">
    <h2>FLAVOR OBJECTS</h2>
    <div class="grid">
      <img src="goods1.jpg" />
      <img src="goods2.jpg" />
      <img src="goods3.jpg" />
    </div>
    <p>경험을 손에 쥐는 형태로 확장하다</p>
  </section>

  <!-- CONTACT -->
  <section class="section contact">
    <h2>CONTACT</h2>
    <p>email: yourmail@gmail.com</p>
    <p>instagram: @yourid</p>
  </section>

  <script src="script.js"></script>


// 스크롤 등장 효과 (간단 버전)
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    } else {
      entry.target.style.opacity = 0.3;
      entry.target.style.transform = "translateY(40px)";
    }
  });
}, { threshold: 0.2 });

sections.forEach(sec => {
  sec.style.transition = "all 0.8s ease";
  observer.observe(sec);
});
</body>
</html>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: serif;
  background: #111;
  color: #f5f1e8;
}

/* 공통 섹션 */
.section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 80px 20px;
}

/* INTRO */
.intro h1 {
  font-size: 48px;
  letter-spacing: 2px;
}

.intro p {
  margin-top: 20px;
  opacity: 0.7;
}

/* POSTER */
.poster {
  flex-direction: row;
  gap: 60px;
}

.poster img {
  width: 400px;
  border-radius: 10px;
}

/* VIDEO */
.video {
  position: relative;
  overflow: hidden;
}

.video video {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
}

.video .overlay {
  position: relative;
  text-align: center;
  z-index: 2;
}

/* GOODS */
.goods .grid {
  display: flex;
  gap: 20px;
  margin-top: 30px;
}

.goods img {
  width: 200px;
  border-radius: 10px;
}

/* CONTACT */
.contact {
  text-align: center;
  opacity: 0.8;
}
