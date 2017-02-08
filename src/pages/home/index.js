define('pages/home/index', function(require, exports) {
	var $ = require('$');

	var HomePanel = require('components/home-panel/index');

	var HomeIndex = {
		init: function() {
			this.renderUI();
			//this.bindUI();
		},

		renderUI: function() {
			new HomePanel();
		}
	};

	return function() {
		HomeIndex.init();
	}
});
