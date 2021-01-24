import React from 'react'

import CommentIcon from '@material-ui/icons/ModeCommentOutlined';
import ShareIcon from '@material-ui/icons/Repeat';
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';


import { useHomeStyles } from '../../pages/Home'
import classNames from 'classnames';

interface TweetProps {
    classes: ReturnType<typeof useHomeStyles>;
    user: {
        fullName: string;
        nickName: string;
        avatarUrl: string;
    },
    text: string;
}

export const Tweet = ({ text, user, classes }: TweetProps): React.ReactElement => {
    return (
            <Paper className={classNames(classes.tweetsHeader, classes.tweet)} variant="outlined">
                <Grid container spacing={3}>
                    <Grid item xs={1}>
                        <Avatar className={classes.tweetAvatar} alt={`User avatar ${user.fullName}`} src={user.avatarUrl} />
                    </Grid>
                    <Grid item xs={11}>
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
                    </Grid>
                </Grid>
        </Paper>
    )
}
