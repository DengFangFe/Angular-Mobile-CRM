var scotchApp = angular.module('scotchApp',['ngRoute']);
scotchApp.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl:'index2.html',
		controller:'mainController'
	})
	.when('/account',{
		templateUrl:'account.html',
		controller:'accountController'
	})
	.when('/opp',{
		templateUrl:'opp.html',
		controller:'oppController'
	})
	.when('/me',{
		templateUrl:'me.html',
		controller:'meController'
	})
	.otherwise({redirectTo:'/'})
});

scotchApp.controller('mainController',function($scope){
	$scope.message = 'Everyone come and see how good i look!';
});

scotchApp.controller('accountController',function($scope){
	$scope.message = 'Everyone come and see !';
});

scotchApp.controller('oppController',function($scope){
	$scope.message = 'Everyone come!';
});
scotchApp.controller('meController',function($scope){
	$scope.message = 'Everyone!';
});