var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link
var MainWrapper = require('./../MainWrapper');
var PostBox = require('./../post/PostBox');
var SearchForm = require('./SearchForm');

var Home = React.createClass({
  getInitialState:function () {
    return {
      url: 'http://localhost:3000/posts/today',
      heading: "Today's Posts" }
  },
  handleSubmitSearch: function (criteria) {
    var query = criteria.abn + '/' + criteria.date;
    this.setState({
      url: 'http://localhost:3000/posts/search/' + query,
      heading: 'Results for ABN ' + criteria.abn + ' on ' + criteria.date});
  },
  render: function () {
    return (
      <div className="home">
        <MainWrapper>
          <h1>Claim GST</h1>
          <p className='lead'>Write a slogan here</p>
          <SearchForm
            onSubmitSearch={this.handleSubmitSearch} />
        </MainWrapper>
        <h3>{this.state.heading}</h3>
        <PostBox
          url={this.state.url}
          pollInterval={2000} />
      </div>
    )
  }
});

module.exports = Home;