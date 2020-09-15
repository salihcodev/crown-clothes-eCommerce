import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCtreIgjLISG-mDWFEmq7IhsgbOnSRuqYU',
  authDomain: 'crown-db-f4df4.firebaseapp.com',
  databaseURL: 'https://crown-db-f4df4.firebaseio.com',
  projectId: 'crown-db-f4df4',
  storageBucket: 'crown-db-f4df4.appspot.com',
  messagingSenderId: '758214981943',
  appId: '1:758214981943:web:44355e8a1c6b14591d02b2',
  measurementId: 'G-2F32ZSF53Q',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // if user sign out do nothing.
  if (!userAuth) return;

  // else do this block of code.
  const userRef = firestore.doc(`users/3645646sa46g4`);
  const snapShot = await userRef.get();
  console.log(snapShot);

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
