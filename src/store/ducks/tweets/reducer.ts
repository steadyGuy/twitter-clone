import produce, { Draft } from 'immer';
import { TweetsActions } from './actionCreators';
import { TweetsActionsType } from './contracts/actionTypes';

import { TweetsState, LoadingState, AddTweetLoadingState } from './contracts/state';

const initialTweetState: TweetsState = {
    items: [],
    loadingState: LoadingState.NEVER,
    addTweetState: AddTweetLoadingState.NEVER,
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

        case TweetsActionsType.ADD_TWEET:
            draft.items.unshift(action.payload);
            //TODO: BAD-CODING
            draft.addTweetState = AddTweetLoadingState.NEVER;
            break;

        case TweetsActionsType.FETCH_ADD_TWEET:
            draft.addTweetState = AddTweetLoadingState.LOADING;
            break;

        case TweetsActionsType.SET_ADD_TWEET_STATE:
            draft.addTweetState = AddTweetLoadingState.ERROR;
            break;

    }

}, initialTweetState);