import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  Modal,
  Button,
  Alert,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowAltCircleLeft} from '@fortawesome/free-solid-svg-icons';
import {
  firebase_auth,
  passwordReset
} from '../firebase/config';

export default class LandingPage extends Component {
  state = {
    email: '',
    password: '',
    forgot_email: '',
    isForget: false,
  };

  handleForgetPassword() {
    if (this.state.forgot_email === '') {
      Alert.alert('خطأ', 'لم يتم إدخال البريد الإلكتروني', [
          { text: 'إغلاق' },
      ]);

  } else {
      passwordReset(this.state.forgot_email);
  }
  }

  handleSignUp() {
    if (this.state.email === '' || this.state.password === '') {
      Alert.alert('خطأ في تسجيل الدخول', 'لم يتم إدخال كافة الحقول المطلوبة', [
        {text: 'إغلاق'},
      ]);
    } else {
      firebase_auth
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
          if (this.state.email === 'event_jeddah@gmail.com') {
            this.props.history.push('/owhome');
          } else {
            this.props.history.push('/home');
          }
        })
        .catch(error => {
          switch (error.code) {
            case 'auth/invalid-email':
              Alert.alert(
                'خطأ!',
                'البريد الإلكتروني الذي قمت بإدخاله غير صحيح',
                [{text: 'إغلاق'}],
              );
            case 'auth/invalid-password':
              Alert.alert('خطأ!', 'كلمة المرور التي قمت بإدخالها غير صحيحة', [
                {text: 'إغلاق'},
              ]);
            default:
              Alert.alert('خطأ!', 'كلمة المرور التي قمت بإدخالها غير صحيحة', [
                {text: 'إغلاق'},
              ]);
          }
        });
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
              source={require('../images/logo_v2.png')}
            />
            <Text style={styles.title}>مرحبا بك في {'\n'} Saudi Vibes</Text>
            <View style={styles.signInContainer}>
              <KeyboardAvoidingView behavior="padding">
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
              </KeyboardAvoidingView>
              <KeyboardAvoidingView behavior="position">
              <Modal
                transparent={true}
                animationType="fade"
                visible={this.state.isForget}>
                <View
                  style={{
                    alignSelf: 'center',
                    height: 300,
                    justifyContent: 'center',
                    backgroundColor: '#ccc',
                    marginVertical: 180,
                    paddingHorizontal: 50,
                    borderRadius: 20,
                  }}>
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: 'bold',
                      alignSelf: 'center',
                      marginVertical: 15,
                    }}>
                    استعادة كلمة المرور
                  </Text>
                  <TextInput
                    style={{
                      backgroundColor: 'white',
                      width: 270,
                      borderRadius: 10,
                      height: 45,
                    }}
                    placeholder="أدخل بريدك الإلكتروني"
                    placeholderTextColor="#373737"
                    keyboardType="default"
                    returnKeyType="next"
                    autoCorrect={false}
                    onChangeText={value => {
                      this.setState({forgot_email: value});
                    }}
                  />
                  <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                    <View
                      style={{
                        marginRight: 25,
                        width: 100,
                        marginTop: 20,
                      }}>
                      <Button
                        title="إرسال"
                        onPress={() => this.handleForgetPassword()}
                      />
                    </View>
                    <View
                      style={{
                        marginLeft: 25,
                        width: 100,
                        marginTop: 20,
                      }}>
                      <Button
                        title="إغلاق"
                        onPress={() => this.setState({isForget: false})}
                      />
                    </View>
                  </View>
                </View>
              </Modal>
            </KeyboardAvoidingView>
              <Button
                style={styles.signInBtn}
                color="rgb(1, 106, 167)"
                title="تسجيل الدخول"
                onPress={e => this.handleSignUp()}
              />
              <TouchableOpacity onPress={()=> this.setState({isForget: true})}>
                <Text
                  style={{
                    alignSelf: 'center',
                    marginTop: 8,
                    color: '#0693E3',
                    fontSize: 17,
                    textDecorationLine: 'underline',
                  }}>
                  هل نسيت كلمة المرور؟
                </Text>
              </TouchableOpacity>
              <View style={styles.newUserContainer}>
                <TouchableOpacity
                  onPress={() => this.props.history.push('/signup')}>
                  <Text
                    style={{
                      marginHorizontal: 7,
                      alignSelf: 'center',
                      marginTop: 4,
                      color: '#0693E3',
                      fontSize: 16,
                      textDecorationLine: 'underline',
                    }}>
                    أنشئ حسابك الآن
                  </Text>
                </TouchableOpacity>

                <Text style={styles.newUser}>مستخدم جديد؟</Text>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.skipContainer}>
          <TouchableOpacity
            style={styles.skip}
            onPress={() => this.props.history.push('/home')}>
            <FontAwesomeIcon
              icon={faArrowAltCircleLeft}
              size={35}
              color="#fd7066"
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
  },
  title: {
    fontSize: 35,
    color: 'black',
    opacity: 0.9,
  },
  logo: {
    width: 132,
    height: 150,
  },
  signInContainer: {
    // height: 300,
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
    top: 10,
    left: 30,
  },
  skip: {
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
    textAlign: 'center',
    marginTop: 5,
  },
  signInBtn: {
    marginVertical: 20,
  },
  newUserContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    alignSelf: 'center'
  },
});
