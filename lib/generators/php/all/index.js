/*jshint node:true es5:true */

var util = require('util')
  , path = require('path')
  , yeoman = require('yeoman');

function Generator() {
  yeoman.generators.Base.apply(this, arguments);
  this.sourceRoot(path.join(__dirname, '../templates'));
  this.desc('This generator creates a php project structure.');

  this.hookFor('php:app', {
    args: ['application']
  });
}
util.inherits(Generator, yeoman.generators.NamedBase);
module.exports = Generator;
