var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link
var MainWrapper = require('./../MainWrapper');
var PostBox = require('./../post/PostBox');
var SearchForm = require('./SearchForm');

function Home () {
  return (
    <div className="home">
      <MainWrapper>
        <h1>Claim GST</h1>
        <p className='lead'>Write a slogan here</p>
        <SearchForm />
      </MainWrapper>
      <h3>Today's Posts</h3>
      <PostBox url="http://localhost:3000/posts/today" pollInterval={2000} />
    </div>
  )
}

module.exports = Home;