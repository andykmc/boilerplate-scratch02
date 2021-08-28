import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import ComparePage from './pages/compare';
import OverviewPage from './pages/overview';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Hello, World!!</h1>
                <ul>
                    <li>
                        <NavLink to="/" activeClassName="hurray">
                            Overview
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/compare" activeClassName="hurray">
                            Compare
                        </NavLink>
                    </li>
                </ul>

                <Switch>
                    {/* <Route path="/contact/:id">
                    <Contact />
                    </Route>
                    <Route path="/contact">
                    <AllContacts />
                    </Route> */}

                    <Route path="/compare">
                        <ComparePage />
                    </Route>
                    <Route exact path="/">
                        <OverviewPage />
                    </Route>
                    <Route path="*">
                        <h1>Page is not found!</h1>
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default App;
