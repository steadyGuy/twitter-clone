import React from 'react'

import TextField from '@material-ui/core/TextField';

import { withStyles, Theme } from "@material-ui/core/styles";

export const SearchTextField = withStyles((theme: Theme) => (
    {
        root: {
            backgroundColor: '#EBEEF0',
            borderRadius: 42,
            '& svg path': {
                fill: '#5B7083',
            },
            '& input': {
                height: 42,
                padding: 0,
                paddingRight: 10,
                fontWeight: 300,
                color: '#0F1419',
                '&::placeholder': {
                    color: '#5B7083'
                },
            },
            '& .MuiOutlinedInput-root:hover fieldset': {
                borderColor: '#EBEEF0',
            },
            '& .MuiOutlinedInput-root': {
                borderRadius: 44,
                '& fieldset': {
                    borderColor: '#EBEEF0',
                },
                '&.Mui-focused': {
                    backgroundColor: '#fff',
                    '& fieldset': {
                        border: `solid 1px ${theme.palette.primary.main}`,
                    },
                    '& svg path': {
                        fill: theme.palette.primary.main,
                    }
                },
            },
        },
    }
))(TextField);