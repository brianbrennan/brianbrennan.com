angular.module('mainCtrl', [])

	.controller('mainController', function($scope, $anchorScroll, $rootScope, $window, $location){
		// $scope.loading = true;
		// setTimeout(function(){
		// 	$scope.loading = false;
		// },1000);


		$rootScope.loading = true;

		$scope.$on('$routeChangeStart', function(event, next, current) {

			$scope.viewLoading = true;

		});

		$scope.$on('$routeChangeSuccess', function(event, next, current){
			setTimeout(function(){
				window.scroll(0,0);
			},300);
	
			$scope.viewLoading = false;
		});

		$rootScope.$on('$routeChangeSuccess', function(event, next, current){

			function listener(event){
				if(typeof s('hero').css('height')[0] !== 'undefined'){
					var height = Number(s('.hero').css('height')[0].substr(0, s('.hero').css('height')[0].length - 2));
				
					if(document.body.scrollTop > height){
						s('header').removeClass('dark');
					} else {
						s('header').class('dark');
					}
				}
			}

			console.log($location.path());

			if($location.path() === '/'){
				s('header').class('dark');

				document.addEventListener('scroll', listener);

			} else {
				s('header').class('');
				document.removeEventListener('scroll', listener);
			}
			
			if(!$window.ga){
				console.log('oops');
				return;
			}
			$window.ga('send', 'pageview', { page: $location.path() });

			$rootScope.loading = false;
		});
		
	});	