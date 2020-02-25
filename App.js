/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NativeRouter, Switch, Route} from 'react-router-native';

import LandingPage from './components/LandingPage'
import SignUp from './components/SignUp';
import ContactUs from './components/ContactUs';

const App: () => React$Node = () => {
  return (
    <NativeRouter>
      <SafeAreaView style={styles.container}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/contactus" component={ContactUs} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </SafeAreaView>
    </NativeRouter>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(32, 53, 70)",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;
