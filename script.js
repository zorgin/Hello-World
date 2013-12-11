$(document).ready();
    var x = $("#x");
    var y = $("#y");
$('form').onClick(
function calc(x, y) {
    if (this.isNaN) {
        $("#answer").html("<p>Please follow instructions.</p>");
    } else {
        $("#answer").html(x + " multiplied by " + y + "equals" + (x * y) + "!");
    }
});