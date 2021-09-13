import { Routes } from "../Routes";
import './App.css';
import {useState} from "react";

const initialChats = [
    {name: "Coworkers", id: "chat-1", text: 'Hello world!'},
    {name: "Friends", id: "chat-2", text: 'Hello world!'},
];

function App() {
    const [chats, setChats] = useState(initialChats);
    console.log('kkk', chats);
    return (
        <Routes chats={chats} setChats={setChats}/>
    );
}

export default App;


