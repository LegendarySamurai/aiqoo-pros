window.toggleList = (e) => {
	var width = $(window).width();
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

	if (width <= 600) {
		$(".list-outer").addClass("tab-panel");
	} else {
		$(".list-outer").removeClass("tab-panel");
	}
}



let windowHeight = $(window).height();
let tableRowList = document.querySelector('.table-row-list');
let leadsList = document.querySelector('.leads-list');
let leadsListHeight = leadsList.offsetHeight;
let tableRowListHeight = tableRowList.offsetHeight;

window.addEventListener('scroll', () => {
	let pageHeight = windowHeight + 'px';
	// console.log(pageHeight, '=>pageHeight');
	// console.log(tableRowListHeight, '=>tableRowList');
	// console.log(leadsListHeight, '=>leadsListHeight');
	if(windowHeight > tableRowList.innerHeight) {
		console.log('works');
	}
	else {
		console.log('doesnt work');
	}

});



