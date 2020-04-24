//Projects section show/hide main-list

const showHideMoreBtn = document.querySelector('.readMoreLessBtn');
const mainList = document.querySelector('.main-list');

showHideMoreBtn.textContent = 'Show More';

function handleClick(e) {
	if (!mainList.classList.contains('active')) {
		mainList.classList.add('active');
		e.target.textContent = 'Hide';
	} else {
		mainList.classList.remove('active');
		e.target.textContent = 'Show More';
	}

	$('html,body').animate(
		{
			scrollTop: $('.main-list').offset().top
		},
		'fast'
	);
}
showHideMoreBtn.addEventListener('click', handleClick);
