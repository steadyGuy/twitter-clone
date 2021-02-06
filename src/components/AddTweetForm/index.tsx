import React from 'react'

import Avatar from '@material-ui/core/Avatar';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import ImageIcon from '@material-ui/icons/Wallpaper';
import EmojiIcon from '@material-ui/icons/SentimentSatisfied';
import GifIcon from '@material-ui/icons/Gif';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import { useHomeStyles } from '../../pages/Home/theme';
import { useDispatch } from 'react-redux';
import { fetchAddTweet } from '../../store/ducks/tweets/actionCreators';

interface AddTweetFormProps {
    classes: ReturnType<typeof useHomeStyles>,
    maxRows?: number;
}

let showTextCount: boolean = false;

export const AddTweetForm = ({ classes, maxRows }: AddTweetFormProps): React.ReactElement => {

    const dispatch = useDispatch();

    const TEXT_LIMIT = 280;

    const [text, setText] = React.useState<string>('');
    const textLimitPercent = 100 * text.length / 280;
    const textCount = TEXT_LIMIT - text.length;

    showTextCount = textCount <= 20 ? true : false;

    const handleChangeTextArea = (e: React.FormEvent<HTMLTextAreaElement>): void => {
        setText(e.currentTarget.value);
    }

    const handleTweet = (): void => {
        dispatch(fetchAddTweet(text));
        setText('');
    }


    return (
        <div className={classes.addForm}>
            <Avatar className={classes.tweetAvatar} alt='Privet Mir' src="" />
            <div className={classes.addFormBody}>
                <TextareaAutosize
                    aria-label="empty textarea"
                    placeholder="What's happening?"
                    className={classes.addFormTextarea}
                    rowsMin={1}
                    onChange={handleChangeTextArea}
                    value={text}
                    rowsMax={maxRows}
                />
                <div className={classes.addFormBottom}>
                    <div className={classes.addFormBottomIcons}>
                        <IconButton size="small" >
                            <ImageIcon color="primary" />
                        </IconButton>
                        <IconButton size="small" >
                            <GifIcon color="primary" />
                        </IconButton>
                        <IconButton size="small">
                            <EmojiIcon color="primary" />
                        </IconButton>
                    </div>
                    <div className={classes.addFormBottomRight}>
                        {
                            text && <div className={classes.addFormCircleProgressBar}>
                                {showTextCount && <span>{textCount}</span>}
                                <CircularProgress
                                    variant="determinate"
                                    size={20}
                                    value={textLimitPercent >= 100 ? 100 : textLimitPercent}
                                    style={(text.length >= TEXT_LIMIT) ? { color: 'red' } : undefined}
                                    thickness={5} />
                                <CircularProgress
                                    variant="determinate"
                                    size={20}
                                    value={100}
                                    thickness={5}
                                    style={{ color: 'rgba(0,0,0,0.1)' }} />
                            </div>
                        }
                        <Button onClick={handleTweet} color="primary" variant="contained">Tweet</Button>
                    </div>
                </div>

            </div>
        </div>
    )
}