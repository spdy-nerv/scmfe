define('pages/pack/list', function(require, exports) {
	var $ = require('$');

	var PackList = {
		init: function() {
			this.renderUI();
			//this.bindUI();
		},

		renderUI: function() {
			$('#main').html('大小件关联');
		}
	};

	return function() {
		PackList.init();
	}
});
