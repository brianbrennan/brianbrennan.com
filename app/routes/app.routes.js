//setting up routes

var route = angular.module('app.routes', ['ngRoute']);

route.config(function($routeProvider, $locationProvider){
	$routeProvider.when('/', {
		templateUrl: 'app/views/home.html',
	})

	.when('/about',{
		templateUrl: 'app/views/about.html'
	});
});