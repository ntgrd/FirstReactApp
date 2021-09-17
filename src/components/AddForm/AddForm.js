import React, {useEffect, useRef, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Button} from "@material-ui/core";
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '40ch',
            height: '6ch'
        },
    },
    button: {
        margin: theme.spacing(1),
        width: '15ch',
        height: '6ch'
    },
}));

const AddForm = ({onAdd, inputPlaceholder, children, addIcon}) => {
    const classes = useStyles();
    const [value, setValue] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();

    }, []);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleAdd = (event) => {
        event.preventDefault();
        onAdd(value);
        setValue('');
        inputRef.current.focus();
    };

    return (
        <form onSubmit={handleAdd} className={classes.root} noValidate autoComplete="off" ref={inputRef}>

            <Button
                onClick={handleAdd}
                variant="contained"
                color="default"
                className={classes.button}
                endIcon={addIcon || <Icon>send</Icon>}

            >
                {children || 'Send'}
            </Button>
            <TextField
                id="outlined-multiline-flexible"
                // multiline
                value={value}
                onChange={handleChange}
                variant="outlined"
                placeholder={inputPlaceholder || 'Enter your message'}
            >
            </TextField>
        </form>
    );
};

export default AddForm;