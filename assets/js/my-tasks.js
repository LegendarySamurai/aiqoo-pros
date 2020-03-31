const cardLabel = document.querySelector('.label');
const taskCardInner = document.querySelector('.task-card-inner');
let taskCardInnerDetailedShown = false;


cardLabel.addEventListener('click', () => {
	if (!taskCardInnerDetailedShown) {
		cardLabel.classList.add('is-active');
		taskCardInner.classList.add('is-active');
		taskCardInnerDetailedShown = true;
	} else {
		cardLabel.classList.remove('is-active');
		taskCardInner.classList.remove('is-active');
		taskCardInnerDetailedShown = false;
	}
});
