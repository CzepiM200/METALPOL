const gulp = require("gulp");
const sass = require("gulp-sass");
sass.compiler = require('sass');
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();
const minify = require('gulp-minify');
const htmlmin = require('gulp-htmlmin');

function compileSass(done) {
    gulp
        .src("./scss/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("./css"));

    done();
}

function watcher(done) {
    browserSync.init({
        server: "./"
    });

    gulp.watch("./scss/**/*.scss", gulp.series(compileSass, reload));
    gulp.watch("./*.html", gulp.series(reload));

    done();
}

function reload(done) {
    browserSync.reload();
    done();
}

function minifyJS(done) {
    gulp.src("./js/*.js")
    .pipe(minify({
        ext: {
            min: '.js'
        },
        noSource: true
    }))
        .pipe(gulp.dest('docs/js'))
    done();
}

function minifyCSS(done) {
    gulp.src("./scss/*.scss")
        .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest("docs/css"));
    done();
}

function moveHTML(done) {
    gulp.src("./*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("docs"));
    done();
}

function movePHP(done) {
    gulp.src("./*.php")
        .pipe(gulp.dest("docs"));
    done();
}

function moveHtaccess(done) {
    gulp.src("./*.htaccess")
        .pipe(gulp.dest("docs"));
    done();
}

function moveImages(done) {
    gulp.src("./images/*.*")
        .pipe(gulp.dest("docs/images"));
     gulp.src("./images/svg/*.*")
        .pipe(gulp.dest("docs/images/svg"));
    done();
}


exports.sass = gulp.parallel(compileSass);
exports.default = gulp.parallel(compileSass, watcher);
exports.build = gulp.parallel(minifyJS, minifyCSS, moveHTML, movePHP, moveHtaccess, moveImages);