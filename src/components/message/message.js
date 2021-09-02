import React from 'react';

import './message.css';

const Message = ({name, surname, sayHello}) => {
    
    return (
        <div className="message d-flex">
            <h1>
                <span onClick={sayHello}>Hello,</span> 
                {name} {surname} !
            </h1>
        </div>
    )
}

export default Message;