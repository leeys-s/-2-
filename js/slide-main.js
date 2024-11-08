// 11월 7일(목) 작업 html 104라인
// 11월 8일(금) 작업 html 126라인
// 카카오 블로그 사진안에 슬라이드 .... 나오게 하는 작업
window.addEventListener("load", function () {
  const visualSlideSW = new Swiper(".visual-slide", {
    loop: true,
    pagination: {
      el: " .visual-slide .swiper-pagination",
      // 클릭이 가능하게 해줘
      clickable: true,
    },
    // 사진 자동재생,움직이는 것
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    speed: 1000,
  });
  // 개발자 추가 작업 : 마우스 가 Enter 가 되면 (마우스 걸치면)
  const visaulSide = document.querySelector(".visual-slide");
  // console.log(visaulSide);

  visaulSide.addEventListener("mouseenter", function () {
    // console.log("오버");
    visualSlideSW.autoplay.stop();
  });

  visaulSide.addEventListener("mouseleave", function () {
    // console.log("아웃");
    visualSlideSW.autoplay.start();
  });
});
