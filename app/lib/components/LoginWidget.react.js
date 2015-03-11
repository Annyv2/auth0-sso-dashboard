var React = require('react');
var AuthActions = require('../actions/AuthActions');

var LoginWidget = React.createClass({
  render: function() {
    return (
      <div></div>
    );
  },

  componentDidMount: function() {
    var lock = window.lock;

    lock.show({
      closable: false,
      connections: [config.default_connection]
    }, function(err, profile, token) {
      if (err) {
        // Error callback
        alert('There was an error');
      } else {
        AuthActions.authenticated(token);
      }
    });
  }
});

module.exports = LoginWidget;
