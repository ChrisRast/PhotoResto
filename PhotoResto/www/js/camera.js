//Prend une photo et passe la photo en base64 dans la fonction success
function getPhoto() {
	//Param
	var options = {
		quality: 80,
		destinationType: Camera.DestinationType.DATA_URL,
		sourceType: Camera.PictureSourceType.CAMERA,
		saveToPhotoAlbum: true,
		correctOrientation: false,
		encodingType: Camera.EncodingType.JPEG
	};
	//Exec
	navigator.camera.getPicture(onPhotoSuccess, onPhotoFail, options);

}
// passe la photo en b64 dans l'event afin qu'elle soit récupérée ailleurs
function onPhotoSuccess(imageData) {
	$('#photo').trigger('foundPhoto', [imageData]);
}
//Message d'erreur
function onPhotoFail(message) {
	alert('Failed because: ' + message);
}