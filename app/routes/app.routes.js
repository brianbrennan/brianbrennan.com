//setting up routes

var route = angular.module('app.routes', ['ngRoute']);

route.config(function($routeProvider, $locationProvider){
	$routeProvider.when('/', {
		templateUrl: 'app/views/home.html'
	})

	.when('/about',{
		templateUrl: 'app/views/about.html'
	})


	.when('/skills',{
		templateUrl: 'app/views/skills.html',
		controller: 'skillsController',
		controllersAs: 'skills'
	})

	.when('/contact', {
		templateUrl: 'app/views/contact.html'
	})

	.when('/aba-retirement', {
		templateUrl: 'app/views/work/aba-retirement.html'
	});
});