// BASIC:
import React from 'react';
import './App.sass';

// COMPONENTS:
import Header from './components/header/Header.component';

// VIEWS:
import LandingPage from './views/landing-page/Landing.page';
import ShopPage from './views/shop-page/Shop.page';
import SignIn from './views/signin-and-signup/Signing.page';
import Checkout from './views/checkout/Checkout.page';

// UTILITIES:
import { Redirect, Route, Switch } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase-utils';
import setCurrentUser from './redux/user/userActions';
import { connect } from 'react-redux';
import { currentUserSelector } from './redux/user/userSelector';

// APP COMPONENTS [THE ROOT :)]
class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    // if user signed in..
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        // ..store him/her data to firestore.
        const userRef = await createUserProfileDocument(userAuth);

        // store user data to redux-user-store
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

  // let's unmount.
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <>
        <Header />
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={Checkout} />
          <Route
            exact
            path='/sign-in'
            render={() => (currentUser ? <Redirect to='/' /> : <SignIn />)}
          />
        </Switch>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: currentUserSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
