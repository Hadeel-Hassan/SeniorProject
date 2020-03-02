import React, { Component } from 'react'
import {Text, StyleSheet} from 'react-native';
import BottomNav from './BottomNav'
export default class Favorite extends Component {
    render() {
        return (
            <>
            <Text style={styles.fav_text}>
                ليس لديك فعاليات في المفضلة.
            </Text>
            <BottomNav history={this.props.history}/>
            </>
        )
    }
}

const styles = StyleSheet.create({
fav_text: {
    marginBottom: 260,
    marginTop: 300,
    fontSize: 25,
}
})
