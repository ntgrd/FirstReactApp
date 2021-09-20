import React from "react";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import {Home} from "../Home";
import {ProfileContainer} from "../Profile/ProfileContainer";
import Chats from "../Chats";
import NoChats from '../NoChats';

export const Routes = ({chats, setChats}) => {

    return (
        <BrowserRouter>
            <header>
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
                    <Home/>
                </Route>

                <Route path="/profile">
                    <ProfileContainer/>
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

        </BrowserRouter>
    );
};