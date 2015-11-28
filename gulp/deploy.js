'use strict';

/* Load Plugins/Dependencies
–––––––––––––––––––––––––––––––––––––––––––––––––– */

require('dotenv').load();   // process.env.VAR_NAME

var path = require('path');
var util = require('util');
var gulp = require('gulp');

var conf = require('./conf');

var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*']
});



/* Deploy to AWS S3 Bucket
–––––––––––––––––––––––––––––––––––––––––––––––––– */

gulp.task('deploy', ['build'], function() {

  // create a new publisher using S3 options
  // http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#constructor-property
  var publisher = $.awspublish.create({
    key:    process.env.AWS_KEY,
    secret: process.env.AWS_SECRET,
    bucket: process.env.AWS_BUCKET
  });

  // define custom headers
  var headers = {
    'Cache-Control': 'max-age=315360000, no-transform, public'
  };

  return gulp.src('dist/**/*.*')

    // gzip, Set Content-Encoding headers and add .gz extension
    // .pipe(awspublish.gzip({ ext: '.gz' }))


    // publisher will add Content-Length, Content-Type and headers specified above
    // If not specified it will set x-amz-acl to public-read by default
    .pipe(publisher.publish(headers))

    // create a transform stream that delete old files from the bucket
    .pipe(publisher.sync())

    // create a cache file to speed up consecutive uploads
    .pipe(publisher.cache())

     // print upload updates to console
    .pipe($.awspublish.reporter());
});
}
