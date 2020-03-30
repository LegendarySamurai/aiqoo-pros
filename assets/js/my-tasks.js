const filterButton = document.querySelector('.filter-btn');
const statusBarInner = document.querySelector('.status-bar-inner');
const closeStatusBarInnerBtn = document.querySelector('.close-filter-btn');
const cardLabel = document.querySelector('.label');
const taskCardInnerDetailed = document.querySelector('.detailed');
const taskCardInnerShort = document.querySelector('.short');
let taskCardInnerDetailedShown = false;

statusBarInner.classList.remove('is-active');

filterButton.addEventListener('click', () => {
	statusBarInner.classList.add('is-active');
});

closeStatusBarInnerBtn.addEventListener('click', () => {
	statusBarInner.classList.remove('is-active');
});

cardLabel.addEventListener('click', () => {
	if(!taskCardInnerDetailed.classList.contains('show')) {
		taskCardInnerDetailed.classList.add('show');
		taskCardInnerShort.classList.remove('show');
		taskCardInnerShort.classList.add('hide');
		cardLabel.classList.add('is-active');
		taskCardInnerDetailedShown = true;
	} else {
		taskCardInnerDetailed.classList.add('hide');
		taskCardInnerDetailed.classList.remove('show');
		taskCardInnerShort.classList.add('show');
		cardLabel.classList.remove('is-active');
	}
});
