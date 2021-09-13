import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Link } from "react-router-dom";
import {Button} from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

const ChatList = ({chats, addChat}) => {
    const classes = useStyles();
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const handleAddChat = (event) => {
        event.preventDefault();
        addChat(value);
        setValue('');

    };

console.log('iii', chats);
    return (
        <List className={classes.root}>
            {chats.map((chat) => (

                <ListItem key={chat.id} alignItems="flex-start" divider={true}>
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                    </ListItemAvatar>
                    <Link to={`/chats/${chat.id}`}>{chat.name}
                    </Link>
                    {/*<ListItemText*/}
                    {/*    primary={chat.name}*/}
                    {/*    secondary={chat.text}*/}
                    {/*/>*/}
                </ListItem>
                ))}
            <form onSubmit={handleAddChat} >
                <Button
                    onClick={handleAddChat}
                    variant="contained"
                    color="default"

                    endIcon={<Icon>add</Icon>}
                >
                    Add chat
                </Button>
                <TextField
                    id="outlined-multiline-flexible"
                    // multiline
                    value={value}
                    onChange={handleChange}
                    variant="outlined"
                    placeholder="enter new chat name"

                />
            </form>
            </List>
    );
}

export default ChatList;