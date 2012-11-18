/*jshint node:true */
var exec = require('child_process').exec;

exports.commandExec = function commandExec(command, msg) {
  return function() {
    var cb = this.async()
      , self = this;

    if (msg) self.log.subhead(msg);
    exec(command, function(err, stdout, stderr) {
      if (stdout) self.log.writeln(stdout);
      if (err) self.log.error(stderr);
      cb();
    });
  };
};
