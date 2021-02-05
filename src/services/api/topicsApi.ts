import axios from "axios";
import { TopicsState } from "../../store/ducks/actualTopics/contracts/state";

async function fetchTopics(): Promise<TopicsState['items']> {
    let {data} = await axios.get("/topics");
    return data;
}

export const TopicsApi = {
    fetchTopics,
}