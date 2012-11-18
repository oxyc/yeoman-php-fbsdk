var path = require('path')
  , helpers = require('./helpers')
  , should = require('should')
  , grunt = require('grunt')
  , exec = require('child_process').exec;

// Tests are currently failing!
describe('Facebok generator test', function() {
  before(helpers.before(path.join(__dirname, './temp')));

  it('runs successfully', function(done) {
    helpers.runGenerator('php', {
        name: 'example'
      , description: 'Example'
      , author: 'Oskar'
    }, function() {
      console.log("ohoho", arguments);
      done();
    });
  });

  it('creates expected files', function() {
    helpers.assertFile('.jshintrc');
    helpers.assertFile('app/.htaccess');
    helpers.assertFile('app/index.php');
    helpers.assertFile('app/config.php');
  });
  it('runs composer install', function() {
    helpers.assertFile('composer.lock');
    helpers.assertFile('app/vendor/autoload.php');
  });
  it('runs yeoman install', function() {
    helpers.assertFile('app/components/requirejs/require.js');
    // etc.
  });

  it('passes yeoman lint', function(done) {
    grunt.util.spawn({
      cmd: 'yeoman',
      args: ['test']
    }, function(err) {
      should.not.exist(err);
      done();
    });
  });

  it('passes yeoman test', function(done) {
    grunt.util.spawn({
      cmd: 'yeoman',
      args: ['test']
    }, function(err) {
      should.not.exist(err);
      done();
    });
  });
});
