import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faArrowLeft,
  faArrowAltCircleLeft,
} from '@fortawesome/free-solid-svg-icons';
import Input from './Input';
import {signup} from '../firebase/config'

export default class SignUp extends Component {
  state = {
    email: '',
    password: '',
    rePassword: '',
  };

  handleSignUp() {
    if (this.state.email === '' || this.state.password === '') {
      Alert.alert('خطأ', 'لم يتم إدخال كافة الحقول المطلوبة', [
        {text: 'إغلاق'},
      ]);
    } else if (this.state.password !== this.state.rePassword) {
      Alert.alert('خطأ في كلمة المرور', 'كلمة المرور غير متطابقة', [
        {text: 'إغلاق'},
      ]);
    } else {
      signup(this.state.email, this.state.password);
    }
  }
  render() {
    return (
      <>
        <TouchableOpacity
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignSelf: 'flex-start',
            marginLeft: '10%',
            marginBottom: '20%',
          }}
          onPress={() => this.props.history.push('/')}>
          <FontAwesomeIcon
            icon={faArrowAltCircleLeft}
            size={40}
            color="rgb(1, 106, 167)"
          />
        </TouchableOpacity>
        <SafeAreaView>
          <Text style={styles.title}>أنشئ حسابك الجديد</Text>
          <TextInput
            style={styles.input}
            placeholder="أدخل البريد الإلكتروني"
            placeholderTextColor="darkgray"
            keyboardType="email-address"
            returnKeyType="next"
            autoCorrect={false}
            onChangeText={text => this.setState({email: text})}
          />
          <TextInput
            style={styles.input}
            placeholder="أدخل كلمة المرور"
            placeholderTextColor="darkgray"
            returnKeyType="next"
            autoCorrect={false}
            secureTextEntry
            onChangeText={text => this.setState({password: text})}
          />
          <TextInput
            style={styles.input}
            placeholder="تأكيد كلمة المرور"
            placeholderTextColor="darkgray"
            returnKeyType="next"
            autoCorrect={false}
            secureTextEntry
            onChangeText={text => this.setState({rePassword: text})}
          />
          <Button
            color="rgb(1, 106, 167)"
            title="إنشاء حساب جديد"
            onPress={() => this.handleSignUp()}
          />
        </SafeAreaView>
      </>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 23,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 20,
  },
  input: {
    height: 40,
    paddingHorizontal: 70,
    marginBottom: 20,
    textAlign: 'right',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  signupBtn: {
    marginVertical: 20,
  },
});
