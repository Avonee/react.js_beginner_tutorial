import firebase from 'firebase'

let config = {
  apiKey: "AIzaSyDXwu6kVbJuzxyGLCCEQBGFLF9ivUZ4VyI",
  authDomain: "reactjs-practice-f3ec5.firebaseapp.com",
  databaseURL: "https://reactjs-practice-f3ec5.firebaseio.com",
  projectId: "reactjs-practice-f3ec5",
  storageBucket: "reactjs-practice-f3ec5.appspot.com",
  messagingSenderId: "145776950324"
};

let fire = firebase.initializeApp(config);

export default fire;
