(function(){
	'use strict'
	angular
		.module('app.inputPanel')
		.controller('share',share)

		share.$inject = ['$scope','$log','$rootScope','clearInput']

		function share($scope,$log,$rootScope,clearInput) {
			var rs = $rootScope;
			var vm = $scope;
			vm.fieldType = '%';
			vm.inputId = this.__proto__.constructor.name;
			vm.min = 25;
			vm.max = 100;
			vm.step = 5;
			vm.entryValue = function() {
				rs.share = vm.entryInput;
				$log.log(rs);
			}

		}

}())