angular.module('workCtrl', [])

	.controller('workController', function($http, $scope){
		$http.get('app/model/work.json')
		.success(function(res){
			$scope.works = res;
		});
	});