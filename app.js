// import * as flsFunctions from "./modules/functions.js";
// flsFunctions.isWebp();
// import $ from "jquery";
// import jQuery from "jquery";
// window.$ = window.jQuery = jQuery;
// import WOW from "wow.js";
// new WOW().init();

// $(document).ready(function () {
// $(window).on('resize', function () {
//   var $containerWidth = $(window).width();
//   if ($containerWidth <= 1076) {
//     $('#subheaderNav').addClass('active');
//   } else {
//     $('#subheaderNav').removeClass('active');
//   }
// }); 
const buttonMen = document.querySelector('.header__button-gender_men');
const buttonWomen = document.querySelector('.header__button-gender_women');
const body = document.body;
const cardImage = document.querySelector('.card__photo');
const cardText = document.querySelector('.card__text');
const buttonText = document.querySelector('.header__button-change_text');
const buttonImage = document.querySelector('.header__button-change_image');

const state = {
  gender: body.classList.contains('women') ? ('women') : ('men'),
};


const getData = () => {
  return fetch('./files/db.json').then((response) => response.json());
};

const getRandomArr = (arr) => {
  const randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber];
};
const changeDom = () => {
  if (state.photo.includes('black')) {
    cardText.style.color = '#ffffff';
  } else {
    cardText.style.color = '';
  }
  cardImage.src = `./img/${state.photo}`;
  cardText.innerHTML = state.text.replaceAll('\n', '<br>');
};

const getDataToCard = () => {
  getData().then(data => {
    state.text = getRandomArr(data.text[state.gender]);
    state.photo = getRandomArr(data.photo[state.gender]);
    console.log(state.photo);
    changeDom();
  });
};

const changeToMen = () => {
  if (state.gender !== 'men') {
    body.classList.add('men');
    body.classList.remove('women');
    state.gender = 'men';
    getDataToCard();
  };
};
const changeToWomen = () => {
  if (state.gender !== 'women') {
    body.classList.add('women');
    body.classList.remove('men');
    state.gender = 'women';
    getDataToCard();
  }
};

const changeText = () => {
  getData().then(data => {
    state.text = getRandomArr(data.text[state.gender]);
    changeDom();
  })
};
const changeImage = () => {
  getData().then(data => {
    state.photo = getRandomArr(data.photo[state.gender]);
    changeDom(); 
  }) 
};

buttonMen.addEventListener('click', changeToMen);
buttonWomen.addEventListener('click', changeToWomen);
buttonText.addEventListener('click', changeText);
buttonImage.addEventListener('click', changeImage);
getDataToCard();

const cardWrapper = document.querySelector('.card__wrapper');
const downloadImg = document.querySelector('.download');

downloadImg.addEventListener('click', () => {

  const newWindow = window.open(
    '',
    '',
    `width=840,height=520,
    top= ${(screen.height / 2) - 520 / 2},
    left= ${(screen.width / 2) - 840 / 2}`);
  html2canvas(cardWrapper).then(canvas => {
    canvas.style.maxWidth = '100%';
    canvas.style.height = 'auto';
    newWindow.document.body.append(canvas);
  });
});

