import React from 'react';
import {
  BrowserRouter as Router, Switch,
  Route,  Link
} from "react-router-dom";
import './App.css';
import {Home} from "./views/Home";


function App() {
  return (
      <Router>
          <div>
              <nav>
                  <ul>
                      <li>
                          <Link to="/">Router</Link>
                      </li>
                      <li>
                          <Link to="/home">Home</Link>
                      </li>
                      {/*<li>*/}
                      {/*    <Link to="/users">Users</Link>*/}
                      {/*</li>*/}
                  </ul>
              </nav>

              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
              <Switch>
                  {/*<Route path="/about">*/}
                  {/*    <About />*/}
                  {/*</Route>*/}
                  {/*<Route path="/users">*/}
                  {/*    <Users />*/}
                  {/*</Route>*/}
                  <Route path="/home">
                      <Home/>
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;






