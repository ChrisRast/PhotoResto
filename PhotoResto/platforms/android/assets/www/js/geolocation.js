function getPosition() {
	var options = {
		maximumAge: 3000,
		enableHighAccuracy: false
	};
	navigator.geolocation.getCurrentPosition(onPositionSuccess, onPositionError, options);
}

// Display `Position` properties from the geolocation
//

function onPositionSuccess(position) {
	var div = document.getElementById('geolocation');
	div.innerHTML = '';
	div.innerHTML = 'Latitude: ' + position.coords.latitude + '<br/>' +
		'Longitude: ' + position.coords.longitude + '<br/>' +
		'Altitude: ' + position.coords.altitude + '<br/>' +
		'Accuracy: ' + position.coords.accuracy + '<br/>' +
		'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '<br/>' +
		'Heading: ' + position.coords.heading + '<br/>' +
		'Speed: ' + position.coords.speed + '<br/>';
}

// Show an alert if there is a problem getting the geolocation
//

function onPositionError(error) {
	alert('code: ' + error.code + '\n' +
		'message: ' + error.message + '\n');
}