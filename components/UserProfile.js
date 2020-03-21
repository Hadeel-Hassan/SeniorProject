import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
} from 'react-native';
import { profile, signout } from '../firebase/config'
import BottomNavRegUser from './BottomNavRegUser';

export default class Profile extends Component {
  handleSignOut() {

    if (signout() === '1') { this.props.history.push('/') }
  }
  render() {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
              <Image style={styles.avatar}
                source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
              <Text style={styles.name}>John Doe </Text>
              <Text style={styles.userInfo}> {profile()}</Text>
            </View>
          </View>

          <View style={styles.body}>
            <Button
              title="Sign out"
              onPress={() => { signout(); this.props.history.push('/') }}
            />



          </View>

        </View>
        <BottomNavRegUser history={this.props.history} />
      </>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#DCDCDC",
  },
  headerContent: {
    padding: 89,
    height: 370,
    width: 500,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: "#000000",
    fontWeight: '600',
  },
  userInfo: {
    padding: 12,
    fontSize: 16,
    color: "#778899",
    fontWeight: '600',
  },
  body: {
    backgroundColor: "#778899",
    height: 480,
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
  },
  infoContent: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 5
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
    color: "#FFFFFF",
  }
});
