"use strict";//проверка ошибок

//Змінні для плагінів
var gulp = require('gulp'),
	concatCss = require('gulp-concat-css'),//всі стилі в один
	autoprefixer = require('gulp-autoprefixer'),//автоматичні преіфкси
	minifyCss = require('gulp-minify-css'),//мініфікація стилів
	rename = require('gulp-rename'),//змінює імя файлу
	sass = require('gulp-sass'),//работа із sass файлами
	uncss = require('gulp-uncss'),//видаляємо стилі які не використовуються
	connect = require('gulp-connect'),//локальний сервер для livereload
	livereload = require('gulp-livereload'),//автоматична перезагрузка браузера 
	notify = require('gulp-notify');//повідомлення вдалого запуску

//<-- перезагрузка серверу після зміни файлів - lockalhost:8080
gulp.task('connect',function(){
	connect.server({
		root: 'app',
		livereload:true
	});
});

//<-- мініфікація стилів .css в папці - sass
gulp.task('css', function () { 
	gulp.src('scss/*.css')//<--папка із стилями якими працюємо(вхідні файли)
		.pipe(concatCss('style.css'))//назва файлу, в якому знаходяться всі стилі
		.pipe(rename('syle.css.css'))//переіменовуємо main.min.css
		.pipe(autoprefixer('last 2 versions', '>1%', 'ie 9'))//авторпефікси
		.pipe(minifyCss())//мініфікація стилів
		.pipe(gulp.dest('app/stylesheets'))//сюди зберігається файл
		.pipe(notify('Css - YAS!'))//сообщение об удачном выполненинии команды.
		.pipe(connect.reload());//<-- перезагрузка файлу після збереження
 });﻿

//<-- мініфікація стилів .scss в папці - sass
gulp.task('sass', function () { 
	gulp.src('scss/*.scss')//<--берем файлы в этой папке
		.pipe(sass())//для роботи із файлами sass
		.pipe(concatCss('style.css'))//назва файлу, в якому знаходяться всі стилі
		.pipe(autoprefixer('last 2 versions', '>1%', 'ie 9'))//авторпефікси	
		.pipe(minifyCss())//мініфікація стилів
		.pipe(rename('syle.sass.css'))//переіменовуємо main.scss.min.css
		.pipe(gulp.dest('app/stylesheets'))//сюди зберігається файл
		.pipe(notify('SASS - YAS'))//сообщение об удачном выполненинии команды.
		.pipe(connect.reload());//<-- перезагрузка файлу після збереження		
 });﻿


//html<-- перезагрузка браузера після збереження файлів
gulp.task('html', function(){
	gulp.src('app/index.html')
	.pipe(connect.reload());
});

//watch<-- наблюдати зміни в цих папках
gulp.task('watch', function(){
	gulp.watch('scss/*.css', ['css']);//перевіряємо gulp.task(css)
	gulp.watch('scss/*.scss', ['sass']);//перевіряємо gulp.task(scss)	
	gulp.watch('app/*.html', ['html']);//перевіряємо gulp.task(html)
});


//<-- запускаємо default
gulp.task('default',['connect','html','css','sass','watch']);