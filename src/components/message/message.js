import React from 'react';

import './message.css';

const Message = ({message}) => {
    
    return (
        <div className="message d-flex">
            <h1>{message}</h1>
        </div>
    )
}

export default Message;