$(document).ready(function(){

	// FIX TOPIC BAR TO THE TOP
	$(document).scroll(function(){
		if ($(document).scrollTop() > 75) {
			$("#TopicBar").css("position", "fixed");
		} else {
			$("#TopicBar").css("position", "relative");
		}
	});

	// SET HEIGHT OF THE SIDEBAR FIXED TO TOPIC BAR
	$(document).scroll(function(){
		if ($(document).scrollTop() < 75) {
			$(".w3-sidebar").css("top", 120 - $(document).scrollTop());
		} else {
			$(".w3-sidebar").css("top", 45);
		}
	});	
	$(document).scroll(function(){
		if ($(document).scrollTop() < 75) {
			$("#leftSideBar1").css("padding-top", 120 - $(document).scrollTop());
		} else {
			$("#leftSideBar1").css("padding-top", 45);
		}
	});	

	// SIDE BAR COLLAPSE
	$("#sideButton").click(function(){
		$(".w3-sidebar").toggle();
	});
	$(".w3-main").click(function(){
		$(".w3-sidebar").hide();
	});

});