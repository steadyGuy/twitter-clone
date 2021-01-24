import React from 'react'

import TwitterIcon from '@material-ui/icons/Twitter';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import NotificationIcon from '@material-ui/icons/NotificationsNone';
import MailIcon from '@material-ui/icons/MailOutline';
import MarkIcon from '@material-ui/icons/BookmarkBorder';
import ListIcon from '@material-ui/icons/Subject';
import ProfileIcon from '@material-ui/icons/PermIdentity';

import { useHomeStyles } from '../../pages/Home';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

interface SideMenuProps {
    classes: ReturnType<typeof useHomeStyles>;
}

export const SideMenu = ({ classes }: SideMenuProps): React.ReactElement => {
    return (
        <List className={classes.list}>
            <ListItem dense={true} className={classes.logo}>
                <IconButton aria-label="" color="primary">
                    <TwitterIcon className={classes.logoIcon} />
                </IconButton>
            </ListItem>
            <ListItem className={classes.sideMenuListItem}>
                <div>
                    <SearchIcon className={classes.sideMenuListItemIcon} />
                    <Typography className={classes.sideMenuListItemLabel} variant="h6">Поиск</Typography>
                </div>
            </ListItem>
            <ListItem className={classes.sideMenuListItem}>
                <div>
                    <NotificationIcon className={classes.sideMenuListItemIcon} />
                    <Typography className={classes.sideMenuListItemLabel} variant="h6">Уведомления</Typography>
                </div>
            </ListItem>
            <ListItem className={classes.sideMenuListItem}>
                <div>
                    <MailIcon className={classes.sideMenuListItemIcon} />
                    <Typography className={classes.sideMenuListItemLabel} variant="h6">Сообщения</Typography>
                </div>
            </ListItem>
            <ListItem className={classes.sideMenuListItem}>
                <div>
                    <MarkIcon className={classes.sideMenuListItemIcon} />
                    <Typography className={classes.sideMenuListItemLabel} variant="h6">Закладки</Typography>
                </div>
            </ListItem>
            <ListItem className={classes.sideMenuListItem}>
                <div>
                    <ListIcon className={classes.sideMenuListItemIcon} />
                    <Typography className={classes.sideMenuListItemLabel} variant="h6">Список</Typography>
                </div>
            </ListItem>
            <ListItem className={classes.sideMenuListItem}>
                <div>
                    <ProfileIcon className={classes.sideMenuListItemIcon} />
                    <Typography className={classes.sideMenuListItemLabel} variant="h6">Profile</Typography>
                </div>
            </ListItem>
            <ListItem className={classes.sideMenuListItem}>
                <Button className={classes.sideMenuTweetBtn} variant="contained" color="primary" fullWidth>Tweet</Button>
            </ListItem>
        </List>
    )
}