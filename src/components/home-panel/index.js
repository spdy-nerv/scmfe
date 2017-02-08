define('components/home-panel/index', function(require) {
	var baseCls = require('baseCls');
	var util = require('util');
	var $ = require('$');
	var api = require('api');

	var HomePanel = baseCls.extend({
		init: function(opt) {
			this.renderUI();
			//this.bindUI();
		},

		renderUI: function() {

			// 异步demo，使用mock接口
			//debugger;
			$.ajax({
				url: api.GET_HOME_PAGE_NAME,
				dataType: 'json',
				// tmp，正式接口调用改为随机callback名
				//jsonpCallback: 'mycb',
				success: function(data) {
					if (data.code == 0 && data.data) {
						var pageName = data.data.pageName || '无名';
						var tpl = require('./index.tpl');
						$('#main').html(util.render(tpl, {
							pageName: pageName
						}));
					}
				},
				error: function(xhr, type) {
					alert('error');
				}
			});
		}
	});

	return HomePanel;
});
