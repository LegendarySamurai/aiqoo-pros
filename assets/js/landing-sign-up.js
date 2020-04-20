const isMobile = window.innerWidth < 600;

// Button LETS START on click shows sms verification
// const letsStartBtn = document.querySelector('#submit-sign-up-form');
//
// letsStartBtn.addEventListener('click', (e) => {
// 	e.preventDefault();
// 	console.log('=> works');
// });


// Button LETS GO on click shows form
const letsGoBtn = document.querySelector('.lets-go-btn');
const formWrapper = document.querySelector('.back-layer');
const inner = document.querySelector('.inner');
const body = document.querySelector('body');
let popupVisible = false;


letsGoBtn.addEventListener('click', function() {
	console.log('IS MOBILE');
	if (isMobile) {
		formWrapper.classList.add('is-active');
		body.classList.add('blocked');
		popupVisible = true;
	} else {
		formWrapper.classList.remove('is-active');
		body.classList.remove('blocked');
	}
});

inner.addEventListener('click', () => {
	formWrapper.classList.remove('is-active');
	body.classList.remove('blocked');
});


// Quality cards on hover adds underlay
const qualityCardsContainer = document.querySelector('.quality-cards');
const qualityCards = document.querySelectorAll('.quality-card');

if (!isMobile) {
	qualityCardsContainer.addEventListener('mouseover', () => {
		// console.log('works');
		qualityCards.forEach(() => {
			if (!qualityCardsContainer.classList.contains('show-underlay')) {
				qualityCardsContainer.classList.add('show-underlay');
				qualityCardsContainer.classList.remove('hide-underlay');

			} else {
				qualityCardsContainer.classList.remove('hide-underlay');
			}
		});
	});

	qualityCardsContainer.addEventListener('mouseout', () => {
		qualityCardsContainer.classList.add('hide-underlay');
	});
}
// mobile
else {
	qualityCardsContainer.addEventListener('click', () => {
		if (qualityCardsContainer.classList.contains('hide-underlay')) {
			qualityCardsContainer.classList.remove('hide-underlay');
			body.classList.add('blocked');
		}
		else if (qualityCardsContainer.classList.contains('show-underlay')) {
			qualityCardsContainer.classList.add('hide-underlay');
			body.classList.remove('blocked');
		}
		else {
			qualityCardsContainer.classList.add('show-underlay');
			body.classList.add('blocked');
		}
	});

	qualityCardsContainer.addEventListener('click', () => {
		if (qualityCardsContainer.classList.contains('show-underlay')) {
			// qualityCardsContainer.classList.add('hide-underlay');
		}
	});
}


// Quality card on hover scaled
qualityCards.forEach(card => {
	card.addEventListener('mouseover', () => {
		qualityCards.forEach(card => {
			card.classList.add('z-index-0');
		});

		card.classList.remove('z-index-0');

		if (!card.classList.contains('show')) {
			card.classList.add('show');
			card.classList.remove('hide');
		} else {
			card.classList.remove('hide');
		}
	});

	card.addEventListener('mouseout', () => {
		card.classList.add('hide');

		qualityCards.forEach(card => {
			card.classList.remove('show');
			card.classList.add('z-index');
		})
	});
});


// Footer scroll to top
if ('onwheel' in document) {
	// IE9+, FF17+
	window.addEventListener("wheel", onWheel);
}

const FooterScrollContainer = document.querySelector('.scroll-container');

function onWheel(e) {
	e = e || window.event;

	var delta = e.deltaY || e.detail || e.wheelDelta;

	// e.preventDefault ? e.preventDefault() : (e.returnValue = false);

	if (delta > 0) {
		FooterScrollContainer.classList.remove('hide');
		FooterScrollContainer.classList.add('show');
	} else {
		FooterScrollContainer.classList.remove('show');
		FooterScrollContainer.classList.add('hide');
	}
	// console.log('=> delta', delta);
}
