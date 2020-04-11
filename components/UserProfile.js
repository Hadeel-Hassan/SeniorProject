import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  Modal,
  TextInput,
  KeyboardAvoidingView,
  Linking,
} from 'react-native';
import {signout, getCurrentUser, edit, _editAvatar} from '../firebase/config';
import BottomNavRegUser from './BottomNavRegUser';
import BottomNavEvOwner from './BottomNavEvOwner';
import {Badge, Avatar} from 'react-native-elements';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEdit} from '@fortawesome/free-regular-svg-icons';
import {faPhone, faArrowUp} from '@fortawesome/free-solid-svg-icons';
import {Header} from 'react-native-elements';

export default class Profile extends Component {
  state = {
    edit: false,
    editAvatar: false,
    contact: false,
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
    this.setState({
      male: 1,
      female: 0,
      bColor1: 'green',
      bWidth1: 5,
      bColor2: 'black',
      bWidth2: 2,
    });
  }

  handleFemale() {
    this.setState({
      female: 1,
      male: 0,
      bColor2: 'green',
      bWidth2: 5,
      bColor1: 'black',
      bWidth1: 2,
    });
  }

  handleEditUsername() {
    edit(this.state.username);
  }

  handleEditAvatar(){
    if (this.state.male === 1) {
      _editAvatar(this.state.maleUrl)
    } else if (this.state.female === 1) {
      _editAvatar(this.state.femaleUrl)
    }
    
  }

  handleContactUs() {
    Linking.openURL('mailto:SaudiVibes_support@gmail.com');
  }

  handleSignOut() {
    if (signout() === '1') {
      this.props.history.push('/prof');
    }
  }

