$(document).ready(function(){

// HEADER HIDE ACTION
$(document).scroll(function(){
var Top = $(document).scrollTop();
if (Top > 1) {
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

// CONTENT SIDEBAR TOGGLE ACTION
$("#content").click(function(){
	$(".SideBar").toggle();
});

//CONTENT SIDEBARS BLUR EVENT ACTION	
$("#content").blur(function() {
	if(window.innerWidth < 992) {
		$(".SideBar").toggle();
	}
});
	$("#content").click(function () {
    	$(event.target).focus();
  	});
// Action DONE !!



});