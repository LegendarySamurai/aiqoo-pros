const isMobile = window.innerWidth < 600;

// Button LETS GO on click shows form
const letsGoBtn = document.querySelector('.lets-go-btn');
const formWrapper = document.querySelector('.back-layer');
const inner = document.querySelector('.inner');
const body = document.querySelector('body');
let popupVisible = false;


letsGoBtn.addEventListener('click', function() {
	// console.log('IS MOBILE');
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


// Button LETS START on click shows sms verification
const letsStartBtns = document.querySelectorAll('.submit-sign-up-form-input');
const sideBlockForm = document.querySelector('.side-block');
const accountVerification = document.querySelector('.account-verification');

letsStartBtns.forEach(btn => {
	btn.addEventListener('click', (e) => {
		e.preventDefault();
		sideBlockForm.classList.add('disabled');
		accountVerification.classList.add('is-active');
		// console.log(e.target, '=> works');
	});
});


// Quality cards on hover adds underlay
const qualityCardsContainer = document.querySelector('.quality-cards');
const qualityCards = document.querySelectorAll('.quality-card');
const qualityCardsUnderlay = document.querySelector('.quality-cards-underlay');
// let cardIsClicked = false;


qualityCards.forEach(card => {
	if (!isMobile) {
		card.addEventListener('mouseover', function () {
			this.classList.add('show');
			this.classList.remove('hide');
		});

		card.addEventListener('mouseout', function () {
			this.classList.add('hide');
		})
	}

	if (isMobile) {
		card.addEventListener('click', function() {
			this.classList.add('show');
			this.classList.remove('hide');
		});
	}
});

if (!isMobile) {
	qualityCardsContainer.addEventListener('mouseover', function() {
		this.classList.add('show-underlay');
		this.classList.remove('hide-underlay');
	});

	qualityCardsContainer.addEventListener('mouseout', function() {
		this.classList.add('hide-underlay');
	});
}

if (isMobile) {
	qualityCardsContainer.addEventListener('click', function() {
		this.classList.add('show-underlay');
		// this.classList.remove('hide-underlay');
	});
	qualityCardsUnderlay.addEventListener('click', () => {
		// console.log(e.target, 'works');
		qualityCards.forEach(card => {
			card.classList.add('hide');
		});
		qualityCardsContainer.classList.add('hide-underlay');
	});
}

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
