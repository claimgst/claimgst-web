var React = require('react');
var PostItem = require('./PostItem');

var PostList = React.createClass({
  render: function() {
    var postNodes = this.props.data.map(function(post) {
      return (
        <PostItem post={post} key={post.id} />
      );
    });
    return (
      <div className="list-group">
        {postNodes}
      </div>
    );
  }
});

module.exports = PostList;