$(function () { 

  $("#navbarToggle").blur(function () {
    var screenWidth = window.innerWidth;
    if (screenWidth < 992) {
      $("#navbarSupportedContent").collapse('hide');
    }
  });


  $("#navbarToggle").click(function () {
    $(event.target).focus();
  });
});

(function (global) {


var Main = {}; //Main object
var mainURLs = {}; //URLs object

mainURLs.MainPage = "/MainPage.html";
mainURLs.page1 = "/Differentiation/Introduction_to_differentiation/mainContent_page01.html";
mainURLs.page1_p1 = "/Differentiation/Introduction_to_differentiation/differentiation_Eng_pg1_part1.html";
mainURLs.page1_p2 = "/Differentiation/Introduction_to_differentiation/differentiation_Eng_pg1_part2.html";
mainURLs.page1_p3 = "/Differentiation/Introduction_to_differentiation/differentiation_Eng_pg1_part3.html";
mainURLs.HeaderURL = "/Header.html";
mainURLs.FooterURL = "/Footer.html";

Main.d_Width = window.innerWidth; //device width
Main.d_Height = window.innerHeight; //device height

Main.SHOW_Loading = function(targetSelector) {
    var showLoading = '<div class="d-flex justify-content-center">';
        showLoading += '<div class="spinner-grow" role="status">';
        showLoading += '<span class="visually-hidden">Loading...</span>';
        showLoading += '</div></div>';
        $(targetSelector).load(showLoading);
}

// var SHOW_mainCatButtons = function(targetSelector) {
//     var html = 
//     console.log(html);
// }

$(document).ready(function() {


(function (targetSelector) {
    $(targetSelector).css({"width": Main.d_Width, "height": Main.d_Height});
    

})("#MAIN_DIV");


// $("#Differentiation").click( function () {
// $("#MYDIV").fadeIn(1000);
// });

$("#MAIN_DIV").load(
    "/MainPage.html",
    function(responseTxt, statusTxt, xhr){
    if(statusTxt == "success") {
        (function () {
            $("#MYDIV").fadeIn(1000);
        });
    }
});

    $("#Differentiation").click( function () {
     $("#MAIN_CONTENT").load(
        mainURLs.page1,
             function () {
                  $("#MAIN_CONTENT").fadeIn(1000);
             }
         );
    });


});


global.$mainURLs = mainURLs;
global.$Main = Main;

})(window);

