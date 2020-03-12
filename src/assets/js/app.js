$(".top-menu a").click(function() {
  $(".top-menu-wrapper").removeClass("show-offcanvas");
});

// Slick -------------->
$(".responsive-slick").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 1900,
  responsive: [
    {
      breakpoint: 1024,
      settings: "unslick"
    },

    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

//Red-section slider

$(".center").slick({
  centerMode: true,
  centerPadding: "-30px",
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 1900,
  arrows: false
});

//Projects section show/hide main-list

const readMoreBtn = document.getElementById("readMore-js");
const mainList = document.querySelector(".main-list");

readMoreBtn.addEventListener("click", function() {
  mainList.classList.toggle("visible");
  mainList.classList.toggle("hidden");
  $("html,body").animate(
    {
      scrollTop: $(".main-list").offset().top
    },
    "fast"
  );
});

const readLessBtn = document.getElementById("readLess-js");

readLessBtn.addEventListener("click", function() {
  mainList.classList.toggle("visible");
  mainList.classList.toggle("hidden");
  $("html,body").animate(
    {
      scrollTop: $(".hangman-game-link").offset().top
    },
    "fast"
  );
});
