angular.module('skillsCtrl', [])

	.controller('skillsController', function($http, $scope){

		$http.get('app/model/skills.json')
		.success(function(res){
			$scope.skills = res;
		});

		$http.get('app/model/work.json')
		.success(function(res){
			$scope.works = res;
		});
	});