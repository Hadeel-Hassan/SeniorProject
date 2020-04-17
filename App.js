import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  YellowBox,
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
import LandingPage from './components/LandingPage';
import SignUp from './components/SignUp';
import EventInfo from './components/EventInfo';
import AddEventPage from './components/AddEventPage';
import Browse from './components/Browse';
import Favorite from './components/Favorite';
import Chat from './components/Chat';
import EventOwner from './components/EventOwner';
import BrowseAdmin from './components/BrowseAdmin'
import {decode, encode} from 'base-64';
import BrowseGrid from './components/BrowseGrid';
import UserProfile from './components/UserProfile';
import ViewUsers  from "./components/ViewUsers";

if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}
// YellowBox.ignoreWarnings(['Warning: ReactNative.createElement']);
export default class App extends Component {
  render() {
    console.disableYellowBox = true;
    return (
      <NativeRouter>
        <SafeAreaView style={styles.container}>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/info" component={EventInfo} />
            <Route path="/signup" component={SignUp} />
            <Route path="/home" component={Browse} />
            <Route path="/add" component={AddEventPage} />
            <Route path="/fav" component={Favorite} />
            <Route path="/chat" component={Chat} />
            <Route path="/grid" component={BrowseGrid} />
            <Route path="/owhome" component={EventOwner} />
            <Route path="/profile" component={UserProfile} />
          </Switch>
        </SafeAreaView>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
