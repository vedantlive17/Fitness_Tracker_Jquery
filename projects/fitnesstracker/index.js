$(document).ready(function() {
    if (localStorage.getItem("exercises")) {
        $("#exerciseLog").html(localStorage.getItem("exercises"));
    }

    $("#trackerForm").submit(function(event) {
        event.preventDefault();

        var exerciseName = $("#exerciseName").val();
        var repsCount = $("#repsCount").val();

        if (exerciseName && repsCount) {
            var newEntry = "<li>" + exerciseName + ": " + repsCount + " reps</li>";
            $("#exerciseLog").append(newEntry);

            localStorage.setItem("exercises", $("#exerciseLog").html());

            $("#exerciseName").val('');
            $("#repsCount").val('');
        }
    });
});

$(document).ready(function(){
    $('.slick').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    });
  });
  