import { Grid, ListItem, Typography } from '@material-ui/core'
import React from 'react'
import Container from '@material-ui/core/Container';
import { useDispatch, useSelector } from 'react-redux';

import { Tweet } from '../../components/Tweet';
import Paper from '@material-ui/core/Paper';
import { SideMenu } from '../../components/SideMenu';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import CircularProgress from '@material-ui/core/CircularProgress';
import classNames from 'classnames';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { AddTweetForm } from '../../components/AddTweetForm';
import { useHomeStyles } from './theme';
import { SearchTextField } from '../../components/SearchTextField';
import { fetchTweets } from '../../store/ducks/tweets/actionCreators';
import { selectTweetsIsLoading, selectTweetsItems } from '../../store/ducks/tweets/selectors';


export const Home = () => {
    const classes = useHomeStyles();
    const dispatch = useDispatch();
    const tweets = useSelector(selectTweetsItems);
    const isLoading = useSelector(selectTweetsIsLoading);

    const handleFetchTweets = () => {
        dispatch(fetchTweets());
    }

    React.useEffect(() => {
        handleFetchTweets();
    }, [dispatch]);

    return (
        <Container className={classes.wrapper} maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item md={1} lg={3}>
                    <SideMenu classes={classes} />
                </Grid>
                <Grid item md={7} lg={6}>
                    <Paper className={classes.tweetsWrapper} variant="outlined">
                        <Paper className={classNames(classes.tweetsHeader, classes.tweetHeaderSticky)} variant="outlined">
                            <Typography variant="h6">Home</Typography>
                        </Paper>

                        <Paper>
                            <div className={classes.addFormIndentity}>
                                <AddTweetForm classes={classes} />
                            </div>
                            <div className={classes.addFormBottomLine}></div>
                        </Paper>

                        {
                            isLoading ? <div className={classes.tweetsLoaderCentered}><CircularProgress /></div> :
                                tweets.map((tweet) => (<Tweet key={tweet._id} classes={classes} user={tweet.user} text={tweet.text} />))
                        }
                    </Paper>
                </Grid>
                <Grid item md={4} lg={3}>
                    <div className={classes.rightSidebar}>
                        <SearchTextField
                            className={classes.rightSidebarSearch}
                            fullWidth
                            variant="outlined"
                            placeholder="Search Twitter"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Paper>
                            <div className={classes.rightSidebarTrends}>
                                <div className={classes.rightSidebarTrendsHeader}>
                                    <Typography variant="h6">Trends for you</Typography>
                                </div>
                                <Divider component="div" />
                                <List className={classes.rightSidebarListTrends}>

                                    {
                                        new Array(3).fill(
                                            <React.Fragment>
                                                <ListItem className={classes.rightSidebarListItem}>
                                                    <ListItemText
                                                        primary="Украина"
                                                        secondary={<Typography component="p" variant="body1"> 3,136 Tweets</Typography>}>
                                                    </ListItemText>
                                                </ListItem>
                                                <Divider component="li" />
                                            </React.Fragment>
                                        )
                                    }
                                </List>
                            </div>
                        </Paper>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}