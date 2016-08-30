import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../store';
import $ from 'jquery';
import PostList from './PostList';
import { fetchPosts } from '../../actions/postsAction';

class PostBox extends Component {
  componentDidMount() {
    store.dispatch(fetchPosts('http://localhost:3000/posts/today'))
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
  return {
    posts: store.postsState.posts,
    isFetching: store.postsState.isFetching
  };
}

export default connect(mapStateToProps)(PostBox);