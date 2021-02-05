import React from 'react'

import CommentIcon from '@material-ui/icons/ModeCommentOutlined';
import ShareIcon from '@material-ui/icons/Repeat';
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';


import { useHomeStyles } from '../../pages/Home/theme'
import classNames from 'classnames';
import { Link, useRouteMatch } from 'react-router-dom';

interface TweetProps {
    _id: string;
    classes: ReturnType<typeof useHomeStyles>;
    user: {
        fullName: string;
        nickName: string;
        avatarUrl: string;
    },
    text: string;
}

export const Tweet = ({ text, user, classes, _id }: TweetProps): React.ReactElement => {

    const { url } = useRouteMatch();

    return (
        <Link className={classes.tweetWrapper} to={`${url}/tweet/${_id}`}>
            <Paper className={classNames(classes.tweetsHeader, classes.tweet)} variant="outlined">

                <Avatar className={classes.tweetAvatar} alt={`User avatar ${user.fullName}`} src={user.avatarUrl} />
                <div>
                    <Typography>
                        <b>{user.fullName}</b> <span className={classes.tweetUserName}>@{user.nickName}</span>
                        <span className={classes.tweetUserName}> · </span>
                        <span className={classes.tweetUserName}>Dec 16, 2020</span>
                    </Typography>
                    <Typography variant="body1">
                        {text}
                    </Typography>
                    <div className={classes.tweetFooter}>
                        <div>
                            <IconButton aria-label="comment">
                                <CommentIcon style={{ fontSize: 19 }} />
                            </IconButton>
                            <span>1</span>
                        </div>
                        <div>
                            <IconButton aria-label="comment">
                                <ShareIcon style={{ fontSize: 19 }} />
                            </IconButton>
                            <span>1</span>
                        </div>
                        <div>
                            <IconButton aria-label="comment">
                                <FavoriteIcon style={{ fontSize: 19 }} />
                            </IconButton>
                            <span>1</span>
                        </div>
                        <div>
                            <IconButton aria-label="comment">
                                <PublishIcon style={{ fontSize: 19 }} />
                            </IconButton>
                        </div>
                    </div>
                </div>
            </Paper>
        </Link>
    )
}
