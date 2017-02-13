(function(){
	'use strict'
	angular
		.module('app.inputPanel')
		.controller('income1',income1)

		income1.$inject = ['$scope','$log','$rootScope']

		function income1($scope,$log,$rootScope) {
			var rs = $rootScope;
			var vm = $scope;
			vm.fieldType = '£';
			vm.inputId = this.__proto__.constructor.name;
			vm.min = 10000;
			vm.max = 80000;
			vm.step = 100;
			vm.entryValue = function() {
				rs.income1 = vm.entryInput;
				$log.log(rs);
			}

		}

}())