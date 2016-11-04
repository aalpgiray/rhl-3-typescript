var jsdom = require('jsdom');

global.document = jsdom.jsdom('');
global.window = document.defaultView;
global.navigator = window.navigator;