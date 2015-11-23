/**
 * Main Page Object
 *
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';




/* Main Page
–––––––––––––––––––––––––––––––––––––––––––––––––– */

var MainPage = function() {


  //  Layout Elements
  // ------------------------------

  this.navbar = element(by.css('.navbar'));
  //this.player = element(by.css('.gp-video-player'));
  this.subnav = element(by.css('.subnav'));


  //  Element Wrappers
  // ------------------------------

  this.videoWrapper = element(by.css('#video-wrapper'));
  this.panelWrapper = element(by.css('#panel-wrapper'));

};

module.exports = new MainPage();
