import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  Button,
} from 'react-native';
import Input from './Input';

export default class ContactUs extends Component {
  render() {
    return (
      <>
        <View style={styles.back}>
          <Button title=" رجوع >" onPress={() => this.props.history.push("/")}/>
        </View>
        <SafeAreaView>
          <Text style={styles.title}>اتصل بنا</Text>
          <Input Label="الاسم" />
          <Input Label="البريد الالكتروني" />
          <Input Label="عنوان الرسالة" />
          <View style={styles.msg}>
          <Input Label="اكتب رسالتك ..." />
          </View>
          <Button title="إرسال" />
        </SafeAreaView>
      </>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  back: {
    width: 60,
    marginBottom: 60,
    marginRight: 300,
  },
  msg: {
      width: 300,
      height: 60
  }
});
