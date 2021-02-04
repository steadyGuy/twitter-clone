import { grey } from "@material-ui/core/colors";
import { makeStyles, Theme } from "@material-ui/core/styles";

export const useHomeStyles = makeStyles((theme: Theme) => ({
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
        listStyleType: 'none',
        padding: 0,
        margin: 0,
        position: 'sticky',
        top: 0,
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
        zIndex: 100,
        '& h6': {
            fontWeight: 800,
        }
    },
    tweetsLoaderCentered: {
        textAlign: 'center',
        marginTop: 80,
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
        display: 'flex',
        '&:hover': {
            backgroundColor: 'rgb(248,248,248)',
            cursor: 'pointer',
        }
    },
    tweetHeaderSticky: {
        position: 'sticky',
        top: 0,
    },
    tweetAvatar: {
        marginRight: 10,
        width: theme.spacing(6),
        height: theme.spacing(6),
    },
    sideMenuListItem: {
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
            padding: '0 12px 0 12px',
            borderRadius: 30,
            height: 49,
            marginBottom: 5,
            transition: 'background-color 0.1s ease-in-out',
            '& h6': {
                paddingLeft: 14,
                fontSize: 18,
                transition: 'background-color 0.1s ease-in-out',
                paddingRight: 15,
            },
            '& svg': {
                transition: 'background-color 0.1s ease-in-out',
            }
        }
    },
    sideMenuTweetBtn: {
        padding: theme.spacing(3),
        marginTop: theme.spacing(1),
        width: '100%',
    },
    addForm: {
        display: 'flex',
        width: '100%',
    },
    addFormIndentity: {
        padding: '12px 16px',
    },
    addFormTextarea: {
        width: '100%',
        border: 'none',
        fontSize: 20,
        fontFamily: 'inherit',
        resize: 'none',
        paddingBottom: 18,
        paddingTop: 10,
        color: '#0F1419',
        '&:focus': {
            outline: 'none',
        },
        '&::placeholder': {
            color: 'rgb(91,112,131)',
        }
    },
    addFormBody: {
        width: '100%',
    },
    addFormBottom: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    addFormBottomIcons: {
        '& svg': {
            fontSize: 24,
        },
        '& button': {
            padding: 7,
            '&:first-child': {
                marginLeft: -7,
            },
        }
    },
    addFormBottomRight: {
        display: 'flex',
        alignItems: 'center',
    },
    addFormBottomLine: {
        height: 10,
        backgroundColor: '#F7F9FA',
        borderTop: 'solid 1px #EBEEF0',
        borderBottom: 'solid 1px #EBEEF0',
    },
    addFormCircleProgressBar: {
        position: 'relative',
        width: 20,
        height: 20,
        margin: '0 10px',
        '& .MuiCircularProgress-root': {
            position: 'absolute',
        }
    },
    rightSidebar: {
        position: 'sticky',
        top: 0,
        paddingTop: 6,
    },
    rightSidebarSearch: {
        marginBottom: 15,
    },
    rightSidebarTrends: {
        backgroundColor: '#F7F9FA',
        padding: '8px 0 4px 0',
        borderRadius: 16,
        '& h6': {
            paddingLeft: 15,
        }
    },
    rightSidebarTrendsHeader: {
        '& h6': {
            fontWeight: 800,
            fontSize: 19,
            paddingBottom: 8,
        },
    },
    rightSidebarListTrends: {
        paddingTop: 0,
    },
    rightSidebarListItem: {
        paddingLeft: 15,
        cursor: 'pointer',
        transition: 'background-color 0.1s ease-in-out',
        '&:hover': {
            backgroundColor: '#edf3f6'
        },
        '& span': {
            fontWeight: 700,
        },
        '& p': {
            fontSize: 13,
            paddingTop: 5,
            color: '#6D8091',
        }
    },
    [theme.breakpoints.down('md')]: {
        list: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
        },
        sideMenuTweetBtn: {
            padding: 0,
            minWidth: 49,
            minHeight: 49,
            borderRadius: 49,
        }
    },
}));
