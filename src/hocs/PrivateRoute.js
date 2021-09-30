import React from "react";
import { Route, Redirect } from "react-router-dom";


const PrivateRoute = ({ authenticated, ...props }) =>
    authenticated ? <Route {...props} /> : <Redirect to="/login" />;

export default PrivateRoute;

// export default function PrivateRoute({ authenticated, ...rest }) {
//     return authenticated ? (
//         <Route {...rest} />
//     ) : (
//         <Redirect to={{ pathname: "/login" }} />
//     );
// }