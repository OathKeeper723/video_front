var path = require("path");
var parser = require("word-text-parser");
//Word document's absolute path
var absPath = path.join(__dirname, "1.doc");
parser(absPath, function(resultList) {
  console.log(resultList);
});
