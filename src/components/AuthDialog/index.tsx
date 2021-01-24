import React from 'react'

import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import Dialog from '@material-ui/core/Dialog';
import { useStylesSignIn } from '../../pages/SignIn';

interface AuthDialogProps {
    title: string;
    children: React.ReactNode;
    classes?: ReturnType<typeof useStylesSignIn>;
    visible: boolean;
    handleClose: () => void;
}

export const AuthDialog: React.FC<AuthDialogProps> = ({ title, handleClose, visible = false, children }) => {
    return (
        <Dialog open={visible} onClose={handleClose}>
            <DialogTitle id="form-dialog-title">
                <IconButton
                    onClick={handleClose}
                    color="secondary"
                    aria-label="close">
                    <CloseIcon style={{ fontSize: 26 }}></CloseIcon>
                </IconButton>
                {title}
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
}
