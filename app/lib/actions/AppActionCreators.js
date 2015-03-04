var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var AuthWebAPIUtils = require('../utils/AuthWebAPIUtils');

module.exports = {

  /**
   * @param  {object} apps
   */
  receiveUserApps: function(apps) {
    AppDispatcher.dispatch({
      actionType: AppConstants.RECEIVED_USER_APPS,
      apps: apps
    });
  },

  recieveApps: function(apps) {
    AppDispatcher.dispatch({
      actionType: AppConstants.RECEIVED_APPS,
      apps: apps
    });
  }

};
