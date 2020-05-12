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

