import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCkgsCJ1o-I745LPVIPWaAsoFZ-FOIrzaY",
    authDomain: "crud-react-firebase-a5178.firebaseapp.com",
    databaseURL: "https://crud-react-firebase-a5178.firebaseio.com",
    projectId: "crud-react-firebase-a5178",
    storageBucket: "crud-react-firebase-a5178.appspot.com",
    messagingSenderId: "338088736587",
    appId: "1:338088736587:web:e48bcd7b9ae016c5749ace"
};

firebase.initializeApp(firebaseConfig);

export {firebase};