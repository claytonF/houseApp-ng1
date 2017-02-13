(function(){
	'use strict'
	angular
		.module('app.inputPanel')
		.controller('rentPercentage',rentPercentage)

		rentPercentage.$inject = ['$scope','$log','$rootScope']

		function rentPercentage($scope,$log,$rootScope) {
			var rs = $rootScope;
			var vm = $scope;
			vm.fieldType = '%';
			vm.inputId = this.__proto__.constructor.name;
			vm.min = 0;
			vm.max = 5;
			vm.step = 0.1;
			vm.entryValue = function() {
				rs.rentPercentage = vm.entryInput;
				$log.log(rs);
			}

		}

}())