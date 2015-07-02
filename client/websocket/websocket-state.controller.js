(function(){

	'use strict';

	/**
	 * Controller intercepting every events related to the state of the tornado websocket (updating the web client with live data)
	 */
	angular.module('websocket').controller('WebsocketStateCtrl', ['$scope', '$log', 'WebSocketWrapper', function($scope, $log, WebSocketWrapper){
		$scope.websocket = WebSocketWrapper;
		$scope.websocket.init();
		//console.info(WebSocketWrapper, $scope.websocket, $scope.websocket.state);
	}]);

})();
