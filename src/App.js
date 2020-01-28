import React from 'react';
import Main from "./components/Main"
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Faq from './components/Faq';
import Shop from './components/Shop';
import About from './components/About'

function App() {
  return (
    <Router>
      <div >
        <Header />
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/'}>
            <Main />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/faq">
            <Faq />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
