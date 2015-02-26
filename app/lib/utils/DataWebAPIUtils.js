var request = require('browser-request');
var AppActionCreators = require('../actions/AppActionCreators');
var UserActionCreators = require('../actions/UserActionCreators');
var qs = require('querystring');

module.exports = {

  _get: function(token, url, options, callback) {
    if (options) {
      url + '?' + qs.stringify(options);
    }
    request({
      url: url,
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }, function(error, response, body) {
      if (error) {
        throw error;
      } else {
        var data = JSON.parse(body);
        callback(data);
      }
    });
  },

  loadUserApps: function(token) {
    this._get(token, '/api/apps', null, AppActionCreators.receiveApps);
  },

  loadUsers: function(token, options) {
    this._get(token, '/api/proxy/users', options, UserActionCreators.receiveUsers);
  }
};
