import { call, put, takeEvery } from 'redux-saga/effects'

import { LoadingState } from './contracts/state';
import { FetchTweetActionInterface, TweetActionsType } from './contracts/actionTypes';
import { TweetsApi } from '../../../services/api/tweetsApi';
import { setTweet, setTweetLoadingState } from './actionCreators';

//put like dispatch
export function* fetchTweetDataRequest({ payload: tweetId }: FetchTweetActionInterface) {
    try {
        const data = yield call(TweetsApi.fetchTweetData, tweetId);
        yield put(setTweet(data));
    } catch (err) {
        yield put(setTweetLoadingState(LoadingState.ERROR));
    }
}

export function* watchTweet() {
    yield takeEvery(TweetActionsType.FETCH_TWEET, fetchTweetDataRequest);
}