import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Link } from "react-router-dom";

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

const ChatList = ({chats}) => {
    const classes = useStyles();

console.log('iii', chats);
    return (
        <List className={classes.root}>
            {chats.map((chat) => (

                <ListItem key={chat.id} alignItems="flex-start" divider={true}>
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                    </ListItemAvatar>
                    <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
                    {/*<ListItemText*/}
                    {/*    primary={chat.name}*/}
                    {/*    secondary={chat.text}*/}
                    {/*/>*/}
                </ListItem>
                ))}
            </List>
    );
}

export default ChatList;