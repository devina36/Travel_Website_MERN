import React from 'react';
import 'assets/scss/style.scss';
import HomePage from 'pages/HomePage';
import DetailPage from 'pages/DetailPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Example from 'pages/Example';
import Checkout from 'pages/Checkout';

AOS.init();

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/properties/:id" component={DetailPage} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/example" component={Example} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
