const notificationButtons = document.querySelectorAll('.notification-button');
const userInfoTop = document.querySelector('.info-inner');
const dropdownList = document.querySelector('.dropdown-list');
const dropdownInfo = document.querySelector('.dropdown-info');

notificationButtons.forEach(button => {
	button.addEventListener('click', function () {
		if(!this.classList.contains('is-active')) {
			this.classList.add('is-active');
			dropdownList.classList.remove('invisible');
			dropdownList.classList.add('visible');
		} else {
			this.classList.remove('is-active');
			dropdownList.classList.remove('visible');
			dropdownList.classList.add('invisible');
		}
	});
});

userInfoTop.addEventListener('click', function() {
	if(!userInfoTop.classList.contains('is-active')) {
		// console.log(this, '1111111');
		userInfoTop.classList.add('is-active');
		dropdownInfo.classList.remove('invisible');
		dropdownInfo.classList.add('visible');
	} else {
		// console.log(this, '2222222');
		this.classList.remove('is-active');
		dropdownInfo.classList.remove('visible');
		dropdownInfo.classList.add('invisible');
	}
});
