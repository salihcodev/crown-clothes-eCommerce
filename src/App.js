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

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFormAuth = null;

  componentDidMount() {
    this.unsubscribeFormAuth = auth.onAuthStateChanged(
      async (userAuth, additionalData) => {
        if (userAuth) {
          const userRef = createUserProfileDocument(userAuth);

          // set user data from firestore to state.
          (await userRef).onSnapshot((snapShot) =>
            this.setState({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            })
          );
        } else {
          this.setState({ currentUser: userAuth });
        }
      }
    );
  }

  componentWillUnmount() {
    this.unsubscribeFormAuth();
  }

  render() {
    return (
      <>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/sign-in' component={SignIn} />
        </Switch>
      </>
    );
  }
}

export default App;
