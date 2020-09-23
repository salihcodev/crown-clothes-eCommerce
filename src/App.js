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
import { auth, createUserProfileDocument } from './firebase/firebase-utils';
import setCurrentUser from './redux/user/userActions';
import { connect } from 'react-redux';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
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
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
