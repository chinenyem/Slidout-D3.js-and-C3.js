$(document).ready(function(){

	var chart = c3.generate({
    	bindto: '#chart',
	    data: {
	      columns: [
	        ['data1', 30, 200, 100, 400, 150, 250],
	        ['data2', 50, 20, 10, 40, 15, 25]
	      ]
	    },
	    size: {
  			width: 840,
  			height: 480
		}
	});

	var chart = c3.generate({
    	bindto: '.chart4',
    	size: {
	  			width: 840,
	  			height: 480
			},
	    data: {
	        columns: [
	            ['data1', 300, 350, 300, 0, 0, 0],
	            ['data2', 130, 100, 140, 200, 150, 50]
	        ],
	        types: {
	            data1: 'area',
	            data2: 'area-spline'
	        },
	         colors: {
	           data1: 'hotpink',
	           data2: 'pink'
	         }
	    }
	});

	var chart = c3.generate({
		bindto: "#chart5",
		donut: {
 			width: 40
		},
	    data: {
	        columns: [
	            ['LV', 40],
	            ['DVF', 60],
	        ],
	        type : 'donut'
	    },
	    donut: {
	        title: "Top Designers:",
	    }
	});


	

	(function(){
	d3_work()
	})()

	function d3_work(){

		var dataset = [ 5, 10, 15, 20, 25 ];

		d3.select("body > .pagecontent").selectAll("div")
		    .data(dataset)
		    .enter()
		    .append("div")
		    .attr("class", "bar")
		    .style("height", function(d) {
    			return d + "px";
			});

	}
	


	
	

});