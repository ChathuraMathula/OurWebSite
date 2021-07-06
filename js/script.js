$(document).ready(function(){

	// FIX TOPIC BAR TO THE TOP
	$(document).scroll(function(){
		if ($(document).scrollTop() > 75) {
			$("#TopicBar").css("position", "fixed");
			$(".w3-main").css("padding-top", 45);
		} else {
			$("#TopicBar").css("position", "relative");
			$(".w3-main").css("padding-top", 0);
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
	$(document).scroll(function(){
		$(".w3-sidebar").hide();
	});	


	// DARK MODE BUTTON #446f6f
	$("#dark_mode").click(function(){
		$(".w3-main").css("background-color", "#619e9e");
		$(".w3-main").css("color", "black");
		$(".DARK").css("background-color", "#304f4f").css("color", "white");
		$("#topicName").css("border-bottom", "1px solid black");
		$("#main").css("border-right", "1px solid black");
		$("#leftSideBar2").css("background-color", "#a3a3c2").css("color", "black");
	});

	// Light MODE BUTTON #809fff
	$("#light_mode").click(function(){
		$(".w3-main").css("background-color", "#eff5f5");
		$(".w3-main").css("color", "black");
		$(".DARK").css("background-color", "#809fff").css("color", "black");
		$("#topicName").css("border-bottom", "1px solid #d9d9d9");
		$("#main").css("border-right", "1px solid #d9d9d9");
		$("#leftSideBar2").css("background-color", "#c2d6d6").css("color", "black");
	});
});