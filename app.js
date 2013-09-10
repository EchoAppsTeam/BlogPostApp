(function($) {

BlogPost = function(config) {
	var content = $("<div>").append(config.content);
	$("<h" + config.title.size + ">")
		.append(config.title.text)
		.appendTo(config.target)
		.after(content);
};

BlogPost.prototype.destroy = function() {};

})(Echo.jQuery);
