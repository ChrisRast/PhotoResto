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
	request.done(createNodePhoto(restoName));
	request.fail(alert('CreateNodeResto FAIL!'))
}


//FUCK
function createNodePhoto(photoB64, nodeName) {
	var photoB64 = $('#photo img').data('photoB64');
	var request = $.ajax(localhost + '/images/' + nodeName, {
		type: 'POST',
		data: {
			'created': none,
			':base64': photoB64,
			'title': nodeName,
			'restoName': nodeName
		},
		beforeSend: function (xhr) {
			xhr.setRequestHeader("Authorization", "Basic " + btoa("admin:admin"));
		}
	});
	request.done(createNodeGrade);
	request.fail(alert('CreateNodeResto FAIL!'))
}

function createNodeGrade() {
	var restoGrade = $('#mark option:selected').val();
	//TODO
}

function createNodeComment() {
	var restoComment = $('#comment').text();
	//TODO
}