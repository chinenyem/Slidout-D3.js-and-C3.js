$(document).ready(function(){

	$("#chart_c3").mouseover(function(){
		$("#sub_chartc3").stop().slideDown("slow");
	});
	$("#chart_c3").click(function(){
   		$("#sub_chartc3").slideUp("slow");
  	});

  	$("#chart_d3").mouseover(function(){
  		$("#sub_chartd3").stop().slideDown("slow");
  	})
  	$("#chart_d3").click(function(){
   		$("#sub_chartd3").slideUp("slow");
  	});



  	$("#about").click(function() {
  		
	        event.preventDefault();
	        $('html,body').animate({
	            scrollTop: $("#about_part").offset().top
	        }, "slow");
		});	


  	$("#line_chart").click(function() {
  		
	        event.preventDefault();
	        $('html,body').animate({
	            scrollTop: $("#line_chart_article").offset().top
	        }, "slow");
		});

  	$("#custom_chart").click( function() {
	        event.preventDefault();
	        $('html,body').animate({
	            scrollTop: $("#custom_chart_article").offset().top
	        }, "slow");
		});

  	$("#donut_chart").click( function() {
	        event.preventDefault();
	        $('html,body').animate({
	            scrollTop: $("#donut_chart_article").offset().top
	        }, "slow");
		});

  	$("#circle_chart").click( function() {
	        event.preventDefault();
	        $('html,body').animate({
	            scrollTop: $("#Gates_chart").offset().top
	        }, "slow");
		});



	
})