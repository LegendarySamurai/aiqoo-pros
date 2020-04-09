const cardLabel = document.querySelector('.label');
const taskCardInner = document.querySelector('.task-card-inner');
let taskCardInnerDetailedShown = false;


cardLabel.addEventListener('click', () => {
	if (cardLabel.classList.contains('is-active')) {
		cardLabel.classList.remove('is-active');
		taskCardInner.classList.remove('is-active');
		// ticketContent.classList.remove('is-active');
		taskCardInnerDetailedShown = true;
		// ticketContentDetailedShown = true;
	} else {
		cardLabel.classList.add('is-active');
		taskCardInner.classList.add('is-active');
		// ticketContent.classList.add('is-active');
		taskCardInnerDetailedShown = false;
		// ticketContentDetailedShown = false;
	}
});
