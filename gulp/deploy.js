'use strict';

var path = require('path');
var gulp = require('gulp');
var sftp = require('gulp-sftp');

var dotenv = require('dotenv').load();

gulp.task('deploy', ['build'], () => {
  return gulp.src('dist/**/*')
    .pipe(sftp({
      host: process.env.SFTP_HOST,
      user: process.env.SFTP_USER,
      pass: process.env.SFTP_PASS
    }));
});
