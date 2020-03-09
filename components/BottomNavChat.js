import React, {Component} from 'react';
// import {Button} from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';
import {View, StyleSheet, TextInput,TouchableOpacity} from 'react-native';
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
export default class BottomNav extends Component {
  render() {
    return (
     <>
        <Footer>
          <FooterTab style={styles.footer}>

		  <TextInput
          placeholder="تفضل اسألني"
          style={styles.styleInput}/>  
		   <TouchableOpacity
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignSelf: 'flex-start',
            marginRight: '5%',
			marginTop: '3%',
			borderRadius: 50
          }} >
		  <FontAwesomeIcon icon={faPaperPlane} size={25} color="white" />
		  </TouchableOpacity>
          </FooterTab>
        </Footer>
        {/* </Container> */}
      </>
    );
  }
}

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
    backgroundColor: '#45434D',
  },
  styleInput: {
	width: '80%',
	borderColor: 'white',
	borderWidth: 1,
	padding: 10,
	margin: 10,
	justifyContent: 'center',
  },
});
