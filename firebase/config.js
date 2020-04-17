import * as fb from 'firebase';
import {Alert, Platform} from 'react-native';
import 'firebase/firestore';
import 'firebase/storage';
import RNFetchBlob from 'rn-fetch-blob';

const Blob = RNFetchBlob.polyfill.Blob;
const fs = RNFetchBlob.fs;
const tempWindowXMLHttpRequest = window.XMLHttpRequest;

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

const firebase = fb.initializeApp(config);
export const db = firebase.firestore();
const storage = firebase.storage();
export const firebase_auth = firebase.auth();


export function _addEvent(event, poster) {
  window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
  window.Blob = Blob;
  const imageFile = RNFetchBlob.wrap(poster);
  const posterId = Math.random()
    .toString(36)
    .substr(2, 10);
  const posterName = `poster_${posterId}`;
  const ref = firebase.storage().ref(`eventsPosters/${posterName}`);
  var uploadBlob = null;
  Blob.build(imageFile, {type: 'image/jpg;'})
    .then(imageBlob => {
      uploadBlob = imageBlob;
      return ref.put(imageBlob, {contentType: 'image/jpg'});
    })
    .then(() => {
      uploadBlob.close();
      return ref.getDownloadURL();
    })
    .then(url => {
      event.imageURL = url;
      event.ownerId = getCurrentUserID();
      window.XMLHttpRequest = tempWindowXMLHttpRequest;
      db.collection('events')
        .add(event)
        .then(data => {
          Alert.alert(
            'تم رفع الفعالية بنجاح',
            'ستعرض فعاليتك بعد موافقة إدارة التطبيق عليها',
            [{text: 'إغلاق'}],
          );
        })
        .catch(error => {
          Alert.alert('Error', "Form didn't upload! ", [{text: 'close'}]);
        });
    })
    .catch(() => {
      dispatch({
        type: UPDATE_PROFILE_INFO_FAIL,
        payload: 'Unable to upload profile picture, please try again',
      });
    });
}

export function edit(username) {
  firebase
    .auth()
    .currentUser.updateProfile({displayName: username})
    .then(() => {
      Alert.alert('', 'تم تغيير اسم المستخدم بنجاح', [{text: 'إغلاق'}]);
    });
}

export function passwordReset(email) {
  firebase
    .auth()
    .sendPasswordResetEmail(email)
    .then(() => {
      Alert.alert(
        'تم التحقق',
        'تم إرسال رابط استعادة كلمة المرور إلى بريدك الإلكتروني.',
        [{text: 'موافق'}],
      );
    })
    .catch(error => {
      switch (error.code) {
        case 'auth/invalid-email':
          Alert.alert('خطأ!', 'البريد الإلكتروني الذي قمت بإدخاله غير صحيح', [
            {text: 'إغلاق'},
          ]);
        default:
          Alert.alert('خطأ!', 'البريد الإلكتروني الذي قمت بإدخاله ليس مسجل', [
            {text: 'إغلاق'},
          ]);
      }
    });
}

export function _editAvatar(avatar) {
  firebase
    .auth()
    .currentUser.updateProfile({photoURL: avatar})
    .then(() => {
      Alert.alert('', 'تم تغيير الأفاتار بنجاح', [{text: 'إغلاق'}]);
    });
}

export function login(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password);
}

export function signup(email, password, username, avatar) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(userInfo => {
      var user = firebase.auth().currentUser;
      user.updateProfile({
        displayName: username,
        photoURL: avatar,
      });
      console.log(userInfo);
      Alert.alert('', 'تم إنشاء حسابك بنجاح!', [{text: 'إغلاق'}]);
    })
    .catch(error => {
      switch (error.code) {
        case 'auth/email-already-exists':
          Alert.alert('خطأ!', 'هذا البريد الإلكتروني موجود مسبقا', [
            {text: 'إغلاق'},
          ]);
        case 'auth/invalid-email':
          Alert.alert('خطأ!', 'البريد الإلكتروني الذي قمت بإدخاله غير صحيح', [
            {text: 'إغلاق'},
          ]);
        case 'auth/invalid-password':
          Alert.alert(
            'خطأ!',
            'كلمة السر غير صحيحة. يجب أن تكون من 6 رموز وأكثر.',
            [{text: 'إغلاق'}],
          );
      }
    });
}

export function signout() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      Alert.alert('', 'تم تسجيل الخروج', [{text: 'إغلاق'}]);
      return '1';
    });
}

export function getCurrentUserEmail() {
  return firebase.auth().currentUser.email;
}

export function getCurrentUser() {
  return firebase.auth().currentUser;
}

export function getCurrentUserID() {
  return firebase.auth().currentUser.uid;
}
