(function(){
	'use strict'
	angular
		.module('app.inputPanel')
		.controller('repaymentTerm',repaymentTerm)

		repaymentTerm.$inject = ['$scope','$log','$rootScope']

		function repaymentTerm($scope,$log,$rootScope) {
			var rs = $rootScope;
			var vm = $scope;
			vm.fieldType = 'yrs';
			vm.inputId = this.__proto__.constructor.name;
			vm.min = 20;
			vm.max = 35;
			vm.step = 1;
			vm.entryValue = function() {
				rs.repaymentTerm = vm.entryInput;

			}
			
			

		}

}())