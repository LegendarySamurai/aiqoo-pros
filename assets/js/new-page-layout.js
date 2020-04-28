// On top fixed panel users buttons click - showes dropdown for each.
const notificationButtonOne = document.querySelector('.notification-1 .notification-button');
const notificationButtonTwo = document.querySelector('.notification-2 .notification-button');
const userInfoTopOuter = document.querySelector('.user-outer');
const userInfoTop = document.querySelector('.user');
const dropdownListOne = document.querySelector('.dropdown-list-one');
const dropdownListTwo = document.querySelector('.dropdown-list-two');
const dropdownInfo = document.querySelector('.dropdown-info');
const openMenuMobileBtn = document.querySelector('.mobile-menu-ope-btn button');
const leftSideMenuContainer = document.querySelector('.left-side-container');
const menuLeftUnderlay = document.querySelector('.left-underlay');
const menuRightUnderlayOne = document.querySelector('.right-underlay-1');
const menuRightUnderlayTwo = document.querySelector('.right-underlay-2');
const menuRightUnderlayThree = document.querySelector('.right-underlay-3');
const subMenuItems = document.querySelectorAll('.sub-menu-item');
const menuItems = document.querySelectorAll('.menu-item-d');
let subMenuBtnClicked = false;

const closeMenu = function(underlay, button, dropdown) {
	if (underlay.classList.contains('active')) {
		underlay.addEventListener('click', () => {
			underlay.classList.remove('active');
			button.classList.remove('is-active');
			dropdown.classList.remove('visible');
			dropdown.classList.add('invisible');
			// userInfoTop.classList.remove('is-active');
			// notificationButtonOne.classList.remove('is-active');
			// notificationButtonTwo.classList.remove('is-active');
		});
	}
};

notificationButtonOne.addEventListener('click', function () {
	if(!this.classList.contains('is-active')) {
		// console.log(this, '1111111');
		this.classList.add('is-active');
		dropdownListOne.classList.remove('invisible');
		dropdownListOne.classList.add('visible');
		menuRightUnderlayOne.classList.add('active');
		closeMenu(menuRightUnderlayOne, this, dropdownListOne);
	} else {

		// console.log(this, '2222222');
		this.classList.remove('is-active');
		dropdownListOne.classList.remove('visible');
		dropdownListOne.classList.add('invisible');
		menuRightUnderlayOne.classList.remove('active')
	}
});

notificationButtonTwo.addEventListener('click', function () {
	if(!this.classList.contains('is-active')) {

		// console.log(this, '3333');
		this.classList.add('is-active');
		dropdownListTwo.classList.remove('invisible');
		dropdownListTwo.classList.add('visible');
		menuRightUnderlayTwo.classList.add('active');

		closeMenu(menuRightUnderlayTwo, this, dropdownListTwo);
	} else {

		// console.log(this, '44444');
		this.classList.remove('is-active');
		dropdownListTwo.classList.remove('visible');
		dropdownListTwo.classList.add('invisible');
		menuRightUnderlayTwo.classList.remove('active');
	}
});

userInfoTop.addEventListener('click', function() {
	if(!userInfoTop.classList.contains('is-active')) {
		// console.log(this, '5555555');
		userInfoTop.classList.add('is-active');
		userInfoTopOuter.classList.add('show');
		dropdownInfo.classList.remove('invisible');
		dropdownInfo.classList.add('visible');

		menuRightUnderlayThree.classList.add('active');
		closeMenu(menuRightUnderlayThree, this, dropdownInfo);
	} else {
		// console.log(this, '666666');
		this.classList.remove('is-active');
		userInfoTopOuter.classList.remove('show');
		dropdownInfo.classList.remove('visible');
		dropdownInfo.classList.add('invisible');

		menuRightUnderlayThree.classList.remove('active');
	}
});


// Adds class "is-active" to the clicked menu item left purple sidebar
menuItems.forEach(menuItem => {
	menuItem.addEventListener('click', () => {
		menuItems.forEach(menuItem => {
			menuItem.classList.remove('is-active');
		});

		if (menuItem.classList.contains('is-active')) {
			menuItem.classList.remove('is-active');
		} else {
			menuItem.classList.add('is-active');
		}
	});
});


// Adds class "is-active" to the clicked sub-menu item in top fixed panel

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



// Open menu btn
openMenuMobileBtn.addEventListener('click', () => {
	if (!leftSideMenuContainer.classList.contains('is-active')) {
		leftSideMenuContainer.classList.add('is-active');
		menuLeftUnderlay.classList.add('is-active');
	} else {
		leftSideMenuContainer.classList.remove('is-active');
		menuLeftUnderlay.classList.remove('is-active');
	}
});

menuLeftUnderlay.addEventListener('click', () => {
	leftSideMenuContainer.classList.remove('is-active');
	menuLeftUnderlay.classList.remove('is-active');
});
