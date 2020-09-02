// BASIC:
import React from 'react';
import './App.sass';

// COMPONENTS:
import Header from './components/header/Header.component';

// VIEWS:
import LandingPage from './views/landing-page/Landing.page';
import ShopPage from './views/shop-page/Shop.page';
import SignIn from './views/signin-and-signup/Signing.page';

// UTILITIES:
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/sign-in' component={SignIn} />
      </Switch>
    </>
  );
}

export default App;
