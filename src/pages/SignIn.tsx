import React from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import MessageIcon from '@material-ui/icons/ModeCommentOutlined';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';

import { AuthDialog } from "../components/AuthDialog";
import TextField from '@material-ui/core/TextField';
export const useStylesSignIn = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        height: 'calc(100vh - 80px)'
    },
    blueSide: {
        backgroundColor: 'rgb(116, 202, 254)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 50%',
        position: 'relative',
        overflow: 'hidden',
    },
    blueSideList: {
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        maxWidth: 380,
        position: 'relative',
        paddingBottom: 15,
        paddingTop: 25,
        '& h6': {
            display: 'flex',
            fontSize: 19,
            alignItems: 'center',
            color: '#fff',
            fontWeight: 700,
            overflowWrap: 'break-word'
        },
    },
    blueSideListItem: {
        marginBottom: 40,
    },
    blueSideListIcon: {
        fontSize: 32,
        marginRight: 15,
    },
    blueSideBgIcon: {
        position: 'absolute',
        left: '73%',
        top: '53%',
        transform: 'translate(-50%, -50%)',
        width: '195%',
        height: '195%',
    },
    loginSide: {
        display: 'flex',
        flex: '0 0 50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginSideTwitterIcon: {
        width: 48,
        height: 48
    },
    loginSideWrapper: {
        maxWidth: 380
    },
    loginSideTitle: {
        fontWeight: 700,
        fontSize: 30,
        marginBottom: 72,
        marginTop: 26,
    },
    loginSideRegisterBtn: {
        marginTop: 15,
        marginBottom: 16
    },
    loginSideField: {
        marginBottom: 22
    },
    authFormControl: {
        marginBottom: theme.spacing(2)
    }
}));

export const SignIn: React.FC = () => {
    const classes = useStylesSignIn();
    const [visibility, setVisibilityDialog] = React.useState<'signIn' | 'signUp'>();

    const handleClickOpenSignIn = (): void => {
        setVisibilityDialog('signIn');
    }

    const handleClickOpenSignUp = (): void => {
        setVisibilityDialog('signUp');
    }

    const handleCloseAuthDialog = (): void => {
        setVisibilityDialog(undefined);
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.blueSide}>
                <TwitterIcon className={classes.blueSideBgIcon} color="primary" />
                <ul className={classes.blueSideList}>
                    <li className={classes.blueSideListItem}>
                        <Typography variant="h6">
                            <SearchIcon className={classes.blueSideListIcon} /> Читайте о том, что вам интересно.
                        </Typography>
                    </li>
                    <li className={classes.blueSideListItem}>
                        <Typography variant="h6">
                            <PeopleOutlineIcon className={classes.blueSideListIcon} />Узнайте, о чем говорят в мире.
                        </Typography>
                    </li>
                    <li className={classes.blueSideListItem}>
                        <Typography variant="h6">
                            <MessageIcon className={classes.blueSideListIcon} />Присоединяйтесь к общению.
                        </Typography>
                    </li>
                </ul>
            </div>
            <div className={classes.loginSide}>
                <div className={classes.loginSideWrapper}>
                    <TwitterIcon className={classes.loginSideTwitterIcon} color="primary" />
                    <Typography variant="h4" className={classes.loginSideTitle}>Узнайте, что происходит в мире прямо сейчас</Typography>
                    <Typography><b>Присоединяйтесь к Твиттеру прямо сейчас!</b></Typography>
                    <Button onClick={handleClickOpenSignUp} className={classes.loginSideRegisterBtn} variant="contained" color="primary" fullWidth>Зарегистрироваться</Button>
                    <Button onClick={handleClickOpenSignIn} variant="outlined" color="primary" fullWidth>Войти</Button>
                    <AuthDialog title="Войти в Твиттер" handleClose={handleCloseAuthDialog} visible={visibility === 'signIn'}>
                        <FormControl className={classes.authFormControl} component="fieldset" fullWidth>
                            <FormGroup aria-label="position" row>
                                <TextField
                                    className={classes.loginSideField}
                                    autoFocus
                                    id="email"
                                    fullWidth
                                    type="email"
                                    label="E-mail"
                                    variant="outlined"
                                />
                                <TextField
                                    className={classes.loginSideField}
                                    id="password"
                                    fullWidth
                                    type="password"
                                    label="Пароль"
                                    variant="outlined"
                                />
                            </FormGroup>
                            <Button onClick={handleClickOpenSignIn} variant="contained" color="primary" fullWidth>Войти</Button>
                        </FormControl>
                    </AuthDialog>
                    <AuthDialog title="Создайте учетную запись" handleClose={handleCloseAuthDialog} visible={visibility === 'signUp'}>
                        <FormControl className={classes.authFormControl} component="fieldset" fullWidth>
                            <FormGroup aria-label="position" row>
                                <TextField
                                    className={classes.loginSideField}
                                    autoFocus
                                    id="name"
                                    fullWidth
                                    type="text"
                                    label="Имя"
                                    variant="outlined"
                                />
                                <TextField
                                    className={classes.loginSideField}
                                    id="email"
                                    fullWidth
                                    type="email"
                                    label="E-Mail"
                                    variant="outlined"
                                />
                                <TextField
                                    className={classes.loginSideField}
                                    id="password"
                                    fullWidth
                                    type="password"
                                    label="Пароль"
                                    variant="outlined"
                                />
                            </FormGroup>
                            <Button onClick={handleClickOpenSignUp} variant="contained" color="primary" fullWidth>Войти</Button>
                        </FormControl>
                    </AuthDialog>
                </div>
            </div>
        </div>
    );
}
