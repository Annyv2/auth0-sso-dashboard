var React = require('react');
var Router = require('react-router');
var Navbar = require('./Navbar.react');

var Mixins = require('../mixins');

var App = React.createClass({

  render: function() {
    return (
      <div>
        <Navbar />
        <Router.RouteHandler />
      </div>
    );
  }
});

var AdminSection = require('./AdminSection.react');
var AdminUsers = require('./AdminUsers.react');
var AdminSettings = require('./AdminSettings.react');
var AdminApps = require('./AdminApps.react');
var AdminDashboard = require('./AdminDashboard.react');
var AdminRoles = require('./AdminRoles.react');
var SsoDashboardSection = require('./SsoDashboardSection.react');
var UserProfile = require('./UserProfileSection.react');
var LoginWidget = require('./LoginWidget.react');

var routes = (
  <Router.Route name="app" path="/" handler={App}>
    <Router.Route name="login" path="/login" handler={LoginWidget} />
    <Router.Route name="admin" handler={AdminSection}>
      <Router.Route name="admin-users" path="users" handler={AdminUsers} title="User Administration" />
      <Router.Route name="admin-settings" path="settings" handler={AdminSettings} />
      <Router.Route name="admin-apps" path="apps" handler={AdminApps} />
      <Router.Route name="admin-roles" path="roles" handler={AdminRoles} />
      <Router.DefaultRoute handler={AdminDashboard} />
    </Router.Route>
    <Router.Route name="user-profile" path="profile" handler={UserProfile} />
    <Router.DefaultRoute handler={SsoDashboardSection} />
  </Router.Route>
);

module.exports.init = function(config) {
  require('../actions/SettingsActions').loadSettings({
    title: config.title,
    theme_color: config.theme_color,
    logo_url: config.logo_url
  });

  Router.run(routes, Router.HistoryLocation, function (Handler) {
    React.render(<Handler />, document.body);
  });
}
