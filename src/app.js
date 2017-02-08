define('app', function(require, exports) {
	var Backbone = require('backbone');
	var $ = require('$');

	var autoRouter = Backbone.Router.extend({
		routes: {
			'': 'home',
			// 例如，列表页'pages/newtag/list'，详情页'pages/newtag/detail/123'
			'pages/:module/:action(/:id)': 'loadModule'
		},

		home: function() {
			this.loadModule('home', 'index');
		},

		loadModule: function(module, action, id) {
			require.async(['pages', module, action].join('/'), function(cb) {
				if (cb) {
					cb(id);
				} else {
					alert('模块加载失败！');
				}
			});

		}
	});

	window.App = {
		init: function() {
			var router = new autoRouter();
			$(document).on('click', 'a.vlink', function(e) {
				e.preventDefault();
				var href = $(this).prop('href');
				href = href.slice((location.protocol + '//' + location.host).length); // 去掉root部分
				router.navigate(href, true);
			});
			var b = Backbone.history.start({pushState: true});
		}
	};

	exports.run = App.init;
});
