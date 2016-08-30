import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../store';
import PostList from './PostList';
import { fetchPosts } from '../../actions/postsAction';

class PostBox extends Component {
  componentDidMount() {
    store.dispatch(fetchPosts())
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
  const { posts, isFetching } = store.postsState
  return {
    posts,
    isFetching
  };
}

export default connect(mapStateToProps)(PostBox);