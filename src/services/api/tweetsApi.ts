import axios from "axios";
import { TweetsState } from "../../store/ducks/tweets/contracts/state";

async function fetchTweets(): Promise<TweetsState['items']> {
    let {data} = await axios.get("https://trycode.pw/c/5PDMQ.json");
    return data;
}

export const TweetsApi = {
    fetchTweets,
}