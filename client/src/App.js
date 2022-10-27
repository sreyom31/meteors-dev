import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {useState} from "react";

import LoginPage from "./components/login/login-page";
import SignUpPage from "./components/login/signUp-page";
import EventPage from "./components/events/eventPage";

function App() {

    const [loggedIn, setLoggedIn] = useState(false);

    const handleLoggedIn = () => setLoggedIn(prevState => !prevState);

    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path={"/events"} component={EventPage}></Route>
                    <Route exact path={"/login"} component={LoginPage}></Route>
                    <Route exact path={"/signUp"} component={SignUpPage}></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
