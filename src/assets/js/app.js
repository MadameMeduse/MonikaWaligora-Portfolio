$('.top-menu a').click(function() {
	$('.top-menu-wrapper').removeClass('show-offcanvas');
});

// Slick -------------->
$('.responsive-slick').slick({
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
			settings: 'unslick'
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

$('.center').slick({
	centerMode: true,
	centerPadding: '-30px',
	slidesToShow: 1,
	autoplay: true,
	autoplaySpeed: 1900,
	arrows: false
});

// slide background in scroll

//ta funkcja ograniczy odpalanie funkcji (co 20 milisekund) tak aby nie przeciązać strony
function debounce(func, wait = 20, immediate = true) {
	var timeout;
	return function() {
		var context = this,
			args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}

function slideAtScroll() {
	const sliderImages = document.querySelectorAll('.slide-in');

	function checkSlide(e) {
		sliderImages.forEach((sliderImage) => {
			const slideInAt = window.scrollY + window.innerHeight - sliderImage.height / 2;
			//bottom of the image
			const imageBottom = sliderImage.offsetTop + sliderImage.height;
			const isHalfShown = slideInAt > sliderImage.offsetTop;
			const isNotScrolledPasted = window.scrollY < imageBottom;
			if (isHalfShown && isNotScrolledPasted) {
				sliderImage.classList.add('active');
			} else {
				sliderImage.classList.remove('active');
			}
		});
	}

	window.addEventListener('scroll', debounce(checkSlide));
}
slideAtScroll();
