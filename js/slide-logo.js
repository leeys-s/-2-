// 11월 8일 (금) html 62-93
window.addEventListener("load", function () {
  //  @start api 주소 : json 주소가 어디니?
  //   json 파일 URL 주는 것
  const LOGO_DATA_URL = "/apis/logodata.json";
  //   인테넛에서 json파일 찾는 방법
  //   http://127.0.0.1:5500/apis/logodata.json

  // API를 통한 데이터 불러오기
  //   ----request:리퀘스트
  //   API를 통해 불러들여진 결과물
  //   ----response: 리스판스

  //   this.fetch(LOGO_DATA_URL). then(성공했을때).catch(에러가 났을때);
  this.fetch(LOGO_DATA_URL)
    .then(function (response) {
      //   console.log(response);
      const result = response.json();
      //   console.log(result);
      return result;
    })
    .then(function (result) {
      // 1. json 뜯기
      console.log(result);
      // 2. 반복해서 HTML 태그를 생성
      let logoHtml = "";
      for (let i = 0; i < 9; i++) {
        const data = `<img src="${result[i].imgUrl}" alt="${result[i.desc]}"/>`;
        logoHtml += data;
      }

      console.log(logoHtml);

      // 3. 생성된 HTML을 원하는 곳에 배치
      // 4. swiper 생성 및 실행
    })
    .catch(function (error) {
      console.log(error);
    });
  // @end api 주소 : json 주소가 어디니?

  // @start MockDate
  // { 이름 : 값}()
  // { imgUrl : "경로", desc : "설명문"}
  // [ {}, {}, {}]
  //   const logoData = [{ imgUrl: "#", desc: "#", }, { imgUrl: "#", desc: "#", }, ];
  //   const LogoData;

  const logoData = [
    {
      imgUrl: "logo-blog01.png",
      desc: "로고",
    },
    {
      imgUrl: "logo-blog02.png",
      desc: "로고",
    },
    {
      imgUrl: "logo-blog03.png",
      desc: "로고",
    },
    {
      imgUrl: "logo-blog04.png",
      desc: "로고",
    },
    {
      imgUrl: "logo-blog05.png",
      desc: "로고",
    },
    {
      imgUrl: "logo-blog06.png",
      desc: "로고",
    },
    {
      imgUrl: "logo-blog07.png",
      desc: "로고",
    },
    {
      imgUrl: "logo-blog08.png",
      desc: "로고",
    },
    {
      imgUrl: "logo-blog09.png",
      desc: "로고",
    },
  ];
  // @end MockDate

  // @start blog <> 블로그 변화 하는것 작업
  const headerLogo = new Swiper(".header-logo-motion", {
    loop: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    // effect: "fade",만 입력시, 겹쳐서 지저분해 진다.
    effect: "fade",
    // swipe API 참고 해서
    fadeEffect: {
      crossFade: true,
    },
    // fadeEffect: {crossFade: true,}, 입력시 깔끔해짐.
    // @end blog <> 블로그 변화 하는것 작업
  });
});
