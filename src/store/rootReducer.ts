import {combineReducers} from 'redux';
import { topicsReducer } from './ducks/actualTopics/reducer';
import { tweetsReducer } from './ducks/tweets/reducer';

export const rootReducer = combineReducers({
    tweets: tweetsReducer,
    topics: topicsReducer,
})