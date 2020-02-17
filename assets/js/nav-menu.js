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

// EOL: Igor
