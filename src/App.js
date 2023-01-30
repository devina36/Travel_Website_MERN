import React from 'react';
import 'assets/scss/style.scss';
import HomePage from 'pages/HomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Example from 'pages/Example';

AOS.init();

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/example" component={Example}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
