import * as firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBY35lqlVSUTsSZ8dvaoHlhopUeXcln52Q',
  authDomain: 'practiceonezs.firebaseapp.com',
  projectId: 'practiceonezs',
  storageBucket: 'practiceonezs.appspot.com',
  messagingSenderId: '272084593114',
  appId: '1:272084593114:web:dfc66af4e0ce4fc32eb8e3',
  measurementId: 'G-HN3VW1QH71',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
