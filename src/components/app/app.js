import React from 'react';
import Message from '../message';

import './app.css';

const App = () => {
    const sayHello = () => {
        alert ('Hello!');
    }
    return (
        <div className="app">
            <Message name="Natalia" surname="Kozlova" sayHello={sayHello}/>
        </div>
    )
}

export default App;