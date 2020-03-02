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
  TextInput,
} from 'react-native';
import {Hoshi} from 'react-native-textinput-effects'
import Input from './Input';
// import firebase from '../firebase/config';
import BottomNav from './BottomNav';
export default class AddEvent extends Component {
  state = {
    name: '',
  };

  render() {
    return (
      <>
        <SafeAreaView style={styles.contain}>
          <Text style={styles.title}>إضافة فعالية</Text>
          <Hoshi
            value={this.state.name}
            style={styles.txtinput}
            label="عنوان الفعالية"
            placeholderTextColor="rgba(255,255,255,0.8)"
            keyboardType="email-address"
            returnKeyType="next"
            autoCorrect={false}
            onChangeText={name => this.setState({name: name})}
          />
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
        <BottomNav history={this.props.history} />
      </>
    );
  }
}
const styles = StyleSheet.create({
  contain: {
    width: 300,
    paddingTop: 20,
    paddingBottom: 10,
  },
  file: {
    width: 100,
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  file2: {
    width: 300,
    alignItems: 'flex-start',
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
  submit: {
    marginTop: 10,
  },
  txtinput: {
    textAlign: 'right'
  }
});
