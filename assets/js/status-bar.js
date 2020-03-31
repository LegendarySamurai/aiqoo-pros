const filterButton = document.querySelector('.filter-btn');
const statusBarInner = document.querySelector('.status-bar-inner');
const closeStatusBarInnerBtn = document.querySelector('.close-filter-btn');
const closeFilter = document.querySelector('.close-filter');

statusBarInner.classList.remove('is-active');

filterButton.addEventListener('click', () => {
	statusBarInner.classList.add('is-active');
	// statusBarBacklayer.classList.add('is-active');
});

closeStatusBarInnerBtn.addEventListener('click', () => {
	statusBarInner.classList.remove('is-active');
});

closeFilter.addEventListener('click', () => {
	statusBarInner.classList.remove('is-active');
});


