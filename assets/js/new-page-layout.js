
// On top fixed panel users buttons click - showes dropdown for each.
const notificationButtonOne = document.querySelector('.notification-1 .notification-button');
const notificationButtonTwo = document.querySelector('.notification-2 .notification-button');
const userInfoTop = document.querySelector('.user');
const dropdownListOne = document.querySelector('.dropdown-list-one');
const dropdownListTwo = document.querySelector('.dropdown-list-two');
const dropdownInfo = document.querySelector('.dropdown-info');

notificationButtonOne.addEventListener('click', function () {
	if(!this.classList.contains('is-active')) {
		// console.log(this, '1111111');
		this.classList.add('is-active');
		dropdownListOne.classList.remove('invisible');
		dropdownListOne.classList.add('visible');
	} else {

		// console.log(this, '2222222');
		this.classList.remove('is-active');
		dropdownListOne.classList.remove('visible');
		dropdownListOne.classList.add('invisible');
	}
});

notificationButtonTwo.addEventListener('click', function () {
	if(!this.classList.contains('is-active')) {

		// console.log(this, '3333');
		this.classList.add('is-active');
		dropdownListTwo.classList.remove('invisible');
		dropdownListTwo.classList.add('visible');
	} else {

		// console.log(this, '44444');
		this.classList.remove('is-active');
		dropdownListTwo.classList.remove('visible');
		dropdownListTwo.classList.add('invisible');
	}
});

userInfoTop.addEventListener('click', function() {
	if(!userInfoTop.classList.contains('is-active')) {
		// console.log(this, '5555555');
		userInfoTop.classList.add('is-active');
		dropdownInfo.classList.remove('invisible');
		dropdownInfo.classList.add('visible');
	} else {
		// console.log(this, '666666');
		this.classList.remove('is-active');
		dropdownInfo.classList.remove('visible');
		dropdownInfo.classList.add('invisible');
	}
});


// Adds class "is-active" to the clicked sub-menu item
const subMenuItems = document.querySelectorAll('.sub-menu-item');
let subMenuBtnClicked = false;

subMenuItems.forEach(item => {
	item.addEventListener('click', () => {
		subMenuItems.forEach(item => {
			item.classList.remove('is-active');
		});

		if (!item.classList.contains('is-active')) {
			item.classList.add('is-active');
			subMenuBtnClicked = true;
		} else {
			item.classList.remove('is-active');
			subMenuBtnClicked = false;
		}
	});
});
