import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import LoginPage from "./components/login/login-page";
import SignUpPage from "./components/login/signUp-page";
import EventPage from "./components/events/eventPage";
import HomePage from "./components/home/homePage";
import Dashboard from "./components/dashboards/dashboard";
import SingleEventPage from "./components/events/singleEventPage";

function App() {

    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path={"/"} component={HomePage}></Route>
                    <Route exact path={"/events"} component={EventPage}></Route>
                    <Route exact path={"/events/:id"} component={SingleEventPage}></Route>
                    <Route exact path={"/login"} component={LoginPage}></Route>
                    <Route exact path={"/signUp"} component={SignUpPage}></Route>
                    <Route exact path={"/dashboard/"} component={Dashboard}></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
