import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useHomeStyles } from '../../pages/Home/theme'
import { TopicsState } from '../../store/ducks/actualTopics/contracts/state'
import { selectTopicsIsLoaded, selectTopicsItems } from '../../store/ducks/actualTopics/selectors'

interface TopicProps {
    classes: ReturnType<typeof useHomeStyles>;
    title: string;
}

export const ActualTopics = ({ classes, title }: TopicProps): React.ReactElement | null => {
    const topics: TopicsState['items'] = useSelector(selectTopicsItems);
    const isLoaded: boolean = useSelector(selectTopicsIsLoaded);

    console.log(isLoaded, 'here');

    return !isLoaded ? null : (
        <Paper>
            <div className={classes.rightSidebarTrends}>
                <div className={classes.rightSidebarTrendsHeader}>
                    <Typography variant="h6">{title}</Typography>
                </div>
                <Divider component="div" />
                <List className={classes.rightSidebarListTrends}>
                    {
                        topics.map(topic => (
                            <React.Fragment key={topic._id}>
                                <Link to={`/home/search?q="${topic.name}"`}>
                                    <ListItem className={classes.rightSidebarListItem}>
                                        <ListItemText
                                            primary={topic.name}
                                            secondary={<Typography component="p" variant="body1"> {topic.count} Tweets</Typography>}>
                                        </ListItemText>
                                    </ListItem>
                                </Link>
                                <Divider component="li" />
                            </React.Fragment>
                        ))
                    }
                </List>
            </div>
        </Paper>
    )
}
