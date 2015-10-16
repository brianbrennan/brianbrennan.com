var myApp = angular.module('myApp', ['ngRoute']);

//setting up routes

myApp.config(function($routeProvider, $locationProvider){
	$routeProvider.when('/', {
		templateUrl: 'app/views/home.html',
	});

	$locationProvider.html5Mode(true);
});