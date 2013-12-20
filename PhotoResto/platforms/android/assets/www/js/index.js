document.addEventListener("deviceready", onDeviceReady, false);
//Dès que 
function onDeviceReady() {
	//navigator.splashscreen.hide() Not Working
	
	$('.page').on('vclick', '.getPicture', getPhoto);
	//Attache l'image reçue en base64, l'affiche en image normale et la stocke dans le html
	$('#photo').on('foundPhoto', function (event, photoB64) {
		var img = $('<img>');
		img.attr('src', 'data:image/jpeg;base64,' + photoB64)
			.addClass('smallPic')
			.data('photoB64', photoB64);
		//Trigger l'event endPhoto signifiant la fin du processus de capture de photo
		$(this).empty().append(img).trigger('endPhoto');
	})
	//A la fin de la capture de la photo on récupère la position
	$('#photo').on('endPhoto', getPosition);
	//Une fois la position trouvée on fait ce qu'on veut avec, l'insérer dans le html par exemple (.data())
	$('#photo').on('foundPosition', function (event, coordPosition) {
		//Que faire avec la position reçue ?
		//...
		
		//Trigger la fin du processus de geolocalisation
		$(this).trigger('endPosition');
	});
	//$('.page').on('vclick', '.getPosition', getPosition); Obsolete

	//Annulation et retour à l'accueil
	$('.goHome').on('vclick', function () {
		$('.photo, textarea, input[type="text"], #map').each(function () {
			$(this).val('');
			$(this).empty();
		})
		window.history.back();
	})

}
