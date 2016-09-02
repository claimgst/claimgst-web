import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostList from './PostList';
import { fetchPosts } from '../../actions/postsAction';

class PostBox extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts())
  }

  render() {
    const { isFetching, posts } = this.props
    return (
      <div className="postBox">
      {isFetching
        ? <h2>Loading...</h2>
        : <PostList data={posts} />
      }
      </div>
    );
  }
};

const mapStateToProps = function(store) {
  const { posts, isFetching } = store.posts
  return {
    posts,
    isFetching
  };
}

export default connect(mapStateToProps)(PostBox);