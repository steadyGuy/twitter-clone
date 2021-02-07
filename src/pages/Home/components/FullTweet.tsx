import Avatar from '@material-ui/core/Avatar';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Repeat';
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import CommentIcon from '@material-ui/icons/ModeCommentOutlined';

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchTweet, setTweet, setTweetLoadingState } from '../../../store/ducks/tweet/actionCreators';
import { LoadingState } from '../../../store/ducks/tweet/contracts/state';
import { selectTweetData, selectTweetIsLoaded, selectTweetIsLoading } from '../../../store/ducks/tweet/selectors';
import { useHomeStyles } from '../theme';
import classNames from 'classnames';
import { useFullTweetStyles } from './theme';

export const FullTweet: React.FC = (): React.ReactElement | null => {
    const classes = useHomeStyles();
    const classesT = useFullTweetStyles();
    const dispatch = useDispatch();
    const tweetData = useSelector(selectTweetData);
    const isLoading = useSelector(selectTweetIsLoading);

    const { id }: { id: string } = useParams();

    React.useEffect(() => {
        dispatch(fetchTweet(id));

        return () => {
            dispatch(setTweet(null));
            dispatch(setTweetLoadingState(LoadingState.NEVER));
        }
    }, [dispatch, id])

    if (isLoading) {
        return (
            <div className={classes.tweetsLoaderCentered}>
                <CircularProgress />
            </div>
        )
    }

    if (tweetData) {
        // return <Tweet classes={classes} {...tweetData}></Tweet>
        return (
            <div>
                <Paper variant="outlined">


                    <div className={classNames(classes.tweetsHeader, classesT.tweetHeaderUser)}>
                        <Avatar className={classes.tweetAvatar} alt={`User avatar ${tweetData.user.fullName}`} src={tweetData.user.avatarUrl} />
                        <Typography>
                            <b>{tweetData.user.fullName}</b>
                            <div>
                                <span className={classes.tweetUserName}>@{tweetData.user.nickName}</span>
                            </div>
                        </Typography>
                    </div>
                    <Typography className={classNames(classes.tweetsHeader, classesT.tweetUserText)} variant="body1">
                        {tweetData.text}
                    </Typography>
                </Paper>

            </div>
        )
    }

    return null;
}
