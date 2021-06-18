$(document).ready(function() {
  $("#navbarToggle").blur(function (event) {
  	console.log();
    var screenWidth = window.innerWidth;
    if (screenWidth < 992) {
      $("#navbarSupportedContent").collapse('hide');
    }
  });

  $("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });
});

// Global objec CM
(function (global) {

var Main = {};
var mainURLs = {};

var Intro_to_diff_MAIN = "/Differentiation/Introduction_to_differentiation/mainContent_page01.html";
var Def_of_func_URL = "/Differentiation/Introduction_to_differentiation/differentiation_Eng_pg1_part1.html";
var Lim_of_func_URL = "/Differentiation/Introduction_to_differentiation/differentiation_Eng_pg1_part2.html";
var Diff_of_funcURL = "/Differentiation/Introduction_to_differentiation/differentiation_Eng_pg1_part3.html";
var HeaderURL = "/Header.html";

var loadAndPutInHTML = function(url, targetSelector) {
	showLoading(targetSelector);
	//$(targetSelector).addClass("visually-hidden");
	$(targetSelector).load(
		url,

		function(responseTxt, statusTxt, xhr) {
      if(statusTxt == "success")
        $(targetSelector).fadeIn();
				console.log(statusTxt);
				// $(targetSelector).fadeIn("slow")
			});

};

var showLoading = function (selecter) {
	var html = '<div class="spinner-grow" style="width: 3rem; height: 3rem;" role="status">'
	html += '<span class="visually-hidden">Loading...</span>'
	html += '</div>'
	$(selecter).innerHTML = html;
}

$(document).ready(function() {

	// $("#Differentiation").click( function () {
	// 	$("#mainCONTENT").load(Intro_to_diff_MAIN,
	// 			function () {

	// 				$("#mainCONTENT").fadeIn(1000);
	// 			}
	// 		);
	// });
	

	$("#Differentiation").click( function () {
		$("#myHeader").load(HeaderURL,
				function () {
					$("#Differentiation").fadeOut(1000,
							function() {
								$("nav").slideDown("slow");
							}
						);
					
				}
			);
	});

 });


global.$Diff01 = Diff01;

})(window);


