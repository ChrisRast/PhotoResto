document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
	$('#getPicture').on('vclick', getPicture);
}