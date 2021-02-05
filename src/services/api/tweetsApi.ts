import axios from "axios";
import { TweetsState } from "../../store/ducks/tweets/contracts/state";

async function fetchTweets(): Promise<TweetsState['items']> {
    let {data} = await axios.get("/tweets");
    return data;
}

export const TweetsApi = {
    fetchTweets,
}