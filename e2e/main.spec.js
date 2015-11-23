'use strict';




/* Main Page View
–––––––––––––––––––––––––––––––––––––––––––––––––– */
describe('The main view', function () {

  var page;

  beforeEach(function () {
    browser.get('/index.html');
    page = require('./main.po');
  });




  /* Page Layout Elements
  –––––––––––––––––––––––––––––––––––––––––––––––––– */

  it('should have navbar and subnav', function() {
    expect(page.navbar).isPresent()).toBe(true);
    expect(page.subnav).isPresent()).toBe(true);
  });




  /* Page Element Wrappers
  –––––––––––––––––––––––––––––––––––––––––––––––––– */

  it('should should have video and panel wrappers', function () {
    expect(page.videoWrapper).isPresent()).toBe(true);
    expect(page.panelWrapper).isPresent()).toBe(true);
  });




});
