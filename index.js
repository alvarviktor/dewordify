
var mammothize = require("./lib/mammothize");
var normalize = require("./lib/normalize");
var markout = require("./lib/markout");
var paginate = require("./lib/paginate");
var templatize = require("./lib/templatize");
var fileWriter = require("./lib/fileWriter");
var autoChoice = require("./lib/autoChoice");

var docx = process.argv[2] || autoChoice(process.cwd());

mammothize(docx).then(function(_html) {
	var html = _html;
	var htmlArray;
	
	html = normalize(html);
	html = markout(html);
	htmlArray = paginate(html);
	htmlArray = templatize(htmlArray);
	fileWriter(htmlArray);
});