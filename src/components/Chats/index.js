import React, {useCallback, useEffect, useState} from 'react';
import {Redirect, useParams} from "react-router-dom";

import {AUTHORS} from "../../utils/constants";
import AddForm from '../AddForm';
import MessageList from '../MessageList';
import ChatList from '../ChatList';


const initialMessages = {
    "chat-1": [
        {text: "Hello", author: "Natalia", id: "mess-2"},
        {text: "Hi", author: "Mikhail", id: "mess-1"},
    ],
    "chat-2": [],
};

const Chats = ({chats, setChats}) => {

    const {chatId} = useParams();

    const [messageList, setMessageList] = useState(initialMessages);

    const sendMessage = useCallback((message) => {
            setMessageList((prevMessages) => ({
                ...prevMessages, [chatId]: [...prevMessages[chatId], message],
            }));
        },
        [chatId]
    );

    const handleAddMessage = useCallback((text) => {
            sendMessage({
                text,
                author: AUTHORS.Natalia,
                id: `mess-${Date.now()}`,
            });
        },
        [sendMessage]
    );

    useEffect(() => {
        let timer;
        const currentMess = messageList[chatId];
        if (!!chatId && currentMess?.[currentMess.length - 1]?.author === AUTHORS.Natalia) {
            timer = setTimeout(() => {
                sendMessage({
                    text: 'I am bot',
                    author: AUTHORS.bot,
                    id: `mess-${Date.now()}`,
                });
            }, 1500);
        }
        return () => clearTimeout(timer);
    }, [messageList, chatId, sendMessage]);

    const addChat = useCallback((chatName) => {
        const newChatItem = {
            name: chatName,
            id: `mess-${Date.now()}`
        };

        setChats((chats) => [...chats, newChatItem]);
    }, []);

    const deleteChat = (chat) => {
        setChats((chats) => chats.filter(({id}) => id !== chat.id));
    }

    if (!chatId) {
        return <Redirect to="/nochat"/>;
    }

    return (
        <>
            <header>
                <h2>Chats</h2>
            </header>

            <div className="app">
                <div>
                    <ChatList chats={chats} onAdd={addChat} chatId={chatId} onDelete={deleteChat}/>
                </div>
                {!!chatId && (
                    <div>
                        <MessageList messages={messageList[chatId]}/>
                        <AddForm onAdd={handleAddMessage}/>
                    </div>
                )}
            </div>
        </>
    );
}

export default Chats;