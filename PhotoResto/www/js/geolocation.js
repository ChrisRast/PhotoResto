//Récupère la position et passe l'objet dans la fonction de succès
function getPosition() {
	var options = {
		maximumAge: 10000,
		enableHighAccuracy: false
	};
	navigator.geolocation.getCurrentPosition(
		onPositionSuccess, onPositionError, options
	);
}

// Display `Position` properties from the geolocation
//
//Récupère seulement latitude et longitude
function onPositionSuccess(position) {
	var coordPosition = new Array();
	coordPosition["lat"] = position.coords.latitude;
	coordPosition["long"] = position.coords.longitude;
	// passe la position dans l'event afin qu'elle soit récupérée ailleurs
	$('#photo').trigger('foundPosition', [coordPosition]);
}

// Show an alert if there is a problem getting the geolocation
//
function onPositionError(error) {
	alert('code: ' + error.code + '\n' +
		'message: ' + error.message + '\n');
}