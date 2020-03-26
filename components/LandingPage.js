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
  TouchableNativeFeedback,
  Button,
  Alert,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
// import {Button, Icon} from 'native-base';
import {BottomNavigation} from 'react-native-material-ui';
import Input from './Input';
import SignUp from './SignUp';
import {faArrowAltCircleLeft} from '@fortawesome/free-solid-svg-icons';
// import Icon from 'react-native-vector-icons/MaterialIcons';

import {login, signup} from '../firebase/config'


export default class LandingPage extends Component {
  state={
    email: '',
    password: '',
  }

  handleSignUp(){
    if(this.state.email === '' || this.state.password === ''){
    Alert.alert('خطأ في تسجيل الدخول', 'لم يتم إدخال كافة الحقول المطلوبة', [{text: 'إغلاق'}]);
    }
    else{
      login(this.state.email, this.state.password);
      this.props.history.push("/home")
    }
    
  }
  render() {
    return (
      <>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}>
          <View style={styles.container}>
            <Image
              style={styles.logo}
              source={require('../images/logo_v1.png')}></Image>
            <Text style={styles.title}>مرحبا بك في {'\n'} Saudi Vibes</Text>

            <View style={styles.signInContainer}>
              {/* multiline */}
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
              <Button
                style={styles.signInBtn}
                color="rgb(1, 106, 167)"
                title="تسجيل الدخول"
                onPress={(e) => this.handleSignUp()}
              />
              <View style={styles.newUserContainer}>
                <Button
                  title="حساب جديد"
                  style={styles.newUserBtn}
                  onPress={() => this.props.history.push('/signup')}
                  color="rgb(1, 106, 167)"
                />
                <Text style={styles.newUser}>هل أنت مستخدم جديد؟</Text>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.skipContainer}>
          <TouchableOpacity style={styles.skip} onPress={() => this.props.history.push('/home')}>
            <FontAwesomeIcon
              icon={faArrowAltCircleLeft}
              size={35}
              color="rgb(56, 56, 56)"
            />
            <Text style={styles.skip_txt}>تخطي</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: -10,
  },
  title: {
    // position: 'relative',
    fontSize: 35,
    color: 'black',
    opacity: 0.9,
  },
  logo: {
    // position: 'relative',
    width: 132,
    height: 150,
  },
  signInContainer: {
    // position: 'relative',
    height: 200,
    padding: 20,
    zIndex: -100,
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
  skipContainer: {
    zIndex: +1000,
    alignSelf: 'flex-start',
    position: 'relative',
    top: 60,
    left: 20
  },
  skip: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  skip_txt: {
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'center',
    marginLeft: 10,
  },
  newUser: {
    fontSize: 17,
    color: 'rgb(56, 56, 56)',
    width: 200,
    textAlign: 'center',
    marginTop: 5,
    zIndex: 10,
  },
  signInBtn: {
    marginVertical: 20,
    // zIndex: 10,
  },
  newUserContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 10,
  },
});
