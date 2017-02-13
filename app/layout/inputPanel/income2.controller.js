(function(){
	'use strict'
	angular
		.module('app.inputPanel')
		.controller('income2',income2)

		income2.$inject = ['$scope','$log','$rootScope']

		function income2($scope,$log,$rootScope) {
			var rs = $rootScope;
			var vm = $scope;
			vm.fieldType = '£';
			vm.inputId = this.__proto__.constructor.name;
			vm.min = 10000;
			vm.max = 80000;
			vm.step = 100;
			vm.entryValue = function() {
				rs.income2 = vm.entryInput;
				$log.log(rs);
			}

		}

}())