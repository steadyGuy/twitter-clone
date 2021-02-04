import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import { setTweets, setTweetsLoadingState, TweetsActionsType } from './actionCreators';
import { TweetsApi } from '../../../services/api/tweetsApi';
import { LoadingState } from './contracts/state';

//put like dispatch
export function* fetchTweetsRequest() {
    try {
        const data = yield call(TweetsApi.fetchTweets);
        yield put(setTweets(data));
    } catch(err) {
        yield put(setTweetsLoadingState(LoadingState.ERROR));
    }
}

export function* watchTweets() {
    yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
}