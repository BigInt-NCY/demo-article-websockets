(function() {

	'use strict';

	/**
	 * Service wrapping the WebSocket provider to send and receive message easily.
	 */
	angular.module('websocket').service('WebSocketWrapper', ['$log', '$websocket', '$rootScope', function($log, $websocket, $rootScope) {
		var ws = null;

		this.state = 'initializing';
		this.message = 'Websocket initializing';
		
		var self = this;
		
		this.init = function(){
			if (!ws) {
				ws = $websocket('ws://127.0.0.1:8888/demo', null, {reconnectIfNotNormalClose: true});
				
				ws.onOpen(function(){
					console.info('connected');
					$rootScope.$apply(function () {
						self.state = 'connected';
						self.message = 'Websocket connected';
					});
				});
				
				ws.onClose(function(){
					console.info('close');
					$rootScope.$apply(function () {
						self.state = 'disconnected';
						self.message = 'Websocket disconnected';
					});
				});
			}
		};
		
	}]);

})();