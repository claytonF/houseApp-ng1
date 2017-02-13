(function(){
	'use strict'
	angular
		.module('app.inputPanel')
		.controller('marketValue',marketValue)

		marketValue.$inject = ['$scope','$log','$rootScope']

		function marketValue($scope,$log,$rootScope) {
			var rs = $rootScope;
			var vm = $scope;
			vm.fieldType = '£';
			vm.inputId = this.__proto__.constructor.name;
			vm.min = 100000;
			vm.max = 10000000;
			vm.step = 5000;
			vm.entryValue = function() {
				rs.marketValue = vm.entryInput;

			}
			
			

		}

}())