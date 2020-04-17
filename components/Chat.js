import React, {Component} from 'react';
import 'react-native-get-random-values';
import { View, Dimensions, KeyboardAvoidingView, TouchableOpacity, Text} from "react-native";
import {WebView} from 'react-native-webview';
import {Header} from 'react-native-elements'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class ViewUsers extends Component {
  render() {
    return (
        <>
        <Header
            placement="center"
            backgroundColor={'#fd7066'}
            rightContainerStyle={{marginRight: 20}}
            leftContainerStyle={{marginLeft: 20}}
            leftComponent={
              <Text></Text>
            }
            centerComponent={{
              text: "تحدث مع ميلارا",
              style: {color: '#fff', fontSize: 18},
            }}
            rightComponent={
              <TouchableOpacity
                onPress={() => this.props.history.push("/home")}>
                <FontAwesomeIcon icon={faArrowRight} size={20} color="white" />
              </TouchableOpacity>
            }
          />
        <KeyboardAvoidingView style={{flex: 1}} behavior="position">
      <WebView
        source={{uri: 'http://rerenailart.tk/'}}
        style={{width: width}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        scalesPageToFit={true} 
      />
      </KeyboardAvoidingView>
      </>
    );
  }
}
