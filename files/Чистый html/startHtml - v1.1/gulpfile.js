"use strict";//проверка ошибок

//переменные для плагинов
var gulp = require('gulp'),
	concatCss = require('gulp-concat-css'),//слияние файлов в один
	minifyCss = require('gulp-minify-css'),//минификация файлов
	autoprefixer = require('gulp-autoprefixer'),//автоматическое роставление префиксов
	rename = require('gulp-rename'),//переименовуем файлы
	sass = require('gulp-sass'),//работа с sass файлами
	uncss = require('gulp-uncss'),//удаляем неиспользованые стили
	livereload = require('gulp-livereload'),//автоматическая перезагрузка браузера, посли изминения файлок
	connect = require('gulp-connect'),//для работы на сервере в связке с livereload
	notify = require('gulp-notify');//сообщение об удачном выполненинии.

//перезагрузка сервера(после сохранения файлов) - lockalhost:8080
gulp.task('connect',function(){
	connect.server({
		root: 'app',
		livereload:true
	});
});

//минифицыруэм все стили .css в папке - sass
gulp.task('css', function () { 
	gulp.src('scss/*.css')//<--берем файлы в этой папке 	
	.pipe(uncss({
        html: ['app/index.html']
    }))
    .pipe(minifyCss())//минифицыруем сss
	.pipe(concatCss('bundle.css'))//название папки в которой находятся стили - *1*    
	.pipe(autoprefixer({ browsers: ['last 15 versions'], cascade: false }))//автопрефиксы		
	.pipe(rename('main.min.css'))//переименовываэм файл на main.min.css
	.pipe(gulp.dest('app/stylesheets'))//путь для сохранения стияля
	.pipe(notify('All is worck!'))//сообщение об удачном выполненинии команды.
	.pipe(connect.reload());//<-- перезагрузка файла после сохранения

 });﻿
//минифицыруэм все стили .scss в папке - sass (стили доменируют над .css)
gulp.task('sass', function () { 
	gulp.src('scss/*.scss')//<--берем файлы в этой папке
	.pipe(sass())
	 .pipe(uncss({
        html: ['app/index.html']
    }))
	.pipe(concatCss('bundle.css'))//слияние всех стилей в один - *1*
	.pipe(autoprefixer({ browsers: ['last 15 versions'], cascade: false }))//автопрефиксы	
	.pipe(minifyCss())//минифицыруем сss
	.pipe(rename('main.scss.min.css'))//название стиля *1*
	.pipe(gulp.dest('app/stylesheets'))//путь для сохранения стиял *1*
	.pipe(notify('All is worck!'))//сообщение об удачном выполненинии.
	.pipe(connect.reload());//<-- перезагрузка файла после сохранения		
 });﻿

//html<-- перезагрузка файла после сохранения
gulp.task('html', function(){
	gulp.src('app/index.html')
	.pipe(connect.reload());
});

//watch<-- наблюдать изминения в этих папках
gulp.task('watch', function(){
	gulp.watch('scss/*.css', ['css']);//проверяем gulp.task(css)
	gulp.watch('scss/*.scss', ['sass']);//проверяем gulp.task(scss)	
	gulp.watch('app/*.html', ['html']);//проверяем gulp.task(html)
});

//default
gulp.task('default',['connect','html','css','sass','watch']);//запускаэм task