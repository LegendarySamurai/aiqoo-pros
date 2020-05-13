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


// // Button LETS START on click shows sms verification
// const letsStartBtns = document.querySelectorAll('.submit-sign-up-form-input');
// // const sideBlockForm = document.querySelector('.side-block');
// // const accountVerification = document.querySelector('.account-verification');
//
// letsStartBtns.forEach(btn => {
// 	btn.addEventListener('click', (e) => {
// 		e.preventDefault();
// 		// sideBlockForm.classList.add('disabled');
// 		// accountVerification.classList.add('is-active');
// 		// console.log(e.target, '=> works');
// 	});
// });


// QUALITY CARDS on hover adds underlay
const qualityCards = $('.quality-cards');
const qualityCard = $('.quality-card');
const smallCard = $('.quality-card .small-card');
const bigCard = $('.quality-card .big-card');
const cardsUnderlay = $('.quality-cards-underlay');
let currentCardOpen = null;

// show big card on mobile
smallCard.click(function () {
	const currentCard = currentCardOpen = this;
	openBigCardOnMobile(currentCard);
});

// hide big card on mobile
bigCard.click(function (event) {
	event.stopPropagation();

	const currentCard = this;
	closeBigCardOnMobile(currentCard);
});

// hide big card on mobile
cardsUnderlay.click(function (event) {
	event.stopPropagation();

	const currentCard = this;
	closeBigCardOnMobile(currentCardOpen);
});

smallCard.mouseover(function () {
	const currentCard = this;
	openBigCardOnDesktop(currentCard);
});

bigCard.mouseleave(function (event) {
	event.stopPropagation();

	closeBigCardOnDesktop(this);
	const currentCard = this;
	closeBigCardOnDesktop (currentCard);
});

function showUnderlay () {
	if (!qualityCards.hasClass('hide-underlay')) {
		qualityCards.addClass('show-underlay');
	}
	else {
		qualityCards.removeClass('hide-underlay');
	}
}

function hideUnderlay () {
	qualityCards.addClass('hide-underlay');
}

function openBigCardOnMobile (currentCard) {
	if (isDesktop) return;

	if (!$(currentCard).parents('.quality-card').hasClass('hide')) {
		$(currentCard).parents('.quality-card').addClass('show');
	}
	else {
		$(currentCard).parents('.quality-card').removeClass('hide');
	}

	showUnderlay();
}

function closeBigCardOnMobile (currentCard) {
	if (isDesktop) return;

	$(currentCard).parents('.quality-card').addClass('hide');

	hideUnderlay();
}

function openBigCardOnDesktop (currentCard) {
	if (isMobile) return;

	if (!$(currentCard).parents('.quality-card').hasClass('hide')) {
		$(currentCard).parents('.quality-card').addClass('show');
	}
	else {
		$(currentCard).parents('.quality-card').removeClass('hide');
	}

	showUnderlay();
}

function closeBigCardOnDesktop (currentCard) {
	if (isMobile) return;

	// console.log(currentCard);

	$(currentCard).parents('.quality-card').addClass('hide');

	hideUnderlay();
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
