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



// let windowHeight = $(window).height();
let tableRowList = document.querySelector('.table-row-list');
// let leadsList = document.querySelector('.leads-list');
// let leadsListHeight = leadsList.offsetHeight;
// let tableRowListHeight = tableRowList.scrollHeight;
// let pageBottomPosition = tableRowListHeight - 92 - 60 - 30;
// console.log("pageBottomPosition1", pageBottomPosition);
// console.log("leadsListHeight", leadsListHeight);
// const statusBarCol = document.querySelector('.status-bar-col');
const leadsListCol = document.querySelector('.leads-list-col');
let statusBarHeight = document.querySelector('.status-bar');
const header = document.querySelector('.fixed-top-panel-d');
const headerHeight = header.clientHeight;
const search = document.querySelector('.search');
const searchHeight = search.clientHeight;

document.addEventListener('scroll', () => {
	let scroll = $(document).scrollTop();
	let leftContentHeight = statusBarCol.innerHeight;
	let rightContentHeight = leadsListCol.innerHeight;
	console.log('true or false', leftContentHeight < rightContentHeight);

	const contentHeight = tableRowList.clientHeight - window.innerHeight + headerHeight + searchHeight + 40;

	if(scroll > contentHeight) {
		console.log(contentHeight, scroll);
		// tableRowList.classList.add('fixed-position');
		if(!statusBarCol.classList.contains('filter-opened')) {
			return;
		} else {
			tableRowList.classList.add('fixed-position');
		}

	}
	else {
		console.log(2);
		tableRowList.classList.remove('fixed-position');
	}

	// console.log(
	// 	"=>",
	// 	scroll,
	// 	tableRowList.clientHeight,
	// 	window.innerHeight,
	// 	tableRowList.clientHeight - window.innerHeight + headerHeight + searchHeight + 40
	// );
});



