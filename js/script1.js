$(document).ready(function(){

//Function to handle header navigation bar's blur event
	(function(){
		$("#navbarToggle").blur(function() {
			if(window.innerWidth < 992) {
				$("#navbarSupportedContent").collapse("hide");
			}
		});
	})();

	$("#navbarToggle").click(function () {
    	$(event.target).focus();
  	});
// Action DONE !!

});

(function (global) { 

var Mobj = {}; // Main object created (defined onClick functions in it)
var urlObj = {}; // url object which has URLs to the pages to be loaded

urlObj.MainPage = "/MainPage.html";
urlObj.page1 = "/Differentiation/Introduction_to_differentiation/mainContent_page01.html";
urlObj.page1_p1 = "/Differentiation/Introduction_to_differentiation/differentiation_Eng_pg1_part1.html";
urlObj.page1_p2 = "/Differentiation/Introduction_to_differentiation/differentiation_Eng_pg1_part2.html";
urlObj.page1_p3 = "/Differentiation/Introduction_to_differentiation/differentiation_Eng_pg1_part3.html";

// Convenience function for inserting innerHTML for 'select'
var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

// Show loading icon inside element identified by 'selector'.
var showLoading = function (selector) {
  var html = '<div id="LOADING" class="position-relative">';
  html += '<div class="position-absolute top-50 start-50 translate-middle">';
  html += '<div class="spinner-grow" style="width: 3rem; height: 3rem;" role="status">';
  html += '<span class="visually-hidden">Loading...</span></div></div></div>';
  insertHtml(selector, html);
};

$(document).ready(function() {

	
});

      
            
          
            
          


})(window);