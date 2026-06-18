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
