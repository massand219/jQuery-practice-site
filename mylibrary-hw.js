// jQuery cheat sheet
$(document).ready(function(){
	//fadeIn
	$("p").fadeIn(5000);
	//fadeOut
	$("h1").fadeOut(6000);
	//slideUp
	$("h2").slideUp(8000);
	//Animating CSS:
	var animateMenu = function(){   
		$(".Kanye").animate( {opacity: .5}, 7000 ) 
	} 
	$(".Kanye").show(animateMenu)

	$(".bleh").animate( 
	{opacity: 0.25, width: "70%"}, 4000 );
	//click
	$("h1").click(
		function(){
			alert('you clicked me!');
		}
		);
	// //callbacks:
	// var bleeBlue = function(){
	// 	alert("empire state");
	// }
	// function jayZ(cripDoe){
	// 	console.log(4+4);
	// 	cripDoe();
	// }

	// jayZ(bleeBlue);





})
