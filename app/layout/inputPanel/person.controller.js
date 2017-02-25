(function(){
	'use strict'

	angular.module('app.inputPanel')
		.controller('person',person)

		person.$inject = ['$scope','$rootScope','writeCookie']

		function person($scope,$rootScope,writeCookie) {

			$scope.selfEmployed1 = $rootScope.cookieData.selfEmployed1;
			$scope.selfEmployed2 = $rootScope.cookieData.selfEmployed2;

			$scope.$watch('selfEmployed1',function(){ 
				$rootScope.cookieData.selfEmployed1 = $scope.selfEmployed1;
				writeCookie.write();
			});
			$scope.$watch('selfEmployed2',function(){ 
				$rootScope.cookieData.selfEmployed2 = $scope.selfEmployed2;
				writeCookie.write();
			})

		}
}())