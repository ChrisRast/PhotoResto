function getPhoto() {
	navigator.camera.getPicture(onPhotoSuccess, onPhotoFail, {
		quality: 80,
		destinationType: Camera.DestinationType.NATIVE_URI,
		sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
		mediaType: Camera.MediaType.PICTURE
	});

}

function onPhotoSuccess(imageURI) {
	$('#photo').append(imageURI);
}

function onPhotoFail(message) {
	alert('Failed because: ' + message);
}