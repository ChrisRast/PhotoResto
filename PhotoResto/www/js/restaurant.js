// récupérer les valeurs dans value 
$('.submitSearch').on('click', function () {
	var typeResto = $('#typeList option:selected').val();
	var distanceResto = $('#distance option:selected').val();
	var arrayResto[];
	// parcourir les restaurants 
	$('.resto').each(function () {
		var type = $(this).children('.restoType').data('type');
		if (typeResto == type) {}
	});
});