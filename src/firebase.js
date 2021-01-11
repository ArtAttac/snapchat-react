import firebase from 'firebase';

/* eslint-disable no-unused-vars */
const firebaseConfig = {
  apiKey: 'AIzaSyA20xbVlYFcn0taS04pSqVeVVqbYQJK_S8',
  authDomain: 'snap-clone-efa0e.firebaseapp.com',
  projectId: 'snap-clone-efa0e',
  storageBucket: 'snap-clone-efa0e.appspot.com',
  messagingSenderId: '366792026845',
  appId: '1:366792026845:web:0628a07aefc85163400934',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
