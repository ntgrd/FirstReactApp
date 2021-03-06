import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {selectProfileName} from "../../store/profile/selectors";
import {selectMessages} from "../../store/messageList/selectors";
import {addMessageWithReply, initMessages} from "../../store/messageList/actions";
import AddForm from "../AddForm";
import Message from '../message';
import {AUTHORS} from "../../utils/constants";

const MessageList = ({chatId}) => {
    const profileName = useSelector(selectProfileName);
    const messages = useSelector(selectMessages);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initMessages());
    }, []);

    const sendMessage = useCallback((text, author) => {
            dispatch(addMessageWithReply(text, author, chatId))
        },
        [chatId, dispatch]
    );

    const handleAddMessage = useCallback((text) => {
            sendMessage(text, AUTHORS.Natalia);
        },
        [sendMessage]
    );

    // useEffect(() => {
    //     let timer;
    //     const currentMess = messages[chatId];
    //     if (!!chatId && currentMess?.[currentMess.length - 1]?.author === AUTHORS.Natalia) {
    //         timer = setTimeout(() => {
    //             sendMessage('I am bot', AUTHORS.bot);
    //         }, 1500);
    //     }
    //     return () => clearTimeout(timer);
    // }, [messages, chatId, sendMessage]);
    console.log('mes', messages[chatId])

    return (
        <>
            {(Object.values(messages[chatId] || {}) || []).map((message) => (
                <Message key={message.id} text={message.text} id={message.id}
                         messageAuthor={message.author === AUTHORS.Natalia ? profileName : message.author}
                />
            ))}
            <AddForm onAdd={handleAddMessage}/>
        </>
    )
}
export default MessageList;
