define('pages/delivery/list', function(require, exports) {
	var $ = require('$');

	var DeliveryList = {
		init: function() {
			this.renderUI();
			//this.bindUI();
		},

		renderUI: function() {
			$('#main').html('预约发货');
		}
	};

	return function() {
		DeliveryList.init();
	}
});
