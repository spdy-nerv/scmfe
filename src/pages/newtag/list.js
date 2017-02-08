define('pages/newtag/list', function(require, exports) {
	var $ = require('$');

	var NewtagList = {
		init: function() {
			this.renderUI();
			//this.bindUI();
		},

		renderUI: function() {
			$('#main').html('新打标签');
		}
	};

	return function() {
		NewtagList.init();
	}
});
