function gatherInfosResto() {
	var restoName = $('#name').val();
	var restoType = $('#typeInfo option:selected').val();
	createNodeResto(restoName, restoType);
}

var localhost = 'THJSTR:8080/content/resto';

function createNodeResto(restoName, restoType) {
	var request = $.ajax(localhost + '/*', {
		type: 'POST',
		data: {
			'created': none,
			'title': restoName,
			'restoType': restoType,
		},
		beforeSend: function (xhr) {
			xhr.setRequestHeader("Authorization", "Basic " + btoa("admin:admin"));
		}
	});
	request.done(createNodes(restoName));
	request.fail(alert('CreateNodeResto FAIL!'))
}

function createNodes(restoName) {
	var photoB64 = $('#photo img').data('photoB64');
	var restoGrade = $('#mark option:selected').val();
	var restoComment = $('#comment').text();
	var nodeName = restoName;
	createNodePhoto(photoB64, nodeName)
}

//FUCK
function createNodePhoto(photoB64, nodeName) {
	var request = $.ajax(localhost + '/'+, {
		type: 'POST',
		data: {
			'created': none,
						 'photoB64'
		},
		beforeSend: function (xhr) {
			xhr.setRequestHeader("Authorization", "Basic " + btoa("admin:admin"));
		}
	});
	request.done(createNodes);
	request.fail(alert('CreateNodeResto FAIL!'))
}

function createNodeGrade() {

}

function createNodeComment() {

}