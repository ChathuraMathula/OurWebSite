$(document).ready(function(){

	// SWITCH LANGUAGE
	$(".lang").click(function(){
		if($(".sinhala").css("display") == "none") {
			$(".english").hide();
			$(".sinhala").show();
			$(".showLang").text("English");
		} else if($(".english").css("display") == "none") {
			$(".sinhala").hide();
			$(".english").show();
			$(".showLang").text("සිංහල");
		}
	});

	// FIX TOPIC BAR TO THE TOP
	$(document).scroll(function(){
		if ($(document).scrollTop() > 75) {
			$("#TopicBar").css("position", "fixed");
			$("#mainContent").css("padding-top", 45);
		} else {
			$("#TopicBar").css("position", "relative");
			$("#mainContent").css("padding-top", 0);
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
	$("#mainContent").click(function(){
		$(".w3-sidebar").hide();
	});
	$(document).scroll(function(){
		$(".w3-sidebar").hide();
	});	


	// DARK MODE BUTTON #446f6f
	$("#dark_mode").click(function(){
		$("#mainContent").css("background-color", "#619e9e");
		$("#mainContent").css("color", "black");
		$(".DARK").css("background-color", "#304f4f").css("color", "white");
		$("#topicName").css("border-bottom", "1px solid black");
		$("#main").css("border-right", "1px solid black");
		$("#leftSideBar2").css("background-color", "#a3a3c2").css("color", "black");
		$("#HeaderBar").css("background-color", "#619e9e").css("color", "#eff5f5");
		$("#logo-main").css("background-color", "#304f4f");
	});

	// Light MODE BUTTON #809fff
	$("#light_mode").click(function(){
		$("#mainContent").css("background-color", "#eff5f5");
		$("#mainContent").css("color", "black");
		$(".DARK").css("background-color", "#809fff").css("color", "black");
		$("#topicName").css("border-bottom", "1px solid #d9d9d9");
		$("#main").css("border-right", "1px solid #d9d9d9");
		$("#leftSideBar2").css("background-color", "#c2d6d6").css("color", "black");
		$("#HeaderBar").css("background-color", "#eff5f5").css("color", "#809fff");
		$("#logo-main").css("background-color", "#809fff");
	});
});