// });
  //=====================================burger===============================================================================
  // $("#navToggle").on("click", function (e) {
  //   e.preventDefault();
  //   $("#form-right").toggleClass("active");
  //   $("#header").toggleClass("active");
  //   $("#navToggle").toggleClass("active");

  // });
  //====================================fixed header==================================================================
  // var header = $("#header"),
  //   introH = $("#subheader").innerHeight(),
  //   scrollOffset = $(window).scrollTop();
  // checkScroll(scrollOffset);
  // $(window).on("scroll", function () {
  //   scrollOffset = $(this).scrollTop();
  //   checkScroll(scrollOffset);
  // });
  // function checkScroll(scrollOffset) {
  //   if (scrollOffset >= introH) {
  //     header.addClass("fixed");
  //   } else {
  //     header.removeClass("fixed");
  //   }
  // }

  //======================active-link=============================================================================

  // $("#form-right  .form-right__button").on("click", function (e) {
  //   e.preventDefault();
  //   var $this = $(this);
  //   $this.addClass("active");
  //   $("#form-right .form-right__button").removeClass('active');
  //   if ($($this.hasClass('active')) && $(window).width <= 767) {
  //     $("#form-right").toggleClass("active");
  //     $("#header").toggleClass("active");
  //     $("#navToggle").toggleClass("active");
  //   } else {
  //     $("#form-right").removeClass("active");
  //     $("#header").removeClass("active");
  //     $("#navToggle").removeClass("active");
  //   }

  //   //====================slider======================================================================================
  //   const items = document.querySelectorAll('.slider__body .slider__line  .slider__item');
  //   const sliderLine = document.querySelector('.slider__body .slider__line');
  //   let count = 0;
  //   let width;

  //   function init() {
  //     width = document.querySelector('.slider__body').offsetWidth;
  //     sliderLine.style.width = width * items.length + 'px';
  //     items.forEach(item => {
  //       item.style.width = width + 'px';
  //       item.style.height = 'auto';
  //     });
  //     rollSlider();
  //   };
  //   init();


  //   window.addEventListener('resize', init);
  //   document.querySelector('.arrow-next').addEventListener('click', function () {
  //     count++;
  //     if (count >= items.length) {
  //       count = 0;
  //     }
  //     rollSlider();
  //   });

  //   document.querySelector('.arrow-prev').addEventListener('click', function () {
  //     count--;
  //     if (count < 0) {
  //       count = items.length - 1;
  //     }
  //     rollSlider();
  //   });

  //   function rollSlider() {
  //     sliderLine.style.transform = 'translate(-' + count * width + 'px)';
  //   };




  //   //====================slider2=====================================================================================
  //   const elems = document.querySelectorAll(
  //     ".slider2__body .slider2__line .slider2__item");
  //   const sliderLine2 = document.querySelector(".slider2__body .slider2__line");
  //   let width2;
  //   function init2() {
  //     width2 = document.querySelector(".slider2__body").offsetWidth;
  //     sliderLine2.style.width = width2 * elems.length + "px";
  //     elems.forEach((item) => {
  //       item.style.width = width2 + "px";
  //       item.style.height = "auto";
  //     });
  //   }
  //   init2();
  //   window.addEventListener("resize", init2);
  //   document
  //     .querySelector(".slider2__button-1")
  //     .addEventListener("click", function () {
  //       sliderLine2.style.transform = "translate(-" + 0 * width2 + "px)";
  //     });
  //   document
  //     .querySelector(".slider2__button-2")
  //     .addEventListener("click", function () {
  //       sliderLine2.style.transform = "translate(-" + 1 * width2 + "px)";
  //     });
  //   document
  //     .querySelector(".slider2__button-3")
  //     .addEventListener("click", function () {
  //       sliderLine2.style.transform = "translate(-" + 2 * width2 + "px)";
  //     });

  // });
































  //================================burger=====================================================================

  // //scroll
  // $("[data-scroll]").on("click", function (e) {
  //   e.preventDefault();
  //   var elementId = $(this).data("scroll"),
  //     elementOffset = $(elementId).offset().top;
  //   $("html,body").animate({ scrollTop: elementOffset }, 500);
  // });




  // ===============slider========================================================================================
  // const items = document.querySelectorAll(
  //   ".slider__body .slider__line  .slider__item"
  // );
  // const sliderLine = document.querySelector(".slider__body .slider__line");
  // let width;

  // function init() {
  //   width = document.querySelector(".slider__body").offsetWidth;
  //   sliderLine.style.width = width * items.length + "px";
  //   items.forEach((item) => {
  //     item.style.width = width + "px";
  //     item.style.height = "auto";
  //   });
  // }
  // init();
  // window.addEventListener("resize", init);
  // document
  //   .querySelector(".slider__button-1")
  //   .addEventListener("click", function () {
  //     sliderLine.style.transform = "translate(-" + 0 * width + "px)";
  //   });
  // document
  //   .querySelector(".slider__button-2")
  //   .addEventListener("click", function () {
  //     sliderLine.style.transform = "translate(-" + 1 * width + "px)";
  //   });
  // document
  //   .querySelector(".slider__button-3")
  //   .addEventListener("click", function () {
  //     sliderLine.style.transform = "translate(-" + 2 * width + "px)";
  //   });
  // document
  //   .querySelector(".slider__button-4")
  //   .addEventListener("click", function () {
  //     sliderLine.style.transform = "translate(-" + 3 * width + "px)";
  //   });

  // document
  //   .querySelector(".slider__button-5")
  //   .addEventListener("click", function () {
  //     sliderLine.style.transform = "translate(-" + 4 * width + "px)";
  //   
