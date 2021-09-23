import React, {useCallback} from "react";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectChats, selectChatsLength, selectFirstChatId} from "../../store/chats/selectors";
import {deleteChat} from "../../store/chats/actions";
import './ChatItem.css'
import {ChatItemPres} from "./ChatItemPres";

export const ChatItemContainer = ({chat, current}) => {
    const chats = useSelector(selectChats);
    const history = useHistory();
    const dispatch = useDispatch();
    const chatsLength = useSelector(selectChatsLength);
    const firstChatId = useSelector(selectFirstChatId);

    const handleDeleteChat = useCallback((id) => {
            dispatch(deleteChat(id));

            if (chat.id !== id) {
                return;
            }
            if (chatsLength === 1) {
                history.push(`/chats/${firstChatId}`);
            } else {
                history.push(`/chats`);
            }
        },
        [chat, dispatch, chats, history]
    );

    return (
        <ChatItemPres id={chat.id} chatName={chat.chatName} onDelete={handleDeleteChat} current={current}
                      author={chat.author}/>
    );
};