const ticketHeader = document.querySelector('.ticket-header');
const ticketContent = document.querySelector('.ticket-content');
let ticketContentDetailedShown = false;


ticketHeader.addEventListener('click', () => {
	if (ticketHeader.classList.contains('is-active')) {
		ticketHeader.classList.remove('is-active');
		ticketContent.classList.remove('is-active');
		ticketContentDetailedShown = true;
	} else {
		ticketHeader.classList.add('is-active');
		ticketContent.classList.add('is-active');
		ticketContentDetailedShown = false;
	}
});
