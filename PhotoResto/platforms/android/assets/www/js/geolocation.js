function getPosition() {
	var options = {
		maximumAge: 3000,
		enableHighAccuracy: false
	};
	navigator.geolocation.getCurrentPosition(
		onPositionSuccess, onPositionError, options
	);
}

// Display `Position` properties from the geolocation
//

function onPositionSuccess(position) {
var coordPosition = new Array();
	coordPosition["lat"] = position.coords.latitude;
	coordPosition["long"] = position.coords.longitude;
	$('#geolocation').trigger('foundPosition', [coordPosition]);
}

// Show an alert if there is a problem getting the geolocation
//
function onPositionError(error) {
	alert('code: ' + error.code + '\n' +
		'message: ' + error.message + '\n');
}