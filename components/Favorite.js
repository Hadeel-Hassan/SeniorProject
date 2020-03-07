import React, { Component } from 'react'
import {Text, StyleSheet} from 'react-native';
import BottomNavRegUser from './BottomNavRegUser'
import TopNav from './TopNav'
export default class Favorite extends Component {
    render() {
        return (
            <>
            <TopNav />
            <Text style={styles.fav_text}>
                ليس لديك فعاليات في المفضلة.
            </Text>
            <BottomNavRegUser history={this.props.history}/>
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
