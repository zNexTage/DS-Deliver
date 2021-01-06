import { BrowserRouter, Switch, Route } from "react-router-dom";
import Orders from "./Pages/Orders";
import Home from './Pages/Home'
import Navbar from "./Components/Navbar";

function Routes():JSX.Element {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/orders">
                    <Orders />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;