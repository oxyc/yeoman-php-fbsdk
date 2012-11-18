/*jshint node:true es5:true */
module.exports = function( grunt ) {
  'use strict';

  // readOptionalJSON by Ben Alman
  // https://gist.github.com/2876125

  function readOptionalJSON(filepath) {
    var data = {};
    try {
      data = grunt.file.readJSON(filepath);
      grunt.verbose.write('Reading ' + filepath + '...').ok();
    } catch(e) {}
    return data;
  }

  grunt.initConfig({

    // default lint configuration, change this to match your setup:
    // https://github.com/cowboy/grunt/blob/master/docs/task_lint.md#lint-built-in-task
    lint: {
      options: {
        options: readOptionalJSON('.jshintrc'),
      },
      tests: {
        files: { src: ['test/*.js'] },
        options: {
          options: readOptionalJSON('test/.jshintrc'),
          globals: { describe: true, before: true, after: true, it: true, beforeEach: true, afterEach: true, expect: true }
        }
      },
      client: {
        files: { src: ['lib/generators/php/app/templates/app/scripts/**/*.js'] },
        options: {
          options: {
            curly: false,
            eqeqeq: true,
            forin: true,
            immed: true,
            indent: 2,
            latedef: true,
            newcap: true,
            noarg: true,
            noempty: true,
            nonew: true,
            regexp: true,
            undef: true,
            trailing: true,
            sub: true,
            boss: true,
            eqnull: true,
            laxcomma: true,
            laxbreak: true,
            browser: true
          },
          globals: { console: true, define: true, require: true }
        }
      },
      node: {
        files: { src: ['*.js', 'lib/generators/php/**/index.js'] },
        options: {
          options: readOptionalJSON('.jshintrc')
        }
      }
    },
  });

  grunt.registerTask('test', 'lint');
  grunt.registerTask('default', 'lint');
};
