import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faArrowLeft,
  faArrowAltCircleLeft,
} from '@fortawesome/free-solid-svg-icons';
import Input from './Input';
import {signup} from '../firebase/config';

export default class SignUp extends Component {
  state = {
    email: '',
    password: '',
    rePassword: '',
    username: '',
    female: 0,
    femaleUrl: 'https://www.bootdey.com/img/Content/avatar/avatar5.png',
    male: 0,
    maleUrl: 'https://www.bootdey.com/img/Content/avatar/avatar6.png',
    bColor1: 'black',
    bWidth1: 2,
    bColor2: 'black',
    bWidth2: 2,
  };


  handleMale() {
    this.setState({male: 1, female: 0,bColor1: 'green', bWidth1: 5, bColor2: 'black', bWidth2: 2});
    
  }

  handleFemale() {
    this.setState({female: 1, male: 0,bColor2: 'green', bWidth2: 5, bColor1: 'black', bWidth1: 2});
  }

  handleSignUp() {
    if (
      this.state.email === '' ||
      this.state.password === '' ||
      this.state.username === '' ||
      (this.state.female === 0 && this.state.male===0)
    ) {
      Alert.alert('خطأ', 'لم يتم إدخال كافة الحقول المطلوبة', [
        {text: 'إغلاق'},
      ]);
    } else if (this.state.password !== this.state.rePassword) {
      Alert.alert('خطأ في كلمة المرور', 'كلمة المرور غير متطابقة', [
        {text: 'إغلاق'},
      ]);
    } else {
      if (this.state.male === 1) {
        signup(
          this.state.email,
          this.state.password,
          this.state.username,
          this.state.maleUrl,
        );
      } else if (this.state.female === 1) {
        signup(
          this.state.email,
          this.state.password,
          this.state.username,
          this.state.femaleUrl,
        );
      }

      this.props.history.push('/')
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
            marginBottom: '10%',
            marginTop: '10%',
          }}
          onPress={() => this.props.history.push('/')}>
          <FontAwesomeIcon
            icon={faArrowAltCircleLeft}
            size={40}
            color="#fd7066"
          />
        </TouchableOpacity>
        <SafeAreaView style={{flex: 1, width: 300}}>
          <Text style={styles.title}>أنشئ حسابك الجديد</Text>
          <TextInput
            style={styles.input}
            placeholder="أدخل اسم المستخدم"
            placeholderTextColor="darkgray"
            keyboardType="default"
            returnKeyType="next"
            autoCorrect={false}
            onChangeText={text => this.setState({username: text})}
          />
          <TextInput
            style={styles.input}
            placeholder="أدخل البريد الإلكتروني"
            placeholderTextColor="darkgray"
            keyboardType="email-address"
            returnKeyType="next"
            autoCorrect={false}
            onChangeText={text => this.setState({email: text})}
          />
          <Text style={styles.chooseAvatar}>اختر الأفاتار الخاص بك</Text>

          <View style={{flexDirection: 'row', height: 80, marginBottom: 30}}>
            <TouchableOpacity onPress={() => this.handleMale()}>
              <Image
                source={{
                  uri: 'https://www.bootdey.com/img/Content/avatar/avatar6.png',
                }}
                style={{
                  height: 80,
                  width: 80,
                  borderRadius: 40,
                  borderColor: this.state.bColor1,
                  borderWidth: this.state.bWidth1,
                  margin: 6,
                  marginRight: 40,
                  marginLeft: 30,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.handleFemale()}>
              <Image
                source={{
                  uri: 'https://www.bootdey.com/img/Content/avatar/avatar5.png',
                }}
                style={{
                  height: 80,
                  width: 80,
                  borderRadius: 40,
                  borderColor: this.state.bColor2,
                  borderWidth: this.state.bWidth2,
                  margin: 6,
                }}
              />
            </TouchableOpacity>
          </View>
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
  chooseAvatar: {
    marginRight: 10,
    marginVertical: 10,
    fontSize: 16,
  },
  signupBtn: {
    marginVertical: 20,
  },
});
