import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyDPkulcK6Kj-o81PAKIyc0JktTdNFA1pF8',
    authDomain: 'uber-eats-clone-rn-d6339.firebaseapp.com',
    projectId: 'uber-eats-clone-rn-d6339',
    storageBucket: 'uber-eats-clone-rn-d6339.appspot.com',
    messagingSenderId: '410107892464',
    appId: '1:410107892464:web:ed2df614b70f833e8b2835',
};
let app;
!firebase.apps.length
    ? (app = firebase.initializeApp(firebaseConfig))
    : (app = firebase.app());

const db = app.firestore();

export { db, firebase };
