$(document).ready(function(){


// var SideBarHeight = $(".SideBar").offsetHeight;
// $(".SideBarContents").css("height", offsetHeight - 120);


// (function() {
// 	var sideHeight = $(".SideBar").css("height");
// 	$(".SideBarContents").css("height", sideHeight-120);
// })();


	$(document).scroll(function(){
	var Top = $(document).scrollTop();
	if (Top > 5) {
		$(".Header").hide();
		$(".TopicBar").css("top", 0);
		$(".SideBarContents").css("top", 45);
		$(".SideBar").css("padding-top", 45);
	} else {
		$(".TopicBar").css("top", 75);
		$(".Header").show();
		$(".SideBarContents").css("top", 120);
		$(".SideBar").css("padding-top", 120);
	}
});

	$("#content").click(function(){
		$(".SideBar").toggle();
	});




});