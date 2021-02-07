import { makeStyles, Theme } from "@material-ui/core/styles";

export const useFullTweetStyles = makeStyles((theme: Theme) => ({
    tweetHeaderUser: {
        display: 'flex',
        alignItems: 'center',
    },
    tweetUserText: {
        paddingTop: 4,
        fontSize: 24,
        lineHeight: 1.3125,
        wordBreak: 'break-word',
    }
}));
