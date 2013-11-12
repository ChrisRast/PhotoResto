$(function () {
	// wait for device API libraries to load
	//
	document.addEventListener("deviceready", onDeviceReady, false);

	var watchID = null;
	// device APIs are available
	//

	function onDeviceReady() {
		$('#getPosition').on('vclick', startWatchPosition);
	}

})


function startWatchPosition() {
	var options = {
		maximumAge: 3000,
		timeout: 5000,
		enableHighAccuracy: true
	};
	navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
	//	watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);

}

// Display `Position` properties from the geolocation
//

function onSuccess(position) {
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

function onError(error) {
	alert('code: ' + error.code + '\n' +
		'message: ' + error.message + '\n');
}
//Must be called to stop watching the position.

function stopWatchPosition() {
	navigator.geolocation.clearWatch(watchID);
}