  render() {
    return (
      <>
        <Header placement="center" backgroundColor={'#fd7066'}>
          <Text />
          <Text style={{fontSize: 23, color: 'white'}}>الملف الشخصي</Text>
          <Text />
        </Header>
        {getCurrentUser() != null ? (
          <View style={{flex: 1}}>
            <View style={{height: 60}} />
            <View style={{flexDirection: 'row', flex: 1, alignSelf: 'center'}}>
              <Image
                style={styles.avatar}
                source={{uri: getCurrentUser().photoURL}}
              />
              <TouchableOpacity
                style={{
                  backgroundColor: '#F65B50',
                  borderRadius: 20,
                  padding: 7,
                  position: 'absolute',
                  top: 5,
                  left: '25%',
                }}
                onPress={()=>this.setState({editAvatar: true})}>
                <FontAwesomeIcon icon={faEdit} size={26} color={'white'} />
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
              <Text style={styles.displayNameTxt}>
                {getCurrentUser().displayName}
              </Text>
              <TouchableOpacity
                style={{alignSelf: 'center', marginHorizontal: 10}}
                onPress={() => this.setState({edit: true})}>
                <FontAwesomeIcon icon={faEdit} size={30} color={'#F65B50'} />
              </TouchableOpacity>
            </View>
            <KeyboardAvoidingView behavior="position">
              <Modal
                transparent={true}
                animationType="fade"
                visible={this.state.editAvatar}>
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
                    اختر الأفاتار الخاص بك
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      height: 80,
                      marginBottom: 30,
                    }}>
                    <TouchableOpacity onPress={() => this.handleMale()}>
                      <Image
                        source={{
                          uri:
                            'https://www.bootdey.com/img/Content/avatar/avatar6.png',
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
                          uri:
                            'https://www.bootdey.com/img/Content/avatar/avatar5.png',
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
                  <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                    <View
                      style={{
                        marginRight: 25,
                        width: 100,
                        marginTop: 20,
                      }}>
                      <Button
                        title="حفظ"
                        onPress={() => this.handleEditAvatar()}
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
                        onPress={() => this.setState({editAvatar: false})}
                      />
                    </View>
                  </View>
                </View>
              </Modal>
            </KeyboardAvoidingView>
            <KeyboardAvoidingView behavior="position">
              <Modal
                transparent={true}
                animationType="fade"
                visible={this.state.edit}>
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
                    تعديل اسم المستخدم
                  </Text>
                  <TextInput
                    style={{
                      backgroundColor: 'white',
                      width: 270,
                      borderRadius: 10,
                      height: 45,
                    }}
                    placeholder="أدخل اسم المستخدم الجديد"
                    placeholderTextColor="#373737"
                    keyboardType="default"
                    returnKeyType="next"
                    autoCorrect={false}
                    onChangeText={value => {
                      this.setState({username: value});
                    }}
                  />
                  <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                    <View
                      style={{
                        marginRight: 25,
                        width: 100,
                        marginTop: 40,
                      }}>
                      <Button
                        title="حفظ"
                        onPress={() => this.handleEditUsername()}
                      />
                    </View>
                    <View
                      style={{
                        marginLeft: 25,
                        width: 100,
                        marginTop: 40,
                      }}>
                      <Button
                        title="إغلاق"
                        onPress={() => this.setState({edit: false})}
                      />
                    </View>
                  </View>
                </View>
              </Modal>
            </KeyboardAvoidingView>
            {getCurrentUser().email === 'event_jeddah@gmail.com' ? (
              <Text
                style={{alignSelf: 'center', fontSize: 15, marginBottom: 20}}>
                منظم فعاليات
              </Text>
            ) : (
              <Text
                style={{alignSelf: 'center', fontSize: 15, marginBottom: 20}}
              />
            )}
            <Text style={{fontSize: 17, color: '#373737'}}>
              {getCurrentUser().email}
            </Text>
            <View style={{height: 100}} />
            <TouchableOpacity
              style={{flexDirection: 'row', alignSelf: 'center'}}
              onPress={() => this.handleContactUs()}>
              <Text style={{marginHorizontal: 15, fontSize: 18}}>
                تواصل معنا
              </Text>
              <FontAwesomeIcon icon={faPhone} size={20} color={'#F65B50'} />
            </TouchableOpacity>
            <View style={{marginVertical: 20}}>
              <Button
                title="تسجيل الخروج"
                onPress={() => {
                  signout();
                  getCurrentUser();
                  this.props.history.push('/');
                }}
              />
            </View>
          </View>
        ) : (
          <View style={{flex: 1, marginTop: 15}}>
            <Text style={{alignSelf: 'center', marginTop: 20, fontSize: 16}}>
              يجب عليك تسجيل الدخول لاستعراض الملف الشخصي.
            </Text>
            <View style={{width: 200, alignSelf: 'center', marginVertical: 15}}>
              <Button
                title="الذهاب إلى صفحة تسجيل الدخول"
                onPress={() => {
                  this.props.history.push('/');
                }}
              />
            </View>
          </View>
        )}
        {getCurrentUser() ? (
          getCurrentUser().email === 'event_jeddah@gmail.com' ? (
            <BottomNavEvOwner history={this.props.history} />
          ) : (
            <BottomNavRegUser history={this.props.history} />
          )
        ) : (
          <BottomNavRegUser history={this.props.history} />
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFFF',
    height: 300,
    paddingTop: 100,
    width: '100%',
    marginTop: 100,
    flex: 1,
  },
  header2: {
    backgroundColor: '#FFFF',
    height: 600,
    marginTop: -90,
  },
  headerContent: {
    height: 100,
    paddingBottom: 70,
    width: 415,
    alignItems: 'center',
    marginVertical: 10,
  },

  headerContent1: {
    height: 1000,
    paddingTop: 260,
    width: 415,
    alignItems: 'center',
  },
  avatar: {
    // flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'center',
    width: 150,
    height: 150,
    borderRadius: 80,
    alignSelf: 'center',
    // marginBottom: 10,
    // marginLeft: 15,
  },
  displayNameTxt: {
    fontSize: 25,
    alignSelf: 'center',
    marginTop: 15,
  },
  userInfo: {
    padding: 12,
    marginVertical: 15,
    position: 'absolute',
    top: 260,
    fontSize: 16,
    color: '#778899',
    fontWeight: '600',
  },
  body: {
    backgroundColor: '#FFFF',
    height: 430,
    top: 70,
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
  },
  infoContent: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 5,
  },
  iconContent: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 5,
  },
  icon: {
    width: 30,
    height: 30,
    marginTop: 20,
  },
  info: {
    fontSize: 18,
    marginTop: 20,
    color: '#FFFFFF',
  },
});
