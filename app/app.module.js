(function(){
	'use strict';

	angular
		.module('app',[
		'app.inputPanel',
		'app.resultsPanel',
		'ngCookies'
		])
		.run(
		// get meta data for inputs
		function getData($cookies,$http, $rootScope){
			$rootScope.inputData = {};
			$rootScope.cookieData = {};

			$http({
				method:'GET',
				url:'./layout/inputPanel/data.json'
			})
			.then(success,failure);

			function success(data) {
				$rootScope.directiveData = data.data;

			};

			function failure() {
				console.log("Fucked up!")
			};
			readCookie($rootScope);



		})

		function readCookie($rootScope) {
			var nameEQ = "houseApp="
			var cookie = document.cookie;
			console.log(cookie);
			var ca = document.cookie.split(';');
		  	for (var i=0;i < ca.length;i++) {
		  	    var c = ca[i];
		  	    while (c.charAt(0)==' ') c = c.substring(1,c.length);
		  	    if (c.indexOf(nameEQ) == 0) {
		  	    	$rootScope.cookieData = JSON.parse(c.substring(nameEQ.length,c.length));
		  	    };

		  	}

		}
		
		
})();