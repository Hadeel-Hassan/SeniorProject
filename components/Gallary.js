import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  Picker,
  ActionSheetIOS,
  DocumentPicker,
} from 'react-native';
import Input from './Input';
import {firebase, storage} from '../firebase/config';

export default class Gallary extends Component {
  //   componentDidMount() {
  //     let images = [];
  //     firebase
  //       .firestore()
  //       .collection(localStorage)
  //       .get()
  //       .then(function(query) {
  //         query.forEach(function(doc) {
  //           let imageData = {
  //             url: doc.data().url,
  //           };
  //           images.push(imageData);
  //         });
  //       });
  //   }

  // componentDidMount(){
  // var storageRef = storage.ref();
  // storageRef.child('PhotoEvents/').listAll().then(function(result){
  //     result.items.forEach(function(imgRef){
  //         i++;
  //         displayImgs(i, imgRef);
  //     })
  // });

  // function displayImgs(row, images){
  //  images.getDownloadURL.then(function(url){

  //  })
  // }
  // }

  render() {
    return (
      <>
        <View style={styles.back}>
          <Button
            title=" رجوع >"
            onPress={() => this.props.history.push('/')}
          />
        </View>
        <SafeAreaView style={styles.contain}>
          <Text style={styles.title}>إضافة فعالية</Text>
          <Input Label="اسم الفعالية" />
          <Picker styly={styles.picker} selectedValue="اختر موعد الفعالية">
            <Picker.Item
              styly={styles.picker}
              label="اختر موعد الفعالية"
              value="اختر الفئة العمرية"
            />
            <Picker.Item label="عوائل" value="family" />
            <Picker.Item label="نساء" value="women" />
          </Picker>
          <Picker styly={styles.picker} selectedValue="اختر وقت الفعالية">
            <Picker.Item
              styly={styles.picker}
              label="اختر وقت الفعالية"
              value="اختر الفئة العمرية"
            />
            <Picker.Item label="عوائل" value="family" />
            <Picker.Item label="نساء" value="women" />
          </Picker>
          <Picker styly={styles.picker} selectedValue="اختر الفئة العمرية">
            <Picker.Item
              styly={styles.picker}
              label="اختر الفئة العمرية"
              value="اختر الفئة العمرية"
            />
            <Picker.Item label="عوائل" value="family" />
            <Picker.Item label="نساء" value="women" />
          </Picker>
          <Picker styly={styles.picker} selectedValue="اختر نوع الفعالية">
            <Picker.Item
              styly={styles.picker}
              label="اختر نوع الفعالية"
              value="اختر الفئة العمرية"
            />
            <Picker.Item label="عوائل" value="family" />
            <Picker.Item label="نساء" value="women" />
          </Picker>
          <Input Label="حدد موقع الفعالية" />
          <Input Label="اكتب وصف للفعالية" />
          {/* <Image
            source={require('')}
          /> */}
          <View>
            <View style={styles.file2}>
              <Input Label="ارفع ملصق الفعالية" />
            </View>
            <View style={styles.file}>
              <Button title="اختر ملف" />
            </View>
          </View>
          <Button style={styles.submit} title="أضف الفعالية" />
        </SafeAreaView>
      </>
    );
  }
}
const styles = StyleSheet.create({
  contain: {
    width: 300,
  },
  file: {
    width: 100,
    alignItems: 'flex-end',
    marginBottom: 10
  },
  file2: {
    width: 300,
    alignItems: 'flex-start'
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  back: {
    width: 60,
    marginBottom: 10,
    marginRight: 300,
  },
  picker: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: '#fff',
    textDecorationColor: '#fff',
    textShadowColor: '#fff',
    fontSize: 20,
  },
  submit:{
      marginTop: 10
  }
});
