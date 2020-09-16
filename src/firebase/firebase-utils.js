import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCL9gh6wSw63-0A2-Lz3Rzfkqg5eqWPA1A',
  authDomain: 'crown-clothes-db.firebaseapp.com',
  databaseURL: 'https://crown-clothes-db.firebaseio.com',
  projectId: 'crown-clothes-db',
  storageBucket: 'crown-clothes-db.appspot.com',
  messagingSenderId: '914012653879',
  appId: '1:914012653879:web:377e7d275c62cd53f3f2b2',
  measurementId: 'G-GQ8CPRYSS2',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // if user sign out do nothing.
  if (!userAuth) return;
  // else do this block of code.
  else {
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    // if the user doesn't exists on DB, Store him/her.
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData,
        });
      } catch (error) {
        console.log('oh no..', error.message);
      }
    }
    return userRef;
  }
};

// export firebase libs.
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// create provider
const provider = new firebase.auth.GoogleAuthProvider();
// select pop-up type.
provider.setCustomParameters({ prompt: 'select_account' });

// the final functionality to sign-in with google.
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// export firebase in case we want it later.
export default firebase;
