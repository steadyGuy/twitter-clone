import { all } from "redux-saga/effects";
import { watchTopics } from "./ducks/actualTopics/saga";
import { watchTweets } from "./ducks/tweets/saga";

export default function* rootSaga() {
    yield all([
        watchTweets(),
        watchTopics(),
    ])
}