$(document).ready(function() {
	$("#container section h1").click(function(e) {
    	$(this).parents().siblings("section").addClass("hidden" , 1000);
		$(this).parents("section").removeClass("hidden" , 1000);

		e.preventDefault();
	});




});