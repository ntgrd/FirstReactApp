import {Link} from "react-router-dom";

export const Home = () => {
    return (
        <>
            <header>
                <h3>Welcome Home!</h3>
            </header>
            <div>
                <Link to="/login">Sign In</Link>
            </div>
            <div>
                <Link to="/signup">Sign Up</Link>
            </div>
        </>
    )
};