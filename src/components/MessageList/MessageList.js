import Message from '../message';
import React from 'react';

const MessageList = ({ messages }) => (
    <>
        {messages.map((message, i) => (
            <Message key={i} message={message.text} />
        ))}
    </>
);

export default MessageList;
