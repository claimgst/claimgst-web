import React, { Component, PropTypes } from 'react';
import PostItem from './PostItem';

class PostList extends Component {
  render() {
    var postNodes = this.props.data.map(function(post) {
      return (
        <PostItem post={post} key={post.id} />
      );
    });
    return (
      <div className="list-group">
        {postNodes}
      </div>
    )
  }
};

PostList.propTypes = {
  data: PropTypes.array.isRequired
}

export default PostList;