const notificationButtons = document.querySelectorAll('.notification-button');
const dropdownList = document.querySelector('.dropdown-list');

notificationButtons.forEach(button => {
	button.addEventListener('click', function () {
		console.log(this, '1111111');
		this.classList.add('is-active');
		dropdownList.classList.remove('invisible');
		dropdownList.classList.add('visible');
	});
});
