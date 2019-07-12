import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import Login from './components/Login';
import CardDetail from "./components/CardDetail";
import DetailComp from './components/DetailComp';
import LastPage from './components/LastPage'

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/carddetail" component={CardDetail} />
          <Route exact path="/carddetail/:greeting" component={DetailComp} />
          <Route exact path="/lastpage" component={LastPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
