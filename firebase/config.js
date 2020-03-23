import * as fb from 'firebase';
import {Alert, Platform} from 'react-native';
import 'firebase/firestore';
import 'firebase/storage';
import RNFetchBlob from 'rn-fetch-blob';

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
export const db = firebase.firestore();
const storage = firebase.storage();
let posters = [];
var data = [{}];
// const Blob = RNFetchBlob.polyfill.Blob;
// const fs = RNFetchBlob.fs;
// window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
// window.Blob = Blob;

export function _addEvent(event) {
  //mime = 'application/octet-stream'
  // console.log("Enter Function");
  db.collection('events')
    .add(event)
    .then(data => {
      Alert.alert('Good', 'Your Event successfully added!', [{text: 'close'}]);
    })
    .catch(error => {
      Alert.alert('Error', "Form didn't upload! ", [{text: 'close'}]);
    });
  // const posterId = Math.random()
  //   .toString(36)
  //   .substr(2, 10);
  // const posterName = `poster_${posterId.toString()}`;
  // const storageRef = storage.ref().child(`eventsPosters/${posterName.toString()}`);
  // console.log("Before put");
  // // console.log(storageRef);

  // return storageRef.put(poster);
  // .then((uploaded) => {
  //   console.log("inside put");
  //   Alert.alert('Success', 'Image was uploaded to storage!', [{text: 'close'}]);
  //   storageRef.getDownloadURL().then(url => {
  //     console.log(url.toString());
  //   })
  //   .catch((error) => {
  //     Alert.alert('Error', "Can't get url", [{text: 'close'}]);
  //   // console.log(error);
  //   });
  // })
  // .catch((error) => {
  //   Alert.alert('Error', "Form didn't upload! ", [{text: 'close'}]);
  //   console.log(error.message);
  // });
}

/*
return new Promise((res, rej) => {
    const uploadUri = poster;
    const posterId = Math.random()
      .toString(36)
      .substr(2, 10);
    let uploadBlob = null;
    const posterName = `poster_${posterId}`;
    const storageRef = storage.ref('eventsPosters').child(posterName);
    console.log('before read');

    fs.readFile(uploadUri, 'base64')
      .then(data => {
        // console.log(mime);
        Blob.build(data, {type: `${mime};BASE64`});
        console.log('after build');
      })
      .then(blob => {
        uploadBlob = blob;
        console.log(poster);
        // storageRef.putString(poster,'base64', {contentType:'image/jpg'});
        return storageRef.put(blob, {contentType: mime});
        // storageRef.put(new File(poster, posterName, {contentType:'image/jpg'}))
        // console.log("after put");
      })
      .then(() => {
        uploadBlob.close();
        console.log('after closing blob');
        return storageRef.getDownloadURL();
        // console.log("after get url");
      })
      .then(url => {
        Alert.alert('Success', 'Image was uploaded to storage!', [
          {text: 'close'},
        ]);
        event.imageURL = url;
        db.collection('events')
          .add(event)
          .then(data => {
            Alert.alert('Good', 'Your Event successfully added!', [
              {text: 'close'},
            ]);
          })
          .catch(error => {
            Alert.alert('Error', "Form didn't upload! ", [{text: 'close'}]);
          });
        res(url);
        posters.push(url);
      })
      .catch(error => {
        Alert.alert('Error', "Image didn't upload! ", [{text: 'close'}]);
        console.log(error);
      });
*/

//=================================================================================================//

// var posterBlob = new Blob(poster, { type: "image/jpeg" });
// console.log(posterBlob.toString());

// putInStorage = storageRef.put(poster);
// putInStorage.on(firebase.storage.TaskEvent.STATE_CHANGED,
//   (snapshot) => {
//     if (snapshot.state === firebase.storage.TaskState.SUCCESS){
//       Alert.alert('Success','Image was uploaded to storage!', [{text: 'close'}]);
//     }
//   },
//   (error) => {
//     unsubscribe();
//     Alert.alert('Error', "Image didn't upload! "+error.toString(), [{text: 'close'}]);
//   },
//   () => storageRef.getDownloadURL()
//   .then((downloadURL) => {
//     posters.push(downloadURL);
//     return downloadURL;
//   }))

export function login(email, password) {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(value => {
      Alert.alert('Good', 'This worked!', [{text: 'close'}]);
    });
}

export function signup(email, password, username) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(userInfo => {
      console.log(userInfo);
      Alert.alert('Good', 'This worked!', [{text: 'close'}]);
    });
}

export function signout() {
  firebase.signout().then(() => {
    Alert.alert('Good', 'This worked!', [{text: 'close'}]);
  });
}

export function getCurrentUserEmail() {
  return firebase.auth().currentUser.email;
}

export function getCurrentUser() {
  return firebase.auth().currentUser;
}

export function g(){
  return db.collection('events').where('eventStatus', '==', 'accepted');
}
export function getAllData() {
  db.collection('events')
    .where('eventStatus', '==', 'accepted')
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, ' => ', doc.data());
        // console.log(data);
        
        // data.push(JSON.stringify(doc.data()));
        // console.log("hi");
        
        // console.log("func= ", data);
        
      });
    })
    .catch(function(error) {
      console.log('Error getting documents: ', error);
    });
}

export {data};

function getD(d) {
  return d;
}
