import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAgHt0nT2Eu-LnRVIz8n57S6l0-eMiGf78',
  authDomain: 'crwn-db-d55b6.firebaseapp.com',
  databaseURL: 'https://crwn-db-d55b6.firebaseio.com',
  projectId: 'crwn-db-d55b6',
  storageBucket: 'crwn-db-d55b6.appspot.com',
  messagingSenderId: '228582225712',
  appId: '1:228582225712:web:1731534eb603d1b1d2baf5',
  measurementId: 'G-QPW3PL8N3G',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
