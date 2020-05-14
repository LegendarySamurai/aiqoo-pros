const filterButton = document.querySelector('.filter-btn');
const statusBarInner = document.querySelector('.status-bar-inner');
const closeStatusBarInnerBtn = document.querySelector('.close-filter-btn');
const closeFilter = document.querySelector('.close-filter');

const openFilterBtn = document.querySelector('.open-filter-btn');
const statusBarCol = document.querySelector('.status-bar-col');


if (window.innerWidth < 600) {
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
}

if (window.innerWidth >= 600) {
	// statusBarCol.classList.remove('filter-closed');
	// statusBarCol.classList.remove('filter-opened');
	openFilterBtn.addEventListener('click', () => {
		if (statusBarCol.classList.contains('filter-closed')) {
			console.log(1);
			statusBarCol.classList.add('filter-opened');
			statusBarCol.classList.remove('filter-closed');
		} else {
			console.log(2);
			statusBarCol.classList.remove('filter-opened');
			statusBarCol.classList.add('filter-closed');
		}
	});
}


