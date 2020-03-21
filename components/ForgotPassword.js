import React, { Component } from 'react'

import { passwordReset } from '../firebase/config'
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
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
    faArrowLeft,
    faArrowAltCircleLeft,
} from '@fortawesome/free-solid-svg-icons';
import Input from './Input';



export default class ForgotPassword extends Component {
    state = {
        email: ''
    };

    handleForget(){
    if (this.state.email === '') {
        Alert.alert('خطأ', 'لم يتم إدخال كافة الحقول المطلوبة', [
            { text: 'إغلاق' },
        ]);

    } else {
        passwordReset(this.state.email);
        Alert.alert('تم', 'تحقق من بريدك الالكتروني', [
            { text: 'إغلاق' },
        ]);
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
                <Text style={styles.title}>استعادة كلمةالسر</Text>
                <TextInput
                    style={styles.input}
                    placeholder="أدخل البريد الإلكتروني"
                    placeholderTextColor="darkgray"
                    keyboardType="email-address"
                    returnKeyType="next"
                    autoCorrect={false}
                    onChangeText={text => this.setState({ email: text })}
                />

                <Button
                    color="rgb(1, 106, 167)"
                    title="إستعادة"
                    onPress={() => this.handleForget()}
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
