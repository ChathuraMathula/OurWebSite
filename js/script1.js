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
//var urlObj = {}; // url object which has URLs to the pages to be loaded

var MainPage = "/MainPage.html";
var page1 = "/Differentiation/Introduction_to_differentiation/mainContent_page01.html";
var page1_p1 = "/Differentiation/Introduction_to_differentiation/differentiation_Eng_pg1_part1.html";
var page1_p2 = "/Differentiation/Introduction_to_differentiation/differentiation_Eng_pg1_part2.html";
var page1_p3 = "/Differentiation/Introduction_to_differentiation/differentiation_Eng_pg1_part3.html";
var page2 = "/Differentiation/Introduction_to_differentiation/mainContent_page01.html";

// Convenience function for inserting innerHTML for 'targetSelecter'
var insertHtml = function (targetSelecter, html) {
  var targetElem = document.querySelector(targetSelecter);
  targetElem.innerHTML = html;
};

// Show loading icon inside element identified by 'targetSelecter'.
var showLoading = function (targetSelecter) {
  var html = '<div id="LOADING" class="position-relative">';
  html += '<div class="position-absolute top-50 start-50 translate-middle">';
  html += '<div class="spinner-grow" style="width: 3rem; height: 3rem;" role="status">';
  html += '<span class="visually-hidden">Loading...</span></div></div></div>';
  insertHtml(targetSelecter, html);
};

var loadMathJX = function() {
	$("head").load("/MATHJAX.html");
};

// this function sets the button to active
var switchContentToActive = function(button) {
	$(".removeCLS").removeClass("active");
	$(button).addClass("active");
};

// This function Loads and place the data from an invoking URL
// to the targetSelecter when the button pressed

var clickAndLoad = function(button, targetSelecter, invokingURL) {
	showLoading(targetSelecter);
	$(targetSelecter).load(invokingURL, 
		function() {
			switchContentToActive(button);
			$(".offcanvas").collapse("hide");
			$(targetSelecter).hide().fadeIn("slow",
				function() {
					MathJax.typesetPromise();
				});
		});
};

var clickAndPlace = function(button, targetSelecter, invokingURL){
	showLoading(targetSelecter);
	$(targetSelecter).load(invokingURL, 
		function() {
			$(targetSelecter).hide().fadeIn("slow",
				function() {
					MathJax.typesetPromise();
				});
		});
};

$(document).ready(function() {

// this function invokes page1 (01. Introduction to differentiation)
Mobj.clickAndLoad_Page_1 = function() {
	clickAndLoad(".c1", "#mainContent", page1);
}
// // this function get page1 part 1 (Definition of a function)
Mobj.clickAndPlace_Page_1_1 = function() {
	clickAndPlace("subcontent1B","#subcontent1", page1_p1);
} 
// // this function get page1 part 1 (Definition of a function)
Mobj.clickAndPlace_Page_1_2 = function() {
	clickAndPlace("subcontent2B","#subcontent2", page1_p2);
} 
// // this function get page1 part 1 (Definition of a function)
Mobj.clickAndPlace_Page_1_3 = function() {
	clickAndPlace("subcontent3B","#subcontent3", page1_p3);
} 


// this function invokes page2 (02. Rules of Differentiation)
Mobj.clickAndLoad_Page_2 = function() {
	clickAndLoad(".c2", "#mainContent", page2);
}	

// this function invokes page3 (03. Trigonometric Functions)
Mobj.clickAndLoad_Page_3 = function() {
	clickAndLoad(".c3", "#mainContent", page3);
}	

// this function invokes page4 (04. Inverse Trigonometric Functions)
Mobj.clickAndLoad_Page_4 = function() {
	clickAndLoad(".c4", "#mainContent", page4);
}	

// this function invokes page5 (05. Exponential function)
Mobj.clickAndLoad_Page_5 = function() {
	clickAndLoad(".c5", "#mainContent", page5);
}	

// this function invokes page6 (06. Logarithm Functions)
Mobj.clickAndLoad_Page_6 = function() {
	clickAndLoad(".c6", "#mainContent", page6);
}	

// this function invokes page7 (07. Product Rule)
Mobj.clickAndLoad_Page_7 = function() {
	clickAndLoad(".c7", "#mainContent", page7);
}	

// this function invokes page8 (08. Quotient Rule)
Mobj.clickAndLoad_Page_8 = function() {
	clickAndLoad(".c8", "#mainContent", page8);
}	

// this function invokes page9 (09. Chain Rule)
Mobj.clickAndLoad_Page_9 = function() {
	clickAndLoad(".c9", "#mainContent", page9);
}	

// this function invokes page10 (10. Nth order derivative)
Mobj.clickAndLoad_Page_10 = function() {
	clickAndLoad(".c10", "#mainContent", page10);
}	

// this function invokes page11 (11. Implicit Differentiation)
Mobj.clickAndLoad_Page_11 = function() {
	clickAndLoad(".c11", "#mainContent", page11);
}	

// this function invokes page12 (12. Parametric Differentiation)
Mobj.clickAndLoad_Page_12 = function() {
	clickAndLoad(".c12", "#mainContent", page12);
}	

// this function invokes page13 (13. Applications of Differentiation)
Mobj.clickAndLoad_Page_13 = function() {
	clickAndLoad(".c13", "#mainContent", page13);
}	

// this function invokes page14 (Self-Study Exercises)
Mobj.clickAndLoad_Page_14 = function() {
	clickAndLoad(".c14", "#mainContent", page14);
}	

// this function invokes page15 ()
Mobj.clickAndLoad_Page_15 = function() {
	clickAndLoad(".c15", "#mainContent", page15);
}	


});



      
            
          
            
          
global.$Mobj = Mobj

})(window);