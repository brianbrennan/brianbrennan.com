angular.module('contactCtrl', [])

	.controller('contactController', function($http, $scope){
		$scope.sendMessage = function(input){
			$http({
				method: 'POST',
				url: 'processForm.php',
				data: input,
				headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			})
			.success( function(data) {
				$scope.success =  true;
			} )

			.error(function(data){
				$scope.error = true;
			})
		}
	});