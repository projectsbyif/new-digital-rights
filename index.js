"use strict";

// REQUIRES
let express = require('express');
let path = require('path');
let app = express();
let http = require('http').Server(app);
let config = require('./config/config.js');
let pages = require('./config/pages.js');

// CONFIG
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'jade');
app.use('/public', express.static(path.join(__dirname, 'public')));

// ROUTES
// Render the app view
app.get('/', function(req, res) {
	res.render('index', { config, pages });
});

// Render routes for each page
for (let page in pages) {
	page = pages[page];

	app.get('/' + page.permalink, function(req, res) {
		res.render('prototype', { page });
	});
}

// SERVER
http.listen(app.get('port'), function() {
	console.log("Server started on :" + app.get('port'));
});
