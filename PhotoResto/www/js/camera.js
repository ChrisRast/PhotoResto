function getPhoto() {
	var options = {
		quality: 80,
		destinationType: Camera.DestinationType.DATA_URL,
		sourceType: Camera.PictureSourceType.CAMERA,
		encodingType: Camera.EncodingType.JPEG,
		saveToPhotoAlbum: true
	};
	navigator.camera.getPicture(onPhotoSuccess, onPhotoFail, options);

}

function onPhotoSuccess(imageData) {
	var photo = imageData;
}

function onPhotoFail(message) {
	alert('Failed because: ' + message);
}