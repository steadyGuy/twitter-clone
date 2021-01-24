import { Grid, makeStyles, Typography, withStyles } from '@material-ui/core'
import React from 'react'
import Container from '@material-ui/core/Container';
import InputBase from '@material-ui/core/InputBase';

import grey from '@material-ui/core/colors/grey';
import { Tweet } from '../components/Tweet';
import Paper from '@material-ui/core/Paper';
import { SideMenu } from '../components/SideMenu';

export const useHomeStyles = makeStyles((theme) => ({
    wrapper: {
        height: '100vh',
    },
    logo: {
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
    },
    logoIcon: {
        fontSize: 33,
        padding: 0
    },
    sideMenuListItemLabel: {
        fontWeight: 700,
        fontSize: 20,
        marginLeft: 2,
    },
    sideMenuListItemIcon: {
        fontSize: 26,
    },
    list: {
        paddingTop: 2,
        maxWidth: 238,
    },
    tweetsWrapper: {
        borderRadius: 0,
        height: '100%',
        borderTop: 0,
        borderBottom: 0,
    },
    tweetsHeader: {
        borderLeft: 'none',
        borderRight: 'none',
        borderTop: 'none',
        borderRadius: 0,
        fontSize: 12,
        padding: '12px 16px',
        '& h6': {
            fontWeight: 800,
        }
    },
    tweetUserName: {
        color: grey[500],
    },
    tweetFooter: {
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: 450,
        marginLeft: -10,
    },
    tweet: {
        paddingBottom: 0,
        '&:hover': {
            backgroundColor: 'rgb(248,248,248)',
            cursor: 'pointer',
        }
    },
    tweetAvatar: {
        width: theme.spacing(5),
        height: theme.spacing(5),
    },
    sideMenuListItem: {
        padding: 0,
        cursor: 'pointer',
        '&:hover': {
            '& div': {
                backgroundColor: 'rgba(29, 161, 242, 0.1)',
                '& h6': {
                    color: theme.palette.primary.main,
                },
                '& svg path': {
                    color: theme.palette.primary.main,
                },
            },
        },
        '& div': {
            display: 'inline-flex',
            alignItems: 'center',
            padding: '0 25px 0 10px',
            borderRadius: 30,
            height: 49,
            marginBottom: 5,
            transition: 'background-color 0.1s ease-in-out',
            '& h6': {
                paddingLeft: 14,
                fontSize: 18,
                transition: 'background-color 0.1s ease-in-out',
            },
            '& svg': {
                transition: 'background-color 0.1s ease-in-out',
            }
        }
    },
    sideMenuTweetBtn: {
        padding: theme.spacing(3),
        marginTop: theme.spacing(1)
    }
}));

const SearchTextField = withStyles({
    input: {
        borderRadius: 30,
        backgroundColor: '#EBEEF0',
        padding: 0,
        height: 41,
    },
})(InputBase);

export const Home = () => {
    const classes = useHomeStyles();
    return (
        <Container className={classes.wrapper} maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item sm={3} xs={1}>
                    <SideMenu classes={classes} />
                </Grid>
                <Grid item sm={6} xs={7}>
                    <Paper className={classes.tweetsWrapper} variant="outlined">
                        <Paper className={classes.tweetsHeader} variant="outlined">
                            <Typography variant="h6">Home</Typography>
                        </Paper>
                        {
                            new Array(20).fill(<Tweet
                                classes={classes}
                                user={{
                                    fullName: "Archakov Dennis",
                                    nickName: "archakov_im",
                                    avatarUrl: "https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80"
                                }}
                                text="“Once COVID is over” is starting to sound a lot like “once I’ve launched this side project”" />)
                        }
                    </Paper>
                </Grid>
                <Grid item sm={3} xs={4}>
                    <SearchTextField
                        id="outlined-helperText"
                        defaultValue="Default Value"
                        fullWidth
                        placeholder="Поиск по твиттеру"
                    />
                </Grid>
            </Grid>
        </Container>
    )
}
