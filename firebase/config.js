import * as fb from 'firebase';
import {Alert} from 'react-native';

// const firebase = null;
const config = {
  apiKey: 'AIzaSyBIOkC-FXOQWNkAInk05YpLI0iM9srmOKk',
  authDomain: 'myfirstproject-91b71.firebaseapp.com',
  databaseURL: 'https://myfirstproject-91b71.firebaseio.com',
  projectId: 'myfirstproject-91b71',
  storageBucket: 'myfirstproject-91b71.appspot.com',
  messagingSenderId: '574817376017',
  appId: '1:574817376017:web:2e8e11c5a92d820780deb0',
};
// if (!fb.apps.length) {
const firebase = fb.initializeApp(config);

// const storage = firebase.storage();

// export function auth(){

// }

export function addEvent(event) {
  firebase
    .firestore()
    .collection('events')
    .add(event)
    .then(data => {
      Alert.alert('Good', 'This worked!', [{text: 'close'}]);
    });
}

export function login(email, password) {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(value => {
      Alert.alert('Good', 'This worked!', [{text: 'close'}]);
    });
}

export function signup(email, password) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(userInfo => {
   
    Alert.alert('Good', 'This worked!', [{text: 'close'}]);

    });
}

export function signout() {
  firebase.signout().then(() => {
    Alert.alert('Good', 'This worked!', [{text: 'close'}]);
  });
}
