import Message from '../message';
import React from 'react';

const MessageList = ({ messages }) => (
    <>
        {messages.map((message) => (
            <Message key={message.id} text={message.text} id={message.id}/>
        ))}
    </>
);

export default MessageList;
