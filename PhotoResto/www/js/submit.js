var localhost = 'THJSTR:8080/content/resto';

function createNodeResto() {
	var restoName = $('#name').val();
	var restoType = $('#typeInfo option:selected').val();
	var restoGrade = $('#mark option:selected').val();
	alert(restoName + '-' + restoType + '-' + restoGrade)
	var request = $.ajax(localhost + '/*', {
		type: 'POST',
		data: {
			'created': none,
			'title': restoName,
			'restoType': restoType,
			'restoGrade': restoGrade
		},
		beforeSend: function (xhr) {
			xhr.setRequestHeader("Authorization", "Basic " + btoa("admin:admin"));
		}
	});
	request.done(
		//createNodePhoto(restoName)
		alert('CreateNodeResto Success!')
	);
	request.fail(alert('CreateNodeResto FAIL!'));
}


//FUCK
function createNodePhoto(nodeName) {
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
	request.fail(alert('CreateNodePhoto FAIL!'))
}

function createNodeGrade() {
	var restoGrade = $('#mark option:selected').val();
	//TODO
}

function createNodeComment() {
	var restoComment = $('#comment').text();
	//TODO
}