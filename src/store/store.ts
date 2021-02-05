import {createStore, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import { TopicsState } from './ducks/actualTopics/contracts/state';
import { TweetState } from './ducks/tweet/contracts/state';
import { TweetsState } from './ducks/tweets/contracts/state';

import { rootReducer } from './rootReducer';
import rootSaga from './sagas';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const sagaMiddleware = createSagaMiddleware();

export interface RootState {
  tweets: TweetsState;
  topics: TopicsState;
  tweet: TweetState;
}

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

// then run the saga
sagaMiddleware.run(rootSaga)