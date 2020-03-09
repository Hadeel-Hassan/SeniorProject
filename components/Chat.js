import React, { Component } from 'react'
import {Text, StyleSheet} from 'react-native';
import BottomNavChat from './BottomNavChat'
import TopNavChat from './TopNavChat'
export default class Favorite extends Component {
    render() {
        return (
            <>
            <TopNavChat history={this.props.history} />
            <Text style={styles.fav_text}>
              mrhbaaaa
            </Text>
            <BottomNavChat />
            </>
        )
    }
}

const styles = StyleSheet.create({
fav_text: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // position: 'absolute'
    // flexDirection: 'row'
    marginVertical: '50%'
}
})
