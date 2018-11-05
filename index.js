"use strict";

// REQUIRES
const jade = require('jade');
let config = require('./config/config.js');
let pages = require('./config/pages.js');
const fs = require('fs');

// Sort pages alphabetically
pages.sort(function(a, b) {
    let titleA = a.title.toUpperCase();
    let titleB = b.title.toUpperCase();
    return (titleA < titleB) ? -1 : (titleA > titleB) ? 1 : 0
});

// ROUTES

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

  if(!fs.existsSync('public/' + page.permalink)) {
    fs.mkdirSync('public/' + page.permalink);
  }

  fs.writeFileSync('public/' + page.permalink + '/index.html', jade.renderFile('views/prototypes/' + page.permalink + '.jade', {
    config: config,
    page: page,
    pages: pages,
    nextPage: nextPage,
    previousPage: previousPage,
    currentPage: currentPage,
    totalPages: totalPages,
    firstPage: pages[0],
  }))
}

fs.writeFileSync('public/index.html', jade.renderFile('views/index.jade', {
  config: config,
  pages: pages,
  firstPage: pages[0]
}))
