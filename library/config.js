var env = require('../config/env.json');

exports.loadConfig = function() {
  var node_env = process.env.NODE_ENV || 'development';
  return env[node_env];
};