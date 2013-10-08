define(['app','Chartmaster'] , function (app,Chartmaster) {
 	app.controller('ChartCtrl', ['$scope', 'chartService', function($scope, chartService) {

 		function updateChart (stats) {
 			Chartmaster.barChart(stats.values, "#chart-container-1");
 			Chartmaster.donut([stats.startingValue,stats.finalValue, stats.recurringPayment * stats.numMonths], "#chart-container-2")
 		}

 		chartService.updateChart = updateChart;
 		
 		_.defer(function () {
 		  $('.chart-container > *').click(function (e) {
 		    $(this).find('.thumb').toggleClass('pinned');
 		  })
 		})

 	}])
})