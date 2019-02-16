const gulp = require('gulp');
const puml = require('gulp-puml');
const svg2png = require('gulp-svg2png');
const asciidoctor = require('gulp-asciidoctor');
 
gulp.task('puml', () => {
    return gulp.src('docs/diagrams/*.puml')
        .pipe(puml())
        .pipe(gulp.dest('docs/images/diagrams'));
});

gulp.task('svg2png', (done) => {
    gulp.src('docs/images/diagrams/*.svg')
        .pipe(svg2png())
        .pipe(gulp.dest('docs/images/diagrams'));
    done()    
});

gulp.task('adoc2html', (done) => {
  gulp.src('docs/**/*.adoc').
  pipe(asciidoctor({
    showToc: true,
    safe: 'secure', // unsafe, safe, server or secure
    doctype: 'article', // book, inline
    header_footer: true, // true or false
    attributes: ['showtitle']
  })).
  pipe(gulp.dest('dist/docs'));
  done()
});

gulp.task('default', 
    gulp.series(['puml','svg2png','adoc2html'])
);