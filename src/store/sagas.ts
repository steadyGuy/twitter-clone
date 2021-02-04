import { all } from "redux-saga/effects";
import { watchTweets } from "./ducks/tweets/saga";

export default function* rootSaga() {
    yield all([
        watchTweets()
    ])
  }