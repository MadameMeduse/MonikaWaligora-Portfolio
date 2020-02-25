$(".top-menu a").click(function() {
  $(".top-menu-wrapper").removeClass("show-offcanvas");
});

// Slick -------------->
$(".responsive-slick").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
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
