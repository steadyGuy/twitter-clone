import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Tweet } from '../../../components/Tweet'
import { fetchTweet, setTweet } from '../../../store/ducks/tweet/actionCreators';
import { selectTweetData, selectTweetIsLoaded } from '../../../store/ducks/tweet/selectors';
import { useHomeStyles } from '../theme';

export const FullTweet: React.FC = (): React.ReactElement | null => {
    const classes = useHomeStyles();
    const dispatch = useDispatch();
    const tweetData = useSelector(selectTweetData);
    const loaded = useSelector(selectTweetIsLoaded);

    const { id }: { id: string } = useParams();

    React.useEffect(() => {
        dispatch(fetchTweet(id));

        return () => {
            dispatch(setTweet(null));
        }
    }, [dispatch, id])

    return (
        !loaded || !tweetData ? <div className={classes.tweetsLoaderCentered}><CircularProgress /></div> : <Tweet classes={classes} {...tweetData}></Tweet>
    )
}
