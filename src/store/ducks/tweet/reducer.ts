import produce, { Draft } from 'immer';
import { TweetActions } from './actionCreators';
import { TweetActionsType } from './contracts/actionTypes';

import { LoadingState, TweetState, Tweet } from './contracts/state';

const initialTweetState: TweetState = {
    data: null,
    loadingState: LoadingState.NEVER,
}

export const tweetReducer = produce((draft: Draft<TweetState>, action: TweetActions) => {

    switch (action.type) {
        case TweetActionsType.SET_TWEET:
            draft.data = action.payload;
            draft.loadingState = LoadingState.LOADED;
            break;

        case TweetActionsType.SET_LOADING_STATE:
            draft.data = null;
            draft.loadingState = action.payload;
            break;

        case TweetActionsType.FETCH_TWEET:
            draft.loadingState = LoadingState.LOADING;
            break;
    }

}, initialTweetState);