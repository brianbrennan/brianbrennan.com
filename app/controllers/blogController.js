angular.module('blogCtrl', [])
	
	.controller('blogController', function($scope, $http){
		$http.get('app/model/blog.json')
		.success(function(res){
			$scope.posts = res;
		});

		$scope.limit = 4;

		$scope.showMore = function(){
			$scope.limit = $scope.limit + 4;
		}
	});	