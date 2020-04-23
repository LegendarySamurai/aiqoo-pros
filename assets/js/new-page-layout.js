const notificationButtons = document.querySelectorAll('.notification-button');
const dropdownList = document.querySelector('.dropdown-list');

notificationButtons.forEach(button => {
	button.addEventListener('click', function () {
		if(!this.classList.contains('is-active')) {
			// console.log(this, '1111111');
			this.classList.add('is-active');
			dropdownList.classList.remove('invisible');
			dropdownList.classList.add('visible');
		} else {
			// console.log(this, '2222222');
			this.classList.remove('is-active');
			dropdownList.classList.remove('visible');
			dropdownList.classList.add('invisible');
		}
	});
});
