'use strict';

var path = require('path');
var homedir = require('homedir-polyfill');

module.exports = function yarnPrefix() {
  var userhome = homedir();

  if (process.platform === 'linux' && process.env.USER === 'root') {
    userhome = path.resolve('/usr/local/share');
  }

  // use %LOCALAPPDATA%/Yarn on Windows
  if (process.platform === 'win32' && process.env.LOCALAPPDATA) {
    return path.join(process.env.LOCALAPPDATA, 'Yarn', 'config');
  }

  // otherwise use ~/.yarn
  return path.join(userhome, '.config', 'yarn');
};

