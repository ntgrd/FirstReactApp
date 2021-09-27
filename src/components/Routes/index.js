import React, {useEffect, useState} from "react";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import {Home} from "../Home";
import {ProfileContainer} from "../Profile/ProfileContainer";
import Chats from "../Chats";
import NoChats from '../NoChats';
import {News} from "../News";
import {Weather} from "../Weather";
import {Login} from "../Login";
import {SignUp} from "../SignUp";
import PublicRoute from "../../hocs/PublicRoute";
import PrivateRoute from "../../hocs/PrivateRoute";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../../services/firebase";

export const Routes = ({chats, setChats}) => {
    const [authed, setAuthed] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthed(true);
            } else {
                setAuthed(false);
            }
        });

        return unsubscribe;
    }, []);

    return (
        <BrowserRouter>
            <header>
                <ul>
                    <li>
                        <Link to="/signup">Registration</Link>
                    </li>

                    <li>
                        <Link to="/login">Login</Link>
                    </li>

                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>

                    <li>
                        <Link to="/chats">Chats</Link>
                    </li>

                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/news">News</Link>
                    </li>

                    <li>
                        <Link to="/weather">Weather</Link>
                    </li>
                </ul>
            </header>

            <Switch>

                <PublicRoute authenticated={authed} exact path="/">
                    <Home/>
                </PublicRoute>

                <PublicRoute authenticated={authed} path="/login">
                    <Login/>
                </PublicRoute>

                <PublicRoute authenticated={authed} path="/signup">
                    <SignUp/>
                </PublicRoute>

                <PrivateRoute authenticated={authed} path="/profile">
                    <ProfileContainer/>
                </PrivateRoute>

                <PrivateRoute authenticated={authed} path="/chats/:chatId?">
                    <Chats chats={chats} setChats={setChats}/>
                </PrivateRoute>

                <PrivateRoute authenticated={authed} exact path="/nochat">
                    <NoChats chats={chats}/>
                </PrivateRoute>

                <PublicRoute authenticated={authed} path="/news">
                    <News/>
                </PublicRoute>

                <PublicRoute authenticated={authed} path="/weather">
                    <Weather/>
                </PublicRoute>

                <Route>
                    <h3>Page not found</h3>
                </Route>
            </Switch>

        </BrowserRouter>
    );
};