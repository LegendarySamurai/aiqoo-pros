// Add portfolio page popovers
$('#popover-one').popover({
	trigger: 'hover',
	placement: 'top'
});

$('#popover-two').popover({
	trigger: 'hover',
	placement: 'left'
});

$('#popover-three').popover({
	trigger: 'hover',
	placement: 'left'
});



// EOL: Alert popover (Leads list page)

// // Atempt dropdown (Leads list page)
// const button = document.querySelector('#atempts-button');
// const tooltip = document.querySelector('#atempts-tooltip');
//
// let popperInstance = null;
//
// function create() {
// 	popperInstance = Popper.createPopper(button, tooltip, {
// 		modifiers: [
// 			{
// 				name: 'offset',
// 				options: {
// 					offset: [0, 2],
// 				},
// 			},
// 		],
// 	});
// }
//
// function destroy() {
// 	if (popperInstance) {
// 		popperInstance.destroy();
// 		popperInstance = null;
// 	}
// }
//
// function show() {
// 	tooltip.setAttribute('data-show', '');
// 	create();
// }
//
// function hide() {
// 	tooltip.removeAttribute('data-show');
// 	destroy();
// }
//
// const showEvents = ['mouseenter', 'focus'];
// const hideEvents = ['mouseleave', 'blur'];
//
// showEvents.forEach(event => {
// 	button.addEventListener(event, show);
// });
//
// hideEvents.forEach(event => {
// 	button.addEventListener(event, hide);
// });

// EOL: Atempt dropdown (Leads list page)
