const ticketHeader = $('.ticket-header');
const ticketContent = $('.ticket-content');

$(document).ready(function () {
	if (window.innerWidth < 600) {
		ticketContent.addClass('is-active');
		ticketHeader.addClass('is-active');

		ticketHeader.click(function () {
			const currentTicketHeader = $(this);
			const currentTicket = currentTicketHeader.parents('.ticket');
			const currentTicketContent = currentTicket.find('.ticket-content');

			ticketContent.addClass('is-active');
			ticketHeader.addClass('is-active');

			currentTicketHeader.removeClass('is-active');
			currentTicketContent.removeClass('is-active');
		});
	}
});

/* ======================================================= */

