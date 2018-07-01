$(function() {
    var color, height, width;
    $("#sizePicker").submit(function (event) {
    event.preventDefault();
    height = $("#inputHeight").val();
    width = $("#inputWidth").val(); //make sure your html has the ID inputwidth and not inputWeight
    makeGrid();
    });
    
    function makeGrid() {
    $("tr").remove();
    
    // Your code goes here!
    for (var a=1; a<=height; a++) {
    $("#pixelCanvas").append("<tr>");
    for (var b=1; b<=width; b++) {
     $("tr").last().append("<td></td>");
     }
     $("#pixelCanvas").append("</tr>")
    }
    }
    $("td").click(function() {
     color = $("#colorPicker").val();
    
     if ($(this).attr("style")) {
       $(this).removeAttr("style");
    // removes every box clicked
    
     } else {
       $(this).css("backgroundcolor",  color);
     }
    });
    });