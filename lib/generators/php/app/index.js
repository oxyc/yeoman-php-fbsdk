/*jshint node:true es5:true */

var util = require('util')
  , path = require('path')
  , fs = require('fs')
  , yeoman = require('yeoman')
  , grunt = require('grunt')
  , helpers =  require('../helpers')
  , _ = grunt.util._;

function Generator() {
  yeoman.generators.Base.apply(this, arguments);
  this.sourceRoot(path.join(__dirname, 'templates'));
  this.desc('This generator creates the project structure.');
}
util.inherits(Generator, yeoman.generators.NamedBase);

module.exports = Generator;

Generator.prototype.askFor = function askFor() {
  var cb = this.async()
    , self = this;

  var questions = {
    name: {
        name: 'name'
      , message: 'What\'s the name of this application?'
    }
    , description: {
        name: 'description'
      , message: 'What\'s the description of this application?'
    }
    , author: {
        name: 'author'
      , message: 'What\'s your name?'
    }
  };

  var prompts = [];
  ['name', 'description', 'author'].forEach(function(option) {
    if (typeof self.options[option] !== 'undefined') {
      self[option] = self.options[option];
    } else {
      prompts.push(questions[option]);
    }
  });

  this.prompt(prompts, function(e, props) {
    if (e) return self.emit('error', e);

    // String flags
    props.forEach(function(prop) {
      self[prop] = props[prop];
    });
    cb();
  });
};

// Copy over the app structure.
Generator.prototype.createStructure = function createStructure() {
  this.directory('.', '.');
  this.directory('../static', '.', true);
};

// Fetch FB Boilerplate
Generator.prototype.fetchFbBoilerplate = function fetchFbBootstrap() {
  var cb = this.async();

  this.log.subhead('Facebook boilerplate');
  this.remote('oxyc', 'php-fb-boilerplate', 'master', function(err, remote)  {
    if (err) return cb(err);
    remote.directory('app', 'app');
    cb();
  });
};

// Fetch Bootstrap
Generator.prototype.fetchSassBootstrap = function fetchSassBootstrap() {
  var cb = this.async()
    , self = this;

  this.log.subhead('Twitter Bootstrap');

  // We don't want the css served through components as people sometimes want to
  // modify this.
  this.remote('jlong', 'sass-twitter-bootstrap', 'master', function(err, remote)  {
    if (err) return cb(err);
    var bootstrap_scss = remote.cachePath + '/lib/*.scss';
    // The configuration and main inclusion files should be separated from the
    // mixin files
    var root_files = '_variables.scss bootstrap.scss responsive.scss'.split('');
    // The mixin files.
    var lib_files = grunt.file.expandFiles(bootstrap_scss)
      // Only include filename
      .map(path.basename)
      // Exclude files which will be copied to the styles root directory.
      .filter(function(file) { return root_files.indexOf(file) === -1; });

    // Move lib files to sub folder.
    lib_files.forEach(function(file) {
      remote.copy('lib/' + file, 'app/styles/bootstrap/' + file);
    });

    // Move inclusion files to root folder and change import references.
    ['bootstrap.scss', 'responsive.scss'].forEach(function(file) {
      var filepath = remote.cachePath + '/lib/' + file
        , content = grunt.file.read(filepath)
            .replace(/(@import ")/g, '$1bootstrap/')
            .replace(/(@import ")bootstrap\/(variables";)/, '$1$2');

      self.write('app/styles/' + file, content);
    });

    // Move configuration file to root folder.
    remote.copy('lib/_variables.scss', 'app/styles/_variables.scss');

    // Move images.
    remote.directory('img', 'app/img');

    cb();
  });
};

Generator.prototype.installNpm = helpers.commandExec('npm install', 'Install NPM packages');
Generator.prototype.installBower = helpers.commandExec('yeoman install', 'Install Bower packages');
Generator.prototype.downloadComposer = helpers.commandExec('curl -s https://getcomposer.org/installer | php -- --install-dir=build');
Generator.prototype.installComposer = helpers.commandExec('php build/composer.phar install', 'Installing Composer packages');
