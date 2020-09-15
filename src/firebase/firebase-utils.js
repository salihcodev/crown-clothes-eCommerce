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
