document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
	$('.app').on('vclick', '#getPosition', getPosition);
	$('.app').on('vclick', '#getPicture', getPhoto);
	//	$('#getPicture').on('vclick', getPhoto);
	//	$('#getPosition').on('vclick', getPosition);
}