function getPhoto() {
	navigator.camera.getPicture(onPhotoSuccess, onPhotoFail, {
		quality: 80,
		destinationType: Camera.DestinationType.DATA_URL,
		sourceType: Camera.PictureSourceType.CAMERA,
		encodingType: Camera.EncodingType.JPEG,
		saveToPhotoAlbum: true
	});

}

function onPhotoSuccess(imageData) {
	$('#photo img').attr('src', "data:image/jpeg;base64," + imageData);
}

function onPhotoFail(message) {
	alert('Failed because: ' + message);
}