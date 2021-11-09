import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import MainPage from "../pages/main";

const PageService = () => {
    // console.log(requestsService.getStreets())
    return (
        <Router>
            <Switch>
                <Route path='/' component={MainPage}  exact/>
            </Switch>
        </Router>
    )
}

export default PageService;