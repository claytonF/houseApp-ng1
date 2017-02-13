(function(){
	'use strict'
	angular
		.module('app.inputPanel')
		.controller('depositPercentage',depositPercentage)

		depositPercentage.$inject = ['$scope','$log','$rootScope']

		function depositPercentage($scope,$log,$rootScope) {
			var rs = $rootScope;
			var vm = $scope;
			vm.fieldType = '%';
			vm.inputId = this.__proto__.constructor.name;
			vm.min = 5;
			vm.max = 100;
			vm.step = 1;
			vm.entryValue = function() {
				rs.depositPercentage = vm.entryInput;
			}
			
			

		}

}())