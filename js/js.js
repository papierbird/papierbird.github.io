$('#listofworks')
	.on('show.bs.modal', function (e) {
		$('body').addClass('list-open');
	})
	.on('hide.bs.modal', function (e) {
		$('body').removeClass('list-open');
	});
