import React, {useState, useEffect} from 'react';
import AddForm from '../AddForm';
import './App.css';
import MessageList from '../MessageList';
import ChatList from '../ChatList';
import {ThemeProvider, createTheme} from "@material-ui/core/styles";
import {makeStyles, createStyles} from '@material-ui/core/styles';

const App = () => {
    const [messageList, setMessageList] = useState([]);
    const theme = createTheme({
        palette: {
            primary: {
                main:  "#20B2AA",
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

    useEffect(() => {
        if (messageList[messageList.length - 1]?.author === 'Natalia') {
            setTimeout(() => setMessageList(prevMessages => [...prevMessages, {
                text: 'I am bot',
                author: 'bot',
                id: `mess-${Date.now()}`
            }]), 1500);
        }
    }, [messageList]);

    const addMessage = (text) => {
        setMessageList(prevMessages => [...prevMessages, {text, author: 'Natalia', id: `mess-${Date.now()}`}]);
    };

    return (
        <ThemeProvider theme={theme} >
            <header className={classes.root}>
                <h2>Natalia Kozlova</h2>
                </header>

            <div className="app">
                <div>
                    <ChatList/>
                </div>
                <div>
                    <MessageList messages={messageList}/>
                    <AddForm addMessage={addMessage}/>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;