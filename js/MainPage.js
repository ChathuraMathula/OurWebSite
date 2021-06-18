$(document).ready(function () {
//$Main.SHOW_Loading("#MAIN_DIV");
$("#Differentiation").click(
		function() {
			//$Main.SHOW_Loading("#MAIN_DIV");
			
			$("#MAIN_DIV").fadeIn("slow",
				function () {
					//$("#MAIN_DIV").css({"width": $Main.d_Width, "height": Main.d_Height});
					$("#MAIN_DIV").load($mainURLs.page1).hide().fadeIn(2000);
					$("#myHeader").load($mainURLs.HeaderURL).hide(
						function() {
							$("#myHeader").slideDown("slow");
						}
					);
				
					$("#myFooter").load($mainURLs.FooterURL).hide(
						function() {
							$("#myFooter").slideUp("slow");
						}
					);

			});
		});

});


