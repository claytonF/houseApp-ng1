(function(){
	'use strict';

	angular.module('app.inputPanel')
		.service('writeCookie',writeCookie)

		writeCookie.$inject = ['$rootScope']

		function writeCookie($rootScope) {

			this.write = function() {
				var date = new Date();
		        date.setTime(date.getTime()+(1000*24*60*60*1000));
		        var expires = "; expires="+date.toGMTString();
		        
				document.cookie = "houseApp="+JSON.stringify($rootScope.cookieData)+expires+"; path=/";
			}
		}


}())