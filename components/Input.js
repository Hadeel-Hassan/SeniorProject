import React, { Component } from "react";
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
    Button
  } from "react-native";
export default class extends Component {
  render() {
    return (
      <>
        <TextInput
          style={styles.input}
          placeholder={this.props.Label}
          placeholderTextColor="rgba(255,255,255,0.8)"
          keyboardType="email-address"
          returnKeyType="next"
          autoCorrect={false}
          // onChangeText={onChangeText}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        paddingHorizontal: 70,
        color: "#fff",
        marginBottom: 20,
        textAlign: "right"
      }
  });
