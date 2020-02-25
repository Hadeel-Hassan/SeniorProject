import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';
import Input from './Input';

export default class SignUp extends Component {
  render() {
    return (
      <>
        <View style={styles.back}>
          <Button title=" رجوع >" onPress={() => this.props.history.push("/")}/>
        </View>
        <SafeAreaView>
          <Text style={styles.title}>أنشئ حسابك الجديد</Text>
          <Input Label="أدخل اسم المستخدم" />
          <Input Label="أدخل البريد الالكتروني" />
          <Input Label="أدخل كلمة المرور" />
          <Input Label="تأكيد كلمة المرور" />
          <Button title="إنشاء حساب جديد" />
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
});
