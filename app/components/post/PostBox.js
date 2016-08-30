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
    return (
      <div className="postBox">
        <PostList data={this.props.posts} />
      </div>
    );
  }
};

const mapStateToProps = function(store) {
  return {
    posts: store.postsState.posts
  };
}

export default connect(mapStateToProps)(PostBox);