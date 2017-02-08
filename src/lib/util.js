define('lib/util', function(require) {
	var h = require('handlebars').Handlebars;

	return {
		// 模版渲染
		render: function(tpl, data) {
			var tplC = h.compile(tpl);
			return tplC(data);
		}
	}
});
