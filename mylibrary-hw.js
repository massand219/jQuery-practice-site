// jQuery cheat sheet
$(document).ready(function(){
	//fadeIn
	$("p").fadeIn(5000);
	//fadeOut
	$("h1").fadeOut(6000);
	//slideUp
	$("h2").slideUp(8000);
	//Animating CSS:
	$(".bleh").animate( 
	{opacity: 0.25, width: "70%"}, 4000 );
	//animate with callback:
	var animateMenu = function(){   
		$(".Kanye").animate( {opacity: .5}, 7000 ) 
	} 
	$(".Kanye").show(animateMenu)
	//click
	$("h1").click(
		function(){
			alert('you clicked me!');
		}
		);

})
