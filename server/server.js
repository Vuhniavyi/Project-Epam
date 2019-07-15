var express = require('express');
var path = require('path');

var rootPath = path.resolve(__dirname, '..', 'src');
var PORT = process.env.PORT || 3000;
var app = express();

app.use(express.static(rootPath));

app.listen(PORT, function () {
    console.log('listening on port', PORT);
});