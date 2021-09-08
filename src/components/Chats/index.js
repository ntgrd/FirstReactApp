import React, {useCallback, useEffect, useState} from 'react';
import {createStyles, createTheme, makeStyles, ThemeProvider} from "@material-ui/core/styles";
import {useParams, Redirect} from "react-router-dom";

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

// const initialChats = [
//     {name: "Coworkers", id: "chat-1", text: 'Hello world!'},
//     {name: "Friends", id: "chat-2", text: 'Hello world!'},
// ];

const Chats = ({chats}) => {

    const {chatId} = useParams();
    console.log('mmmm', chats)

    const [messageList, setMessageList] = useState(initialMessages);
    // const [chats, setChats] = useState(initialChats);

    const sendMessage = useCallback((message) => {
            setMessageList((prevMessages) => ({
                ...prevMessages, [chatId]: [...prevMessages[chatId], message],
            }));
        },
        [chatId]
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
        ;
        return () => clearTimeout(timer);
    }, [messageList]);

    const handleAddMessage = useCallback((text) => {
            sendMessage({
                text,
                author: AUTHORS.Natalia,
                id: `mess-${Date.now()}`,
            });
        },
        [chatId, sendMessage]
    );

    const theme = createTheme({
        palette: {
            primary: {
                main: "#20B2AA",
            },
            secondary: {
                main: "#20B2AA",
            },
        },
        typography: {
            htmlFontSize: 12
        },
        spacing: 4,
    });
    const useStyles = makeStyles((theme) => createStyles({
        root: {
            backgroundColor: "#20B2AA",
        },
        margin: theme.spacing(1, 'auto'),
    }));

    const classes = useStyles();
    console.log('nnn', chats);
    if (!chatId || !chats[chatId]) {
        return <Redirect to="/nochat" />;
    };

    return (
        <ThemeProvider theme={theme}>
            <header className={classes.root}>
                <h2>Natalia Kozlova</h2>
            </header>

            <div className="app">
                <div>
                    <ChatList chats={chats}/>
                </div>
                {!!chatId && (
                    <div>
                        <MessageList messages={messageList[chatId]}/>
                        <AddForm addMessage={handleAddMessage}/>
                    </div>
                )};


            </div>
        </ThemeProvider>
    );
}

export default Chats;