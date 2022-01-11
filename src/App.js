import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shopPage/shop'; 
import Header from './components/header/header';
import SignInAndUp from './pages/sign-in-and-up/sign-in-and-up';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndUp} />

      </Switch>
    </div>
  );
}

export default App;
