(function(){
	'use strict'
	angular
		.module('app.inputPanel')
		.controller('interestRate',interestRate)

		interestRate.$inject = ['$scope','$log','$rootScope']

		function interestRate($scope,$log,$rootScope) {
			var rs = $rootScope;
			var vm = $scope;
			vm.fieldType = '%';
			vm.inputId = this.__proto__.constructor.name;
			vm.min = 1;
			vm.max = 10;
			vm.step = 0.5;
			vm.entryValue = function() {
				rs.interestRate = vm.entryInput

			}
			
			

		}

}())