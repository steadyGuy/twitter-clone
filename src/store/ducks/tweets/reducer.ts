import produce, { Draft } from 'immer';
import { TweetsActions, TweetsActionsType } from './actionCreators';

import { TweetsState, LoadingState } from './contracts/state';

const initialTweetState: TweetsState = {
    items: [],
    loadingState: LoadingState.NEVER,
}

export const tweetsReducer = produce((draft: Draft<TweetsState>, action: TweetsActions) => {

    switch (action.type) {

        case TweetsActionsType.SET_TWEETS:
            draft.items = action.payload;
            draft.loadingState = LoadingState.LOADED;
            break;

        case TweetsActionsType.SET_LOADING_STATE:
            draft.items = [];
            draft.loadingState = action.payload;
            break;

        case TweetsActionsType.FETCH_TWEETS:
            draft.loadingState = LoadingState.LOADING;
            break;

        // case TweetsActionsType.ADD_TWEET:
        //     draft.items.push(action.payload);
        //     draft.loadingState = LoadingState.LOADED;
        //     break;
        // case TweetsActionsType.FETCH_ADD_TWEET:
        //     draft.loadingState = LoadingState.LOADING;
        //     break;
    }

}, initialTweetState);