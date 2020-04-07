// onClick opens .sidebar-menu-outer. Created by Igor 14.02.2020

function openSideBar() {
	console.log('added');
	$(".sidebar-overlay").attr("navIsOpen", "true");
	$(".main-wrapper-inner").addClass("active");
}

function closeSideBar() {
	$(".sidebar-overlay")[0].style.display = "none";
	$(".main-wrapper-inner").css("z-index", "");
	$(".main-wrapper-inner").removeClass("active");
	$(".sidebar-overlay").attr("navIsOpen", "false");
}

// Nav menu header
// const navMenuHeader = document.querySelector('.wrapper-c .nav-menu');
// const navMenuItems = document.querySelectorAll(".wrapper-c .nav-menu .nav-menu-item");
// const navSubMenu = document.querySelector(".wrapper-c .nav-sub-menu");
// const mainRow = document.querySelector('#main-row');
// let subMenuIsVisible = false;
// console.log('=>', navMenuHeader);

// navMenuItems.forEach(item => {
// 	item.addEventListener('mouseover', function() {
		// // console.log('=> Worked');
		// navSubMenu.classList.remove('is-hidden');
		// navSubMenu.classList.add('is-active');
		// mainRow.classList.add('nav-bar-is-opened');
		// subMenuIsVisible = true;
	// });
	// item.addEventListener('mouseout', function() {
		// console.log('=> Worked');
		// navSubMenu.classList.add('is-hidden');
		// navSubMenu.classList.remove('is-active');
		// mainRow.classList.remove('nav-bar-is-opened');
		// subMenuIsVisible = false;
// 	});
// });



// EOL: Igor


