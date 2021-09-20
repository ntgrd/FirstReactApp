import React, {useCallback} from 'react';
import Icon from "@material-ui/core/Icon";
import {useDispatch, useSelector} from "react-redux";

import AddForm from '../AddForm';
import {ChatItemContainer} from "../ChatItem/ChatsItemContaner";
import {selectChats} from "../../store/chats/selectors";
import {addChat} from "../../store/chats/actions";

const ChatList = ({chatId}) => {

    const chats = useSelector(selectChats);
    const dispatch = useDispatch();

    const handleAddChat = useCallback((chatName) => dispatch(addChat(chatName)), [dispatch]);

    return (
        <div>
            {chats.map((chat) => (
                <ChatItemContainer chat={chat} key={chat.id} current={chat.id === chatId}/>
            ))}
            <AddForm
                onAdd={handleAddChat}
                inputPlaceholder="New chat name"
                addIcon={<Icon>add</Icon>}
            >
                Add chat
            </AddForm>
        </div>
    );
};

export default ChatList;