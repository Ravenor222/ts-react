import React from 'react';
import {
  BrowserRouter as Router, Switch,
  Route,  Link
} from "react-router-dom";
import './App.css';
import {Topics} from "./views/Topics";
import {Landing} from "./views/Landing";
import {Topic} from "./views/Topic";


function App() {
  return (
      <Router>
        <div>
              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
              <Switch>


                  <Route path={`/topics/:topicId`}>
                      <Topic />
                  </Route>
                  <Route exact path="/topics">
                      <Topics/>
                  </Route>
                  <Route exact path="/">
                      <Landing />
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;






