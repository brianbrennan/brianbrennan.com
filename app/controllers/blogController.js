angular.module('blogCtrl', [])
	
	.controller('blogController', function($scope, $http){
		$http.get('app/model/blog.json')
		.success(function(res){
			$scope.posts = res;
		});
	});	