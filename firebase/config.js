import * as fb from 'firebase';
import {Alert} from 'react-native';
import 'firebase/firestore';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyAAWnkattEo93-hGgrsLwwv6zsznyj4kJI',
  authDomain: 'saudivibes-701df.firebaseapp.com',
  databaseURL: 'https://saudivibes-701df.firebaseio.com',
  projectId: 'saudivibes-701df',
  storageBucket: 'saudivibes-701df.appspot.com',
  messagingSenderId: '960547540192',
  appId: '1:960547540192:web:ca68e6f7f5dbaeedd99485',
  measurementId: 'G-JMSYKB6F2X',
};
// if (!fb.apps.length) {
const firebase = fb.initializeApp(config);
const db = firebase.firestore();
const storage = firebase.storage();
let posters = [];


export function _addEvent(event, poster, extension) {
  var image = addPoster(poster,extension);
  event.imageURL = image;
  db.collection('events')
    .add(event)
    .then(data => {
      Alert.alert('Good', 'Your Event successfully added!', [{text: 'close'}]);
    })
    .catch(error => {
      Alert.alert('Error', [{text: 'close'}]);
    });
}

function addPoster(poster, extension){
  posterId = Math.random().toString(36).substr(2, 10);
  storageRef = storage.ref(`eventsPosters/poster_${posterId}.${extension}`);
  // var posterBlob = new Blob(poster, { type: "image/jpeg" });
  // console.log(posterBlob.toString());
  
  putInStorage = storageRef.put(poster);
  putInStorage.on(firebase.storage.TaskEvent.STATE_CHANGED,
    (snapshot) => {
      if (snapshot.state === firebase.storage.TaskState.SUCCESS){
        Alert.alert('Success','Image was uploaded to storage!', [{text: 'close'}]);
      }
    },
    (error) => {
      unsubscribe();
      Alert.alert('Error', "Image didn't upload! "+error.toString(), [{text: 'close'}]);
    },
    () => storageRef.getDownloadURL()
    .then((downloadURL) => {
      posters.push(downloadURL);
      return downloadURL;
    }))
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
