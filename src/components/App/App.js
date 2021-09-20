import {createStyles, createTheme, makeStyles, ThemeProvider} from "@material-ui/core/styles";
import {Provider} from "react-redux";
import {persistor, store} from "../../store";
import {Routes} from "../Routes";
import './App.css';
import {PersistGate} from "redux-persist/integration/react";

// const initialChats = [
//     {name: "Coworkers", id: "chat-1", text: 'Hello world!'},
//     {name: "Friends", id: "chat-2", text: 'Hello world!'},
// ];

function App() {
    // const [chats, setChats] = useState(initialChats);
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
            htmlFontSize: 12,
            color: "#20B2AA",
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

    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <header className={classes.root}>
                        <h3>Hi!</h3>
                    </header>
                    <Routes/>
                </ThemeProvider>
            </PersistGate>
        </Provider>
    );
}

export default App;


