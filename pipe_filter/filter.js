$(document).ready(function () {
	$(".filter").on("click", function (e) {
		e.preventDefault();


		var button = $(this);
		var filter = button.data("filter");

		if (filter === "reset") {
			$(".item").removeClass("active");
		} else {
			$(".item.active").addClass("active");
			$(".item" + "." + filter).toggleClass("active");
		}

	}); 

});


