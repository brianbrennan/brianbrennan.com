//setting up routes

var route = angular.module('app.routes', ['ngRoute']);

route.config(function($routeProvider, $locationProvider){
	$routeProvider.when('/', {
		templateUrl: 'app/views/home.html'
	})

	.when('/about',{
		templateUrl: 'app/views/about.html'
	})

	.when('/work', {
		templateUrl: 'app/views/work.html'
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
	})

	.when('/stonehill-palette', {
		templateUrl: 'app/views/work/stonehill-palette.html'
	})

	.when('/enigma-js', {
		templateUrl: 'app/views/work/enigma-js.html'
	})

	.when('/slimpickin', {
		templateUrl: 'app/views/work/slimpickin.html'
	})

	.when('/enigmate', {
		templateUrl: 'app/views/work/enigmate.html'
	});
});