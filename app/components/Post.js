var React = require('react');
var $ = require('jquery');
var PostBox = require('./post/PostBox');
var PostForm = require('./post/PostForm');

var Post = React.createClass({
  render: function() {
    return (
      <div className="postBox">
        <PostForm onPostSubmit={this.handlePostSubmit} />
        <h1>Posts</h1>
        <PostBox url={this.props.route.url} interval={this.props.route.interval} />
      </div>
    );
  }
});

module.exports = Post;