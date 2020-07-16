'use strict';

const del = require('del');
const gulp = require('gulp');

/**
 * 将 build:app-plus 打包之后的文件拷贝到 android 项目对应的目录.
 *
 * @param cb
 */
function copyAppPlusBuild(cb) {
  del('android/app/src/main/assets/apps/__UNI__130954D/www').then(() => {
    gulp.src('dist/build/app-plus/**/*.*').pipe(gulp.dest('android/app/src/main/assets/apps/__UNI__130954D/www'));
    cb();
  });
}

exports['default'] = copyAppPlusBuild;
