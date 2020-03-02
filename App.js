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
// import firebase from 'firebase';
import LandingPage from './components/LandingPage'
import SignUp from './components/SignUp';
import ContactUs from './components/ContactUs';
import AddEvent from './components/AddEvent';
import Browse from './components/Browse'
import Favorite from './components/Favorite'

const App: () => React$Node = () => {
  return (
    <NativeRouter>
      <SafeAreaView style={styles.container}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/contactus" component={ContactUs} />
          <Route path="/signup" component={SignUp} />
          <Route path="/home" component={Browse} />
          <Route path="/add" component={AddEvent} />
          <Route path="/fav" component={Favorite} />
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
