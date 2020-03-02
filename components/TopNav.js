import React, {Component} from 'react';
import {Header, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text, StyleSheet, View} from 'react-native';
export default class TopNav extends Component {
  render() {
    return (
        <Header backgroundColor="rgb(21, 34, 44)">
          <Button
            icon={<Icon name="th-large" size={30} color="white" />}
            type="clear"
          />
          <Button
            icon={<Icon name="filter" size={30} color="white" />}
            type="clear"
          />
          <Button
            icon={<Icon name="search" size={30} color="white" />}
            type="clear"
          />
          <Text>Saudi Vibes</Text>
        </Header>
    );
  }
}

const styles = StyleSheet.create({
  
});
