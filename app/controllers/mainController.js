angular.module('mainCtrl', [])

	.controller('mainController', function($scope){
		$scope.loading = true;
		setTimeout(function(){
			$scope.loading = false;
		},1000);
		
	});	