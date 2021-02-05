import axios from "axios";
import { TweetState } from "../../store/ducks/tweet/contracts/state";
import { TweetsState } from "../../store/ducks/tweets/contracts/state";

async function fetchTweets(): Promise<TweetsState['items']> {
    let {data} = await axios.get("/tweets");
    return data;
}

async function fetchTweetData(_id: string): Promise<TweetState['data']> {
    let { data } = await axios.get(`/tweets?_id=${_id}`);
    return data[0];
}

export const TweetsApi = {
    fetchTweets,
    fetchTweetData,
}