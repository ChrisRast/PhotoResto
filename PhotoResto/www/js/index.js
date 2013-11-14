document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
	$('.app').on('vclick', '#getPicture', getPhoto);
}