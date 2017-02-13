(function(){
	'use strict';

	angular
		.module('app.resultsPanel')
		.controller('ResultsController', ResultsController);

		ResultsController.$inject = ['$scope'];

		function ResultsController($scope) {
			'use strict';
			var vm = this;
			//console.log(vm);
		};


})();