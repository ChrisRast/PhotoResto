// localisation
$('#photo').on('foundPosition', function (event, coordPosition) {
    var lat = coordPosition["lat"];
    var lng = coordPosition["long"];
    
    // met les données lat et lng dans des div class=lat & class=lng -> div à créer dans html
    var div = $("<div/>");
    div.data("lat", lat);
    div.data("long", lng);
    div.appendTo("#map");
    console.log("div remplis");
		            
    //Trigger la fin du processus de geolocalisation
    $(this).trigger('endPosition');
});
  
 
// quand on clique sur la carte
$("#map").onclick(function (){
    // Avec variable lat et lng
    var src = "http://maps.google.com/staticmap?center=" + div.data("lat") + "," + div.data("long") + "&zoom=10&size=500x400&sensor=false&key=ABQIAAAA1nu4VMtb7TfHd-Dxiy9HmxRi_j0U6kJrkFvY4-OX2XYmEAa76BS_R3kzv5sXG5MMtQXVf5ySWN6_FQ";
    // Go on
    $("#map img").attr('src', src);
});