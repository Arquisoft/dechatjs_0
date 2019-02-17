const gulp = require('gulp')
const puml = require('gulp-puml')
const svg2png = require('gulp-svg2png')
const exec = require('child_process').exec
const path = require('path')

gulp.task('puml', () => {
  return gulp.src('docs/diagrams/*.puml')
    .pipe(puml())
    .pipe(gulp.dest('docs/images/diagrams'))
})

gulp.task('svg2png', (done) => {
  gulp.src('docs/images/diagrams/*.svg')
    .pipe(svg2png())
    .pipe(gulp.dest('docs/images/diagrams'))
  done()
})

gulp.task('copyImages', (done) => {
  gulp.src('docs/images/**/*')
    .pipe(gulp.dest('dist/docs/images'))
  done()
})

gulp.task('adoc2html', function (cb) {
  const command = `${path.resolve('node_modules/.bin/asciidoctorjs')} docs/index.adoc -a toc=left --destination-dir dist/docs`
  exec(command, function (err, stdout, stderr) {
    console.log(stdout)
    console.log(stderr)
    cb(err)
  })
})

gulp.task('default',
  gulp.series([
    'puml',
    'svg2png',
    'copyImages',
    'adoc2html'
  ])
)
