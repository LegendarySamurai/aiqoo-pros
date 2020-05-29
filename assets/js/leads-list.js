window.toggleList = (e) => {
	// var width = $(window).width();
	if ($(e).hasClass("active")) {
		$(e).hide().removeClass("active");
		return;
	}

	if ($(".toggle-panel").hasClass("active")) {
		$(".toggle-panel").hide().removeClass("active");
		$(e).addClass("active").show();
	}	else {
		$(".toggle-panel").removeClass("active");
		$(e).addClass("active");
		$(e).show();
	}
};

window.addEventListener("resize", myFunction);

function myFunction() {
	let width = $(window).width();
	if (width >= 1300) {
		$(".toggle-panel").show();
	} else {
		$(".activity-list").addClass("active");
	}
}
