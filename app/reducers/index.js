import { combineReducers } from 'redux';

// Reducers
import postsReducer from './postsReducer';

// Combine Reducers
var reducers = combineReducers({
    postsState: postsReducer
});

export default reducers;