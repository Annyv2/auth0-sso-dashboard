var Dispatcher = require('../Dispatcher');
var Constants = require('../Constants');
var API = require('../API');

module.exports = {

  init: function() {
    Dispacher.dispatch({
      actionType: Constants.CHECK_AUTHENTICATED
    })
  },

  /**
   * @param  {string} token
   */
  authenticated: function(token, access_token) {
    //API.loadUserApps(token);
    API.loadUserProfile(access_token);
    Dispatcher.dispatch({
      actionType: Constants.USER_AUTHENTICATED,
      token: token,
      access_token: access_token
    });
  },

  logout: function() {
    Dispatcher.dispatch({
      actionType: Constants.USER_LOGGED_OUT
    });
  }

};
