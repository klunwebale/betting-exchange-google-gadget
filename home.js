function start(msg) {
	document.getElementById('content_div').innerHTML = "Under construction....";
	msg.createDismissibleMessage("start");
	getHtml();
}
function getHtml() {
	var params = {};
	params[gadgets.io.RequestParameters.CONTENT_TYPE] = gadgets.io.ContentType.TEXT;
	var url = "http://google.com";
	gadgets.io.makeRequest(url, response, params);
};
function response(obj) {
	// obj.text contains the text of the page that was requested
	var str = obj.text;
	var html = str
	document.getElementById('content_div').innerHTML = str;
};
