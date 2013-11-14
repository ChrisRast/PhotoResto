document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {

	$('.app').on('vclick', '#getPicture', getPhoto);
	$('#geolocation').on('foundPhoto', function (event, photoB64) {
		var img = $('<img>');
		img.attr('src', 'data:image/jpeg;base64,' + photoB64).addClass('smallPic');
		$(this).append('Voici votre image: ').append(img);
		$(this).trigger('endPhoto');
	})
	$('#geolocation').on('endPhoto', getPosition);
	$('#geolocation').on('foundPosition', function (event, coordPosition) {
		var lat = coordPosition['lat'];
		var long = coordPosition['long'];
		$(this).append('Voici votre position: ' + lat + ', ' + long).trigger('endPosition');
	});

}