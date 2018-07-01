 var color, height, width;
 
 $("#sizePicker").submit(function(event) {
 event.preventDefault();
  height = $("#inputHeight").val();
  width = $("#inputWidth").val();
  makeGrid(height, width);
});

function makeGrid(){
	$("tr").remove();
	// Your code goes here!
 	for (var a=1; a<=height; a++) {
		$("#pixelCanvas").append("<tr></tr>");
		for (var b=1; b<=width; b++) {
			$("tr").last().append("<td></td>");
 		}
	}
}

$("table").on("click", "td", function() {
	color = $("#colorPicker").val();
	$(this).css("background-color",  color);
})