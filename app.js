(function() {

if (!window.AcmeCorporation) window.AcmeCorporation = {};

if (!AcmeCorporation.Apps) AcmeCorporation.Apps = {};

AcmeCorporation.Apps.BlogPost = function(config) {

	var title = document.createElement("h" + config.title.size);
	title.appendChild(document.createTextNode(config.title.text));

	var content = document.createElement("div");
	content.appendChild(document.createTextNode(config.content));

	config.target[0].appendChild(title);
	config.target[0].appendChild(content);
};

})();
