import React, {useState, useEffect} from 'react';
import Message from '../message';

import './app.css';

const App = () => {
    const [messageList, setMessageList] = useState([]);
    const [value, setValue] = useState('');

    useEffect(() => {
        if (messageList[messageList.length - 1]?.author === 'Natalia') {
            setTimeout(() => setMessageList(prevMessages => [...prevMessages, {text: 'I am bot', author: 'bot'}]), 1500);
        }
    }, [messageList]);

    const handleAddMessage = () => {
        setMessageList(prevMessages => [...prevMessages, {text: value, author: 'Natalia'}]);
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        setValue("");
    }

    return (
        <div className="app">

            {messageList.map((message, i) => (
                <Message key={i} message={message.text}/>
            ))}

            <form
                className="bottom-panel d-flex"
                onSubmit={onSubmit}>
                <button
                    className='btn btn-outline-secondary'
                    onClick={handleAddMessage}
                >
                    Add message
                </button>
                <input
                    type="text"
                    placeholder="О чем вы думаете сейчас?"
                    className="form-control new-post-label"
                    value={value}
                    onChange={handleChange}
                />
            </form>
        </div>
    );
}

export default App;