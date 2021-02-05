import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import { setTopics, setTopicsLoadingState, TopicsActionsType } from './actionCreators';
import { TopicsApi } from '../../../services/api/topicsApi';
import { LoadingState } from './contracts/state';

//put like dispatch
export function* fetchTopicsRequest() {
    try {
        const data = yield call(TopicsApi.fetchTopics);
        yield put(setTopics(data));
    } catch (err) {
        yield put(setTopicsLoadingState(LoadingState.ERROR));
    }
}

export function* watchTopics() {
    yield takeEvery(TopicsActionsType.FETCH_TOPICS, fetchTopicsRequest);
}