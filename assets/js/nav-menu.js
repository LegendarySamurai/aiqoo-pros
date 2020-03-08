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


let subMenuIsVisible = false;
const navMenu = document.querySelector(".nav-menu");
const navMenuItems = document.querySelectorAll(".nav-menu-item");
const navSubMenu = document.querySelector(".nav-sub-menu");

console.log('=>', typeof navMenuItems);

navMenuItems.forEach(item => {
	console.log('ITEM', item);
	if (!subMenuIsVisible) {
		item.addEventListener('mouseover', function() {
			console.log('Hovered!');
			navSubMenu.classList.remove('is-hidden');
			navSubMenu.classList.add('is-active');
			subMenuIsVisible = true;
		});
	} else if (subMenuIsVisible) {
		item.addEventListener('mouseout', function() {
			console.log('Unhovered!');
			navSubMenu.classList.remove('is-active');
			navSubMenu.classList.add('is-hidden');
			subMenuIsVisible = false;
		});
	}
});
//
// navMenuItem
//
// navMenuItem

// EOL: Igor


