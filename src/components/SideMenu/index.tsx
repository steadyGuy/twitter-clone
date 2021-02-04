import React from 'react'

import TwitterIcon from '@material-ui/icons/Twitter';
import TweetIcon from '@material-ui/icons/Create';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import NotificationIcon from '@material-ui/icons/NotificationsNone';
import MailIcon from '@material-ui/icons/MailOutline';
import MarkIcon from '@material-ui/icons/BookmarkBorder';
import ListIcon from '@material-ui/icons/Subject';
import ProfileIcon from '@material-ui/icons/PermIdentity';

import { useHomeStyles } from '../../pages/Home/theme';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Hidden } from '@material-ui/core';
import classNames from 'classnames';
import { ModalDialog } from '../ModalDialog';
import { AddTweetForm } from '../AddTweetForm';

interface SideMenuProps {
    classes: ReturnType<typeof useHomeStyles>;
}

export const SideMenu = ({ classes }: SideMenuProps): React.ReactElement => {

    const [addTweetDialogVisibility, setAddTweetDialogVisibility] = React.useState(false);

    const handleCloseAddTweetDialog = () => {
        setAddTweetDialogVisibility(!addTweetDialogVisibility);
    }

    return (
        <ul className={classes.list}>
            <li className={classNames(classes.logo, classes.sideMenuListItem)}>
                <IconButton aria-label="" color="primary">
                    <TwitterIcon className={classes.logoIcon} />
                </IconButton>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <SearchIcon className={classes.sideMenuListItemIcon} />
                    <Hidden mdDown>
                        <Typography className={classes.sideMenuListItemLabel} variant="h6">Поиск</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <NotificationIcon className={classes.sideMenuListItemIcon} />
                    <Hidden mdDown>
                        <Typography className={classes.sideMenuListItemLabel} variant="h6">Уведомления</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <MailIcon className={classes.sideMenuListItemIcon} />
                    <Hidden mdDown>
                        <Typography className={classes.sideMenuListItemLabel} variant="h6">Сообщения</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <MarkIcon className={classes.sideMenuListItemIcon} />
                    <Hidden mdDown>
                        <Typography className={classes.sideMenuListItemLabel} variant="h6">Закладки</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <ListIcon className={classes.sideMenuListItemIcon} />
                    <Hidden mdDown>
                        <Typography className={classes.sideMenuListItemLabel} variant="h6">Список</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <ProfileIcon className={classes.sideMenuListItemIcon} />
                    <Hidden mdDown>
                        <Typography className={classes.sideMenuListItemLabel} variant="h6">Profile</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <Button
                    onClick={handleCloseAddTweetDialog}
                    className={classes.sideMenuTweetBtn}
                    variant="contained"
                    color="primary">
                    <Hidden mdDown>
                        Tweet
                    </Hidden>
                    <Hidden lgUp>
                        <TweetIcon />
                    </Hidden>
                </Button>
                <ModalDialog visible={addTweetDialogVisibility} handleClose={handleCloseAddTweetDialog}>
                    <div className="wrapper" style={{ width: 550 }}>
                        <AddTweetForm maxRows={15} classes={classes} />
                    </div>
                </ModalDialog>
            </li>
        </ul>
    )
}