import produce, { Draft } from 'immer';
import { TopicsActions, TopicsActionsType } from './actionCreators';

import { TopicsState, LoadingState } from './contracts/state';

const initialTopicsState: TopicsState = {
    items: [],
    loadingState: LoadingState.NEVER,
}

export const topicsReducer = produce((draft: Draft<TopicsState>, action: TopicsActions) => {

    switch (action.type) {

        case TopicsActionsType.SET_TOPICS:
            draft.items = action.payload;
            draft.loadingState = LoadingState.LOADED;
            break;

        case TopicsActionsType.SET_LOADING_STATE:
            draft.items = [];
            draft.loadingState = action.payload;
            break;

        case TopicsActionsType.FETCH_TOPICS:
            draft.loadingState = LoadingState.LOADING;
            break;
    }

}, initialTopicsState);