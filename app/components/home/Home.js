import React, { Component } from 'react';
import ReactRouter from 'react-router';
import store from '../../store';
import { searchPosts } from '../../actions/postsAction';
import PostBox from './../post/PostBox';
import SearchForm from './SearchForm';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: "Today's Posts"
    }
  }

  handleSubmitSearch(criteria) {
    var query = criteria.abn + '/' + criteria.date;
    this.setState({
      heading: 'Results for ABN ' + criteria.abn + ' on ' + criteria.date
    });
    store.dispatch(searchPosts(criteria.abn, criteria.date))
  }

  render() {
    return (
      <div className="home">
        <div className="jumbotron col-sm-12 text-center">
          <h1>Claim GST</h1>
          <p className='lead'>Write a slogan here</p>
          <SearchForm
            onSubmitSearch={this.handleSubmitSearch.bind(this)} />
        </div>
        <h3>{this.state.heading}</h3>
        <PostBox />
      </div>
    )
  }
}

export default Home;