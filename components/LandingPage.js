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
import SignUp from './SignUp';

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.title}>
              <Image
                style={styles.logo}
                source={require('../images/logo_v1.png')}></Image>{' '}
              مرحبا بك في
              <Text style={styles.title}>{'\n'}Saui Vibes</Text>
            </Text>
            <View>
              <Text style={styles.newUser}>هل أنت مستخدم جديد؟</Text>
              <Button
                title="حساب جديد"
                style={styles.newUserBtn}
                onPress={() => this.props.history.push('/signup')}
              />
            </View>
            <View style={styles.signInContainer}>
              <Input Label="أدخل اسم المستخدم / البريد الالكتروني" />
              <Input Label="أدخل كلمة المرور" />
              <Button title="تسجيل الدخول" />
            </View>
            <View style={styles.sigin_skip}>
              <Button
                title="تخطى للآن"
                style={styles.skip_text}
                onPress={() => this.props.history.push('/gallary')}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(32, 53, 70) ',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    position: 'relative',
    fontSize: 35,
    color: 'white',
    opacity: 0.9,
    height: 250,
  },
  logo: {
    position: 'relative',
    width: 128,
    height: 150,
    marginLeft: 190,
  },
  signInContainer: {
    position: 'relative',
    left: 0,
    right: 0,
    bottom: 0,
    height: 200,
    padding: 20,
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 70,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'right',
  },
  sigin_skip: {
    marginTop: 25,
  },
  skip_text: {
    color: 'rgb(178, 227, 250)',
    fontSize: 23,
    fontWeight: 'bold',
    position: 'absolute',
    right: 0,
  },
  newUser: {
    fontSize: 20,
    color: 'rgb(238, 238, 238)',
    width: 200,
  },
  newUserBtn: {
    width: 50,
  },
  newUserClick: {
    color: 'rgb(178, 227, 250)',
    fontSize: 21,
    fontWeight: 'bold',
  },
});
