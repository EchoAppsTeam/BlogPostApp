(function(jQuery) {

var $ = jQuery;

if (Echo.AppServer.Dashboard.isDefined("BlogPost.Dashboard")) return;

var dashboard = Echo.AppServer.Dashboard.manifest("BlogPost.Dashboard");

dashboard.inherits = Echo.Utils.getComponent("Echo.AppServer.Dashboards.AppSettings");

dashboard.labels = {
	"title": "Title",
	"content": "Content",
	"submit": "Save"
};

dashboard.templates.main =
	'<div class="{class:container}">' +
		'<label>{label:title}</label>' +
		'<input type="text" class="{class:titleText}" value="{config:instance.config.title.text}">' +
		'<select class="{class:titleSize}"></select>' +
		'<label>{label:content}</label>' +
		'<textarea class="{class:content}">{config:instance.config.content}</textarea><br>' +
		'<button class="{class:submit}">{label:submit}</button>' +
	'</div>';

dashboard.templates.option =
	'<option value="{data:value}" {data:selected}>H{data:value}</option>';

dashboard.init = function() {
	this.parent();
};

dashboard.renderers.titleSize = function(element) {
	var self = this;
	element.empty();
	$.map([1, 2, 3], function(i) {
		element.append(self.substitute({
			"template": dashboard.templates.option,
			"data": {
				"value": i,
				"selected": +self.config.get("instance.config.title.size") === i
					? "selected" : ""
			}
		}));
	});
	return element;
};

dashboard.renderers.submit = function(element) {
	var self = this;
	return element.on("click", function() {
		self.update({
			"config": self._getConfig()
		});
	});
};

dashboard.methods.declareInitialConfig = function() {
	return {
		"title": {
			"text": "Blog post Title",
			"size": "2"
		},
		"content": "Blog post Content"
	};
};

dashboard.methods._getConfig = function() {
	return {
		"title": {
			"text": this.view.get("titleText").val(),
			"size": this.view.get("titleSize").val()
		},
		"content": this.view.get("content").val()
	};
};

dashboard.css =
	'.{class:container} .{class:titleSize} { width: auto; }' +
	'.{class:container} .{class:submit} { margin-left: 225px; }' +
	'.{class:container} .{class:content} { width: 260px; resize: none; }';

Echo.AppServer.Dashboard.create(dashboard);

})(Echo.jQuery);
