import React, {useCallback} from "react";
import {Link, useHistory} from "react-router-dom";
import {IconButton, ListItem, ListItemAvatar} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import DeleteIcon from '@material-ui/icons/Delete';

import {selectChats} from "../../store/chats/selectors";
import {deleteChat} from "../../store/chats/actions";
import List from "@material-ui/core/List";
import {makeStyles} from "@material-ui/core/styles";
import './ChatItem.css'

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

export const ChatItem = ({chat, current}) => {
    const chats = useSelector(selectChats);
    const history = useHistory();
    const dispatch = useDispatch();
    const classes = useStyles();

    const handleDeleteChat = useCallback((id) => {
            dispatch(deleteChat(id));

            if (chat.id !== id) {
                return;
            }
            if (chats.length === 1) {
                history.push('/chats/${chats[0].id');
            } else {
                history.push('/chats');
            }
        },
        [chat, dispatch, chats, history]
    );

    return (
        <List className={classes.root}>
            <ListItem className='chat_item' key={chat.id} alignItems="flex-start" divider={true}>
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                </ListItemAvatar>
                <Link to={`/chats/${chat.id}`}>
                    <b style={{color: current ? '#000000' : 'grey'}}>
                      <h3>{chat.chatName}</h3>
                    </b>
                </Link>

                <IconButton aria-label="delete" onClick={() => handleDeleteChat(chat.id)}>
                    <DeleteIcon/>
                </IconButton>
            </ListItem>
        </List>
    );
};