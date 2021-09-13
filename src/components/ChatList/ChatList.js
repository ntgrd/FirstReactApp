import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import {Link} from "react-router-dom";
import Icon from "@material-ui/core/Icon";

import AddForm from '../AddForm';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

const ChatList = ({chats, onAdd, chatId, onDelete}) => {
    const classes = useStyles();

    return (
        <div>
            <List className={classes.root}>
                {chats.map((chat) => (

                    <ListItem key={chat.id} alignItems="flex-start" divider={true}>
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                        </ListItemAvatar>
                        <Link to={`/chats/${chat.id}`}>

                            <b style={{color: chat.id === chatId ? "#000000" : "grey"}}>
                                {chat.name}
                            </b>
                        </Link>

                        <button type="button" onClick={() => onDelete(chat)}>
                            <DeleteIcon/>
                        </button>
                    </ListItem>
                ))}
            </List>
            <AddForm
                onAdd={onAdd}
                inputPlaceholder="New chat name"
                addIcon={<Icon>add</Icon>}
            >
                Add chat
            </AddForm>
        </div>
    );
};

export default ChatList;