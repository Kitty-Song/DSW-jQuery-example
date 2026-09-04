$(document).ready(function() {
	$("#imagetoggler").click(function(){
		$("img").toggle();
	});
	$("h1").click(function() {
		$("p").addClass("bright");
		$("img").addClass("border");
	});
	$("p").click(function() {
		$("p:not(#p1)").addClass("gone");
		
	})
	$("p").mouseleave(function() {
		$("h1").addClass("font");
	})
});
