$(document).ready(function(){
	var rowLength = 45;
	var containerSize = $('#sketch').innerHeight();

	console.log(containerSize);
	gridBuilder(rowLength, containerSize);
	paint();

});

function gridBuilder(pixel, containerSize){
	var cells = pixel * pixel;
	var pixelSize = containerSize / pixel ;
	for(var i = 0; i < cells; i++){
		$('#sketch').append('<div class="pixel"></div>');
	}

	$('.pixel').css({"height": pixelSize + "px", "width": pixelSize + "px"});

};

function paint(){
	$('.pixel').mouseenter(function(){
		$(this).css("background-color","black");
	});
};
