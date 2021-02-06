import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import { addTweet, FetchAddTweetActionInterface, setTweets, setTweetsLoadingState, TweetsActionsType } from './actionCreators';
import { TweetsApi } from '../../../services/api/tweetsApi';
import { LoadingState } from './contracts/state';

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
                fullName: "Randolph Clay",
                nickName: "vertide",
                avatarUrl: `https://source.unsplash.com/random/100x100?2`,
            }
        }
        const tweet = yield call(TweetsApi.addTweet, data);
        yield put(addTweet(tweet));
    } catch (err) {
        yield put(setTweetsLoadingState(LoadingState.ERROR));
    }
}

export function* watchTweets() {
    yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
    yield takeEvery(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetsRequest);
}