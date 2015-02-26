var React = require('react');


var ApplicationItem = React.createClass({
  render: function() {
    var app = this.props.app;

    return (
      <div className="app">
        <div className="mui-paper mui-z-depth-3 mui-rounded"><a href={app.login_url}><img src={app.logo_url} /></a></div>
        <a className="name" href={app.login_url}>{app.name}</a>
      </div>
    );
  }
});

module.exports = ApplicationItem;
