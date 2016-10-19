$(document).ready(function() {
  $("#blanks form").submit(function() {
    var nameInput = $("input#name").val();
    var dateInput = $("input#date").val();
    var startInput = $("input#start").val();
    var endInput = $("input#end").val();

    $(".name").text(nameInput);
    $(".date").text(dateInput);
    $(".start").text(startInput);
    $(".end").text(endInput);

    $("#appointment").show();

    event.preventDefault();

    $(".appointment-hidden").hide();
  });
});
