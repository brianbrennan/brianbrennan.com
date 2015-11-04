angular.module('mainCtrl', [])

	.controller('mainController', function($scope, $anchorScroll, $rootScope){
		// $scope.loading = true;
		// setTimeout(function(){
		// 	$scope.loading = false;
		// },1000);

		$rootScope.$on('$routeChangeStart', function(event, next, current){
			$rootScope.loading = true;
		});

		$scope.$on('$routeChangeStart', function(event, next, current) {

			$scope.viewLoading = true;

			if(next != 'undefined'){
				if(next.$$route.originalPath == '/'){
					s('header').class('dark');

					document.addEventListener('scroll', function(){
						var height = Number(s('.hero').css('height')[0].substr(0, s('.hero').css('height')[0].length - 2));

						if(document.body.scrollTop > height){
							s('header').removeClass('dark');
						} else {
							s('header').class('dark');
						}
					});

				} else {
					s('header').class('');
				}
			}

		});

		$scope.$on('$routeChangeSuccess', function(event, next, current){
			setTimeout(function(){
				window.scroll(0,0);
			},300);
	
			$scope.viewLoading = false;
		});

		$rootScope.$on('$routeChangeSuccess', function(event, next, current){
			$rootScope.loading = false;
		});
		
	});	