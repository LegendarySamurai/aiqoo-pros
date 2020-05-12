//--  slick INIT
//--------------------------------

const isDesktop = window.innerWidth >= 992;
if (isDesktop) {
	$('#slick-container').slick({
		rows: 1,
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		infinite: false,
		responsive: [
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	});
}



//--  ?
//--------------------------------
const isMobile = window.innerWidth < 992;

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
// const sideBlockForm = document.querySelector('.side-block');
// const accountVerification = document.querySelector('.account-verification');

letsStartBtns.forEach(btn => {
	btn.addEventListener('click', (e) => {
		e.preventDefault();
		// sideBlockForm.classList.add('disabled');
		// accountVerification.classList.add('is-active');
		// console.log(e.target, '=> works');
	});
});


// Quality cards on hover adds underlay
const qualityCardsContainer = document.querySelector('.quality-cards');
const qualityCards = document.querySelectorAll('.quality-card');
const qualityCardsUnderlay = document.querySelector('.quality-cards-underlay');
// let cardIsClicked = false;


qualityCards.forEach(card => {
	// for desktop
	if (isDesktop) {
		card.addEventListener('mouseover', function () {
			this.classList.add('show');
			this.classList.remove('hide');
		});

		card.addEventListener('mouseout', function () {
			this.classList.add('hide');
		})
	}

	// for mobile
	if (isMobile) {
		card.addEventListener('click', function() {
			this.classList.add('show');
			this.classList.remove('hide');
		});
	}
});



// for desktop
if (isDesktop) {
	qualityCardsContainer.addEventListener('mouseover', function() {
		this.classList.add('show-underlay');
		this.classList.remove('hide-underlay');
	});

	qualityCardsContainer.addEventListener('mouseout', function() {
		this.classList.add('hide-underlay');
	});
}

// for mobile
if (isMobile) {
	qualityCardsContainer.addEventListener('click', function() {
		if (!qualityCardsContainer.classList.contains('show-underlay')) {
			// console.log('click 1');
			qualityCardsContainer.classList.add('show-underlay');
		}
		else if (qualityCardsContainer.classList.contains('hide-underlay')) {
			// console.log('click 3');
			qualityCardsContainer.classList.remove('hide-underlay');
		}
		else {
			return;
		}
	});

	qualityCardsUnderlay.addEventListener('click', function(e) {
		e.stopPropagation();
		if (qualityCardsContainer.classList.contains('show-underlay') && !qualityCardsContainer.classList.contains('hide-underlay')) {
			// console.log('click 2');
			qualityCardsContainer.classList.add('hide-underlay');
		}

		qualityCards.forEach(card => {
			card.classList.add('hide');
		});
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

	if (delta > 0) {
		FooterScrollContainer.classList.remove('hide');
		FooterScrollContainer.classList.add('show');
	} else {
		FooterScrollContainer.classList.remove('show');
		FooterScrollContainer.classList.add('hide');
	}
}

// Terms and conditions popup
const termsAndConditionsOpenBtn = document.querySelector('.open-terms-and-conditions');
const termAndConditionsInfoModal = document.querySelector('.terms-and-conditions-info');
const modalCloseBtn = document.querySelector('.terms-and-conditions-info .close');
const modalBackdrop = document.querySelector('.modal-backdrop');

termsAndConditionsOpenBtn.addEventListener('click', function() {
	termAndConditionsInfoModal.classList.add('active');
	modalBackdrop.classList.add('active');
});

modalCloseBtn.addEventListener('click', function() {
	termAndConditionsInfoModal.classList.remove('active');
	modalBackdrop.classList.remove('active');
});
