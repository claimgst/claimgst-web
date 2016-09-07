import { expect } from 'chai'
import { Map } from 'immutable';
import * as actions from '../../src/actions/postsAction';
import * as reducers from '../../src/reducers/postsReducer';
import * as types from '../../src/constants/postsConst';

describe('[Redux] - Posts: actions', () => {
  it('should create an action when fetching posts', () => {
    const expectedAction = {
      type: types.REQUEST_POSTS
    }
    expect(actions.requestPosts()).to.deep.equal(expectedAction);
  });

  it('should create an action when fetched the posts successfully', () => {
    const posts = Map({
      abn: "12004044937",
      airport: "SYD",
      amount: "28.31",
      city: "SYD",
      country: "AU",
      created_at: "2016-09-02T11:23:14.342Z",
      date: "2016-09-07T12:13:56.000Z",
      id: 8,
      updated_at: "2016-09-02T11:23:14.342Z",
      user_id: 8
    });

    const expectedAction = {
      type: types.RECEIVE_POSTS,
      posts
    };

    expect(actions.receivePosts(posts)).to.deep.equal(expectedAction);
  });
});

describe('[Redux] - Posts: reducers', () => {
  it('should return the initial state', () => {
    const expectedReducer = {
      posts: [],
      isFetching: false
    }
    expect(
      reducers.default(undefined, {})
    ).to.deep.equal(expectedReducer);
  });

  it('should handle REQUEST_POSTS', () => {
    const expectedReducer = {
      posts: [],
      isFetching: true
    }
    expect(
      reducers.default(undefined, {
        type: types.REQUEST_POSTS
      })
    ).to.deep.equal(expectedReducer);
  });
});