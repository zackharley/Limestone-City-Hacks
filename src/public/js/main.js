/*
	Visualize by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

$('.course-wrapper').click(() => {
	console.log('CLICKED');
});

$('#overlay-button').click(() => {
	$('.overlay-wrapper').fadeIn(200);
});

$('#close-overlay').click(() => {
	$('.overlay-wrapper').fadeOut(200);
})

$('#add-assignment').click(() => {
	// $('.table-row').last()
	$('.table-row').last().after(`
		<tr class="table-row">
			<td class="text-cell"><input type="text"></td>
			<td><input class="number-input" type="number"></td>
			<td><input class="number-input" type="number"></td>
		<tr>
	`)
});

$('#delete-assignment').click(() => {
	$('.table-row').last().remove();
});

$('#save-course').click(() => {
	// $.post('http://localhost:8000/grades')
	$.ajax({
		type: 'POST',
		url: 'http://localhost:8000/grades', 
		data: JSON.stringify({
			owner: '10209193989860329',
			name: $('#course-name').val(),
			assignments: $('.table-row').map(row => {
				return {
					name: $('.table-row > td:first-child > input:first-child').val(),
					weight: $('.table-row > td:nth-child(2) > input:first-child').val(),
					grade: $('.table-row > td:nth-child(3) > input:first-child').val()
				}
			}),
			success: (data) => {
				console.log(data);
			}
		}),
		dataType: 'json'
	});
});	

$(function() {

	// Vars.
		var	$window = $(window),
			$body = $('body'),
			$wrapper = $('#wrapper');

	// Breakpoints.
		skel.breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	// Disable animations/transitions until everything's loaded.
		$body.addClass('is-loading');

		$window.on('load', function() {
			$body.removeClass('is-loading');
		});

	// Poptrox.
		$window.on('load', function() {

			$('.thumbnails').poptrox({
				onPopupClose: function() { $body.removeClass('is-covered'); },
				onPopupOpen: function() { $body.addClass('is-covered'); },
				baseZIndex: 10001,
				useBodyOverflow: false,
				usePopupEasyClose: true,
				overlayColor: '#000000',
				overlayOpacity: 0.75,
				popupLoaderText: '',
				fadeSpeed: 500,
				usePopupDefaultStyling: false,
				windowMargin: (skel.breakpoint('small').active ? 5 : 50)
			});

		});

});