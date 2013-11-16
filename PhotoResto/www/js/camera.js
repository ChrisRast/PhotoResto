function getPhoto() {
	var options = {
		quality: 100,
		destinationType: Camera.DestinationType.DATA_URL,
		sourceType: Camera.PictureSourceType.CAMERA,
		saveToPhotoAlbum: true,
		correctOrientation: false,
		encodingType: Camera.EncodingType.JPEG
	};
	navigator.camera.getPicture(onPhotoSuccess, onPhotoFail, options);

}

function onPhotoSuccess(imageData) {
	$('#photo').trigger('foundPhoto', [imageData]);
}

function onPhotoFail(message) {
	alert('Failed because: ' + message);
}