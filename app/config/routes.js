var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require('../components/home/Home');
var Post = require('../components/Post');
var Friend = require('../components/Friend');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='/post' component={Post} url="http://localhost:3000/posts" pollInterval={2000} />
      <Route path='/friend' component={Friend} />
    </Route>
  </Router>
);

module.exports = routes;