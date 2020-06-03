const filterButton = document.querySelector('.filter-btn');
const statusBarInner = document.querySelector('.status-bar-inner');
const closeStatusBarInnerBtn = document.querySelector('.close-filter-btn');
const closeFilter = document.querySelector('.close-filter');
const closeStatusBarBtn = document.querySelector('.close-status-bar-btn');

const openFilterBtns = document.querySelectorAll('.open-filter');
const statusBarCol = document.querySelector('.status-bar-col');

if (window.innerWidth < 600) {
	statusBarInner.classList.remove("is-active");

	filterButton.addEventListener("click", () => {
		statusBarInner.classList.add("is-active");
		// statusBarBacklayer.classList.add('is-active');
	});

	closeStatusBarInnerBtn.addEventListener("click", () => {
		console.log('=> Works');
		statusBarInner.classList.remove("is-active");
	});

	closeFilter.addEventListener("click", () => {
		statusBarInner.classList.remove("is-active");
	});
}

if (window.innerWidth >= 600) {
	openFilterBtns.forEach(button => {
		button.addEventListener('click', () => {
			if (statusBarCol.classList.contains('filter-closed')) {
				statusBarCol.classList.add('filter-opened');
				statusBarCol.classList.remove('filter-closed');
			}
		});
	});

	closeStatusBarBtn.addEventListener('click', () => {
		statusBarCol.classList.remove('filter-opened');
		statusBarCol.classList.add('filter-closed');
	});
}


