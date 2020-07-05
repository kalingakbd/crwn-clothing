import React from 'react';
import './App.css';
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import {Route, Switch} from 'react-router-dom';
import Header from "./components/Header";

function App() {
  return (
    <div>
        <Header/>
        <Switch>
            <Route exact path='/shop' component={ShopPage} />
            <Route exact path='/' component={HomePage} />
        </Switch>
    </div>
  );
}

export default App;
