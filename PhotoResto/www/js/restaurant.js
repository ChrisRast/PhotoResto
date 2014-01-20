function searchResto() {
	var typeChoix = $('#typeList option:selected').val();
	var distanceChoix = $('#distance option:selected').val();
	if (typeChoix === '' || distanceChoix === '') {
		alert('Veuillez faire vos choix');
	} else {
		var arrayResto = new Array();
		//On devrait normalement récuper les informations sur sling, 
		//mais on narrive pas à s'y connecter, on a donc décidé de passer
		//par des informations en dur pour simuler la connexion
		//Mais même là je n'arrive pas à récupérer les infos...
		
		//Récupère la fiche des restaurant en ajax 
		$.get('restaurants.html', function (html) {
			// parcourir les restaurants 
			$('.resto', html).each(function (i, e) {
				//récupère le typeResto de restaurant étant parcouru
				var typeResto = $('.restoType', e).data();
				var distanceResto = $('.restoDistance', e).data();
				alert(typeResto + ' & ' + distanceResto)
			});
		});
	}
}