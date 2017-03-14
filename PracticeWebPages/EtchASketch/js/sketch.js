$(document).ready(function(){
	rowLength = 45;
	containerSize = $('#sketch').innerHeight();

	gridBuilder();
	paint();

});

function gridBuilder(){
	var cells = rowLength * rowLength;
	var pixelSize = containerSize / rowLength ;
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

function clearWindow(){
	$('.pixel').css("background-color", "white");
};

function changeSize(){
	var newSize = prompt("What new size do you want? (300-600)");
	containerSize = newSize;
	clearWindow();
	$('.pixel').remove();
	$('#sketch').innerHeight(newSize);
	$('#sketch').innerWidth(newSize);
	gridBuilder();
	paint();
};

function changeRes(){
	var newRes = prompt("What new Resolution do you want? (20-70)");
	rowLength = newRes;
	clearWindow();
	$('.pixel').remove();
	gridBuilder();
	paint();
};
