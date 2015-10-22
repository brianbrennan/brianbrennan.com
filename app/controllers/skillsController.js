angular.module('skillsCtrl', [])

	.controller('skillsController', function($http, $scope){

		$http.get('app/model/skills.json')
		.success(function(res){
			$scope.skills = res;
		});
	});