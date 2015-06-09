$(document).ready(function(){


	//default use case
	var max = 16 ;
	


	$("#button").click(function(){
		//Delete all the div#new
		$("div#new").remove();
		//Clear the background
		$("div#new").css("background-color","white");
		//Create a new grid with the number of square the user want
		gridCreator(prompt("How many square by side do you want?"));
		//Call the hovering function
		hovering();	
		});

	

	//Create the grid 
	function gridCreator(taille){
		
		for (var i=0; i < taille; i++){
			for (var j=0; j < taille ; j++){
			$("#canvas").append("<div id='new' ></div>")
		}};
		$("div#new").width(960/taille);
		$("div#new").height(960/taille);
	};

	//Function for the hovering event
	function hovering(){
	//To make the case become black after hovering
	$("div#new").hover(
	function(){
	//Changing the color of the square
	var color = 'rgb(' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ')';	
	//color = "black";
	$(this).css("background-color", color);

	//Trying to change the opacity but dont work
	//opak = $(this).css("opacity") + 0.1;
	//$(this).css("opacity", opak);
	});
	};


	//Default use #FirstTime
	gridCreator(max);
	hovering();
});

