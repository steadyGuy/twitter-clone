import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import React from 'react'
import { useHistory } from 'react-router-dom';

export const BackBtn: React.FC = (): React.ReactElement => {

    const history = useHistory();
    const handleClickOnBtn = () => {
        history.goBack();
    }

    return (
        <IconButton onClick={handleClickOnBtn} style={{ marginRight: 20 }}>
            <ArrowBackIcon color="primary" />
        </IconButton>
    )
}