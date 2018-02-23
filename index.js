"use strict";

// REQUIRES
let express = require('express');
let path = require('path');
let app = express();
let http = require('http').Server(app);
let jadeDynamicIncludes = require('jade-dynamic-includes');
let config = require('./config/config.js');
let pages = require('./config/pages.js');
let helmet = require('helmet');

app.use(helmet());

// CONFIG
jadeDynamicIncludes.initTemplates(__dirname + '/views/prototypes', true);
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'jade');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(jadeDynamicIncludes.attachTemplatesToRequest());

// Sort pages alphabetically
pages.sort(function(a, b) {
    let titleA = a.title.toUpperCase();
    let titleB = b.title.toUpperCase();
    return (titleA < titleB) ? -1 : (titleA > titleB) ? 1 : 0
});

// ROUTES
// Render the app view
app.get('/', function(req, res) {
  let firstPage = pages[0];
	res.render('index', { config, pages, firstPage });
});

// Render routes for each page
for (let index in pages) {
	let page = pages[index];
  let nextPage = null;
  let previousPage = null;
  index = parseInt(index);
  let currentPage = index + 1;
  let totalPages = parseInt(pages.length);

  if ((index + 1) < pages.length) {
    nextPage = pages[index + 1];
  }

  if (index > 0) {
    previousPage = pages[index - 1];
  }

  app.get('/' + page.permalink, function(req, res) {
  	res.render('prototype', { config, page, pages, nextPage, previousPage, currentPage, totalPages });
  });

  app.get('/' + page.permalink + '/demo', function(req, res) {
    res.render('prototype_demo', { config, page, pages, nextPage, previousPage, currentPage, totalPages });
  });
}

// SERVER
http.listen(app.get('port'), function() {
	console.log("Server started on :" + app.get('port'));
});
