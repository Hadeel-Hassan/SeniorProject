import React, {Component} from 'react';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, StyleSheet} from 'react-native';
export default class BottomNav extends Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <Button
              icon={<Icon name="home" size={30} color="white" />}
              type="clear"
              onPress={() => this.props.history.push('/')}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              icon={<Icon name="heart" size={30} color="white" />}
              type="clear"
              onPress={() => this.props.history.push('/fav')}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              icon={<Icon name="comment" size={30} color="white" />}
              type="clear"
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              icon={<Icon name="plus" size={30} color="white" />}
              type="clear"
              onPress={() => this.props.history.push('/add')}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              icon={<Icon name="user-circle" size={30} color="white" />}
              type="clear"
            />
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(21, 34, 44)',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 35,
    paddingTop: 20
  },
  buttonContainer: {
    flex: 1,
  },
});
