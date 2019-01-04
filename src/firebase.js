import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: `${process.env.REACT_APP_FIREBASE_NAME}.firebaseapp.com`,
  databaseURL: `https://${process.env.REACT_APP_FIREBASE_NAME}.firebaseio.com`,
  projectId: process.env.REACT_APP_FIREBASE_NAME,
};

firebase.initializeApp(config);

const db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true,
});
export default db;
