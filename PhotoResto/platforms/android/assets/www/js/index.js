document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {

	$('.page').on('vclick', '.getPicture', getPhoto);
	$('#photo').on('foundPhoto', function (event, photoB64) {
		var img = $('<img>');
		img.attr('src', 'data:image/jpeg;base64,' + photoB64).addClass('smallPic');
		$(this).empty().append(img).trigger('endPhoto');
	})
	$('#photo').on('foundPosition', function (event, coordPosition) {
		var lat = coordPosition['lat'];
		var long = coordPosition['long'];
		$('#optionPhoto #position').empty().append('Voici votre position: ' + lat + ', ' + long)
		$(this).trigger('endPosition');
	});
	$('#photo').on('endPhoto', getPosition);
	$('.page').on('vclick', '.getPosition', getPosition);
	$('#remplirFiche .cancel').on('vclick', function () {
		$('#photo').empty();
		$('#position').empty();
		window.history.back();
	})


}