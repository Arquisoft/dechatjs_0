module.exports = function(grunt) {

  grunt.initConfig({
    plantuml: {
      one: {
        files: {
         'docs/images/diagrams/example.png': ['docs/diagrams/example.puml']
        }
      },
      all: {
        src: ['docs/diagrams/*.puml'],
        dest: 'docs/images/diagrams'
      }
    },
    asciidoctor: {
        options: {
            showToc: true,
            header_footer: true,
            safeMode: 'secure',
            doctype: 'article',
            backend: 'html5'
        },
        files: {
          'dist/docs': ['docs/index.adoc','docs/**/*.adoc'],
        },
      }
  });

  grunt.loadNpmTasks('grunt-plantuml');

  grunt.loadNpmTasks('grunt-asciidoctor');

  // Default task(s).
  grunt.registerTask('default', ['plantuml:all','asciidoctor']);

};