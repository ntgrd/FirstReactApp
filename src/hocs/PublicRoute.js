import React from "react";
import {Redirect, Route} from "react-router-dom";

const PublicRoute = ({authenticated, ...rest}) =>
    !authenticated ? <Route {...rest} /> : <Redirect to="/chats"/>;
export default PublicRoute;