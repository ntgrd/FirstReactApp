import React, {useState, useRef, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
        height: '7ch'
    },
}));

const AddForm = ({ addMessage }) => {
    const classes = useStyles();
    const [value, setValue] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();

    }, []);

    const handleChange = (event) => {
            setValue(event.target.value);
    };


    const handleAddMessage = (event) => {
        event.preventDefault();
        addMessage(value);
        setValue('');
        inputRef.current.focus();
    };

    return (
        <form onSubmit={handleAddMessage} className={classes.root} noValidate autoComplete="off" ref={inputRef}>
            <Button
                onClick={handleAddMessage}
                variant="contained"
                color="default"
                className={classes.button}
                endIcon={<Icon>send</Icon>}
            >
                Send
            </Button>
            <TextField
                id="outlined-multiline-flexible"
                // multiline
                value={value}
                onChange={handleChange}
                variant="outlined"
                placeholder="Enter your message"
                // inputRef={inputRef}
            />
        </form>
    );
};

export default AddForm;