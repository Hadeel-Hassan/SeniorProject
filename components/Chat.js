import React, { Component } from 'react'
import {StyleSheet, Text, View, Image, } from 'react-native';
import BottomNavChat from './BottomNavChat';
import TopNavChat from './TopNavChat';
import ChatBot from 'react-native-chatbot';
import { GiftedChat } from 'react-native-gifted-chat';


// const steps = [
// 	{
// 	  id: '0',
// 	  message: 'Welcome to react chatbot!',
// 	  trigger: '1',
// 	},
// 	{
// 	  id: '1',
// 	  message: 'Bye!',
// 	  end: true,
// 	},
//   ];

export default class Favorite extends Component {

    render() {
        return (
            <>
           <TopNavChat history={this.props.history} />
            <Text >
			{/* <ChatBot steps={steps} style={styles.testStyle} /> */}
			
            </Text>
            <BottomNavChat />

      
       


            </>
        )
    }
}


// const styles = StyleSheet.create({
// fav_text: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     // position: 'absolute'
//     // flexDirection: 'row'
//     marginVertical: '50%'
// }
// })

// const offset = 24;
// const styles = StyleSheet.create({
//   nameInput: { // 3. <- Add a style for the input
//     height: offset * 2,
//     margin: offset,
//     paddingHorizontal: offset,
//     borderColor: '#111111',
//     borderWidth: 1,
//   },
// });


const styles = StyleSheet.create({

	testStyle: {
	fontSize: 14,
 borderTopRightRadius: 18,
borderBottomRightRadius: 18,
borderBottomLeftRadius: 18,
 paddingTop: 12,
paddingBottom: 12,
paddingLeft: 12,
paddingRight: 12,
marginTop: -8,
marginRight: 6,
 marginBottom: 10,
 marginLeft: 58,
 maxWidth: 306.4,
	},
});