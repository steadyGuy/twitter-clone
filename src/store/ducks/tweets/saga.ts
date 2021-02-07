import { call, put, takeEvery } from 'redux-saga/effects'

import { addTweet, setAddTweetState, setTweets, setTweetsLoadingState } from './actionCreators';
import { TweetsApi } from '../../../services/api/tweetsApi';
import { AddTweetLoadingState, LoadingState } from './contracts/state';
import { FetchAddTweetActionInterface, TweetsActionsType } from './contracts/actionTypes';

//put like dispatch
export function* fetchTweetsRequest() {
    try {
        const data = yield call(TweetsApi.fetchTweets);
        yield put(setTweets(data)); 
    } catch (err) {
        yield put(setTweetsLoadingState(LoadingState.ERROR));
    }
}

export function* fetchAddTweetsRequest({ payload: text }: FetchAddTweetActionInterface) {
    try {
        const data = {
            _id: Math.random().toString(36).substr(2),
            text,
            user: {
                fullName: "Stas BagretsovSocks",
                nickName: "stassonmars",
                avatarUrl: `https://source.unsplash.com/random/100x100?2`,
            }
        }
        const tweet = yield call(TweetsApi.addTweet, data);
        yield put(addTweet(tweet));
    } catch (err) {
        yield put(setAddTweetState(AddTweetLoadingState.ERROR));
    }
}

export function* watchTweets() {
    yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
    yield takeEvery(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetsRequest);
}