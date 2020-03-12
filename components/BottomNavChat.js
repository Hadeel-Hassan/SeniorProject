import React, {Component ,useState} from 'react';
// import {Button} from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';
import {View, StyleSheet, TextInput,TouchableOpacity,Modal} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCommentDots,
  faHeart,
  faHome,
  faPlus,
  faUser,
  faSeedling,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Text,
  Icon,
  Button,

} from 'native-base';
import TopNav from './TopNav';


export default function BottomNav() { 

	const [enteredQuestion, setEnterdQuestion] = useState('');
	//const [courseGoals, setCourseGola] = useState([]); 
	const InputHandler = enterText => {
		setEnterdQuestion(enterText);
	  };
	
	  const addHandler = () => {
		// props.onAddGoal(enteredGoal);
		// setEnterdGoal('');
		console.log(enteredQuestion);
	  };
	//   const addHandler = goalTitle => {
	// 	console.log(enteredGoal);
	// 	//setCourseGola(currentGoals => [...currentGoals,enteredQuestion ]);

	//   };
	 
    return (
     <>
	 
        <Footer>
          <FooterTab style={styles.footer}>

		  <TextInput
          style={{ flex: 1 }}
		  placeholder="اهلاً، تفضل اسألني .."
		  style={styles.styleInput}
		  onChangeText={InputHandler}
          value={enteredQuestion}
		  />  
		
		   <TouchableOpacity animationType="slide" >
		<Button onPress={addHandler} >
		  <FontAwesomeIcon icon={faPaperPlane} size={25} color="white"  style={styles.styleiCON} />
		  </Button>
		  </TouchableOpacity>
		  {/* <View>
		  <Text>{enteredQuestion}</Text>	
		  </View> */}
          </FooterTab>
        </Footer>

        {/* </Container> */}
      </>
    );
  
}
// const print = () => {
// 	console.log('test');
// }

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'rgb(21, 34, 44)',
    // flex: 1,
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingBottom: 35,
    // paddingTop: 20
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  scrollView: {
    // backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: 'white',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    // color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
	backgroundColor: '#BEDECE',
	flexDirection: 'row',
  },
  styleInput: {
	width: '80%',
	borderColor: 'white',
	borderWidth: 1,
	padding: 10,
	margin: 10,
	justifyContent: 'center',
			borderBottomLeftRadius: 30,
			borderBottomRightRadius: 30,
			borderTopRightRadius: 30,
			borderTopLeftRadius: 30,
  },
  styleiCON: {
	marginTop: 13,
	marginRight: 30,
  },
});
