module.exports = function(grunt) {

  grunt.initConfig({
  
    watch: {
      sass: {
        files: '**/*.scss', 
        tasks: ['css']
      }
    },

    sass: {
      dev: {
        files: {
          'css/main.css' : 'scss/main.scss'
        }
      }
    },

    cssmin: {
      build: {
        src: 'css/main.css',
        dest: 'css/main.min.css'
      }    
    },

    concat: {
      options: {
        separator: '\n\n\n'
      },
      dist: {
        src: ['scripts/accordion.js', 'scripts/calculator.js','scripts/main.js'],
        dest: 'scripts/built.js'
      }
    },

    uglify: {
      build: {
        files: {
          'scripts/built.min.js': ['scripts/built.js']
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass', 'cssmin', 'concat', 'uglify']);
  grunt.registerTask('sassify', ['sass', 'cssmin']);
};