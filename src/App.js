import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './reset.css';
import './App.css';
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import MailBody from "./components/MailBody";

function App() {
  return (
      <Router>

        <Switch>
            <Route path={'/'} exact>
                <div className={'container'}>
                <Sidebar/>
                <Main/>
                </div>
            </Route>
            <Route  path='/mail/:id' component={MailBody}>
            </Route>

        </Switch>

      </Router>
  );
}

export default App;