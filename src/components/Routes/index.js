import React from "react";
import {ThemeProvider, createTheme, makeStyles, createStyles} from "@material-ui/core/styles";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Home } from "../Home";
import { Profile } from "../Profile";
import Chats from "../Chats";
import NoChats from '../NoChats';

export const Routes = ({chats, setChats}) => {
    console.log('lll', chats);

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
    return (
          <BrowserRouter>
            <ThemeProvider theme={theme} >
            <header className={classes.root}>
                <ul>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>

                    <li>
                        <Link to="/chats">Chats</Link>
                    </li>

                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </header>

            <Switch>

                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/profile">
                    <Profile />
                </Route>

                <Route path="/chats/:chatId?">
                    <Chats chats={chats} setChats={setChats}/>
                </Route>

                <Route exact path="/nochat">
                    <NoChats chats={chats}/>
                </Route>

                <Route>
                    <h3>Page not found</h3>
                </Route>



            </Switch>
            </ThemeProvider>
        </BrowserRouter>
    );
};