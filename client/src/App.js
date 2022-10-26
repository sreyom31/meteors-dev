import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import LoginPage from "./components/login/login-page";
import SignUpPage from "./components/login/signUp-page";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path={"/login"} component={LoginPage}></Route>
                    <Route exact path={"/signUp"} component={SignUpPage}></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
