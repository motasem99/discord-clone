import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCADfe3qgBRambHoCl8AB3Np7KHsYkgrcE',
  authDomain: 'discord-clone-6c31a.firebaseapp.com',
  projectId: 'discord-clone-6c31a',
  storageBucket: 'discord-clone-6c31a.appspot.com',
  messagingSenderId: '544771457521',
  appId: '1:544771457521:web:25d750f81f5c8370d00450',
  measurementId: 'G-ECPHWYBH2V',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
