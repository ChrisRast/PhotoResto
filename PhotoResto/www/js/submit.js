function createNodeResto() {
	var localhost = 'http://thjstr:8080/content/resto';
	var restoName = $('#name').val();
	var restoType = $('#typeInfo option:selected').val();
	/*------- Code pour simuler un fonctionnement normal ------*/
	var restoGrade = $('#mark option:selected').val();
	var photoB64 = $('#photo img').data('photoB64');
	var restoComment = $('#comment').text();
	$('#photo').on('foundPosition', function (event, coordPosition) {
		var url = "http://maps.googleapis.com/maps/api/staticmap?center=" + coordPosition["lat"] + "," + coordPosition["long"] +"&size=700x425&markers=color:orange%7Clabel:"+restoName+"%7C"+ coordPosition["lat"] + "," + coordPosition["long"]
		$('#restoLoc').children($('a')).attr('href', url).children('iframe').attr('src', url);
	})
	$('#restoName').empty().append(restoName)
	$('#restoType').empty().append(restoType)
	$('#restoGrade').empty().append(restoGrade)
	$('#restoPhoto').children($('img'))
		.attr('src', 'data:image/jpeg;base64,' + photoB64)
		.attr('alt', restoName);
	$('#restoComment').empty().append(restoComment);
	$.mobile.navigate('#sheet');
	
	/*---- code normal ----*/
	/*alert(restoName + '-' + restoType + '-' + restoGrade)
	$.ajax(localhost + '/*', {
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
	}).done(
		function () {
			//createNodePhoto(restoName); 
			alert('CreateNodeResto Success!');
			$.mobile.navigate('#sheet');
		}
	).fail(
		function () {
			alert('CreateNodeResto FAIL!')
		}
	);*/
}



function createNodePhoto(nodeName) {
	var localhost = 'http://thjstr:8080/content/resto';
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