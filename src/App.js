import React from 'react';
import './App.css';
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div>
        <Switch>
            <Route exact path='/shop' component={ShopPage} />
            <Route exact path='/' component={HomePage} />
        </Switch>
    </div>
  );
}

export default App;
