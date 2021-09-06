import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

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

const ChatList = () => {
    const classes = useStyles();
    const chats = [
        {
            name: 'Girls',
            id: 0,
            text: 'Hello world!'
        },
        {
            name: 'Friends',
            id: 1,
            text: 'Hello world!'
        },
        {
            name: 'Coworkers',
            id: 2,
            text: 'Hello world!'
        }
    ];
    return (
        chats.map((chat, id) => (
            <List key={chat.id} className={classes.root}>
                <ListItem alignItems="flex-start" divider={true}>
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                    </ListItemAvatar>
                    <ListItemText
                        primary={chat.name}
                        secondary={chat.text}
                    />
                </ListItem>
            </List>
        ))
    );
}

export default ChatList;