
// 先将子文件夹下都新建点东西 否则就要手动执行任务
const gulp = require("gulp");
gulp.task("copy-indexhtml", function(){
	return gulp.src("index.html")
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());   
})

gulp.task("copy-html", function(){
	return gulp.src(["*.html", "html/*.html", "!index.html"])
	.pipe(gulp.dest("dist/html"))
	.pipe(connect.reload());
})

gulp.task("images", function(){
	return gulp.src("images/**").pipe(gulp.dest("dist/images"))
	.pipe(connect.reload());
})

gulp.task("data", function(){
	return gulp.src(["*.json", "data/*.json", "!package.json"])
	.pipe(gulp.dest("dist/data"))
	.pipe(connect.reload());
})

gulp.task("scripts", function(){
	return gulp.src(["*.js", "js/*.js", "!gulpfile.js"])
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload());
})

const sass = require("gulp-sass");
const minifyCss = require("gulp-minify-css");
const rename = require("gulp-rename");

gulp.task("sass", function(){
	return gulp.src("scss/*.{sass,scss}")
	.pipe(sass())
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());;
})


gulp.task("build", ["copy-indexhtml", "copy-html", "images", "data", "scripts", "sass"], function(){
	console.log("Done!");
})

gulp.task("watch", function(){
	gulp.watch(["scss/*.{sass,scss}"], ['sass']);
	gulp.watch(["*.js", "js/*.js", "!gulpfile.js"], ['scripts']);
	gulp.watch(["*.json", "data/*.json", "!package.json"], ["data"]);
	gulp.watch(["images/**"], ['images']);
	gulp.watch("index.html", ["copy-indexhtml"]);
	gulp.watch(["*.html", "html/*.html", "!index.html"], ["copy-html"]);
})

const connect = require("gulp-connect");
gulp.task("server", function(){
	connect.server({
		root: "dist",
		port: 8888,
		livereload: true
	})
})

gulp.task("default", ["watch", "server"]);