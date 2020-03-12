import React, {Component} from 'react';
// import {Header, Button} from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';
import {Text, StyleSheet, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome, faBars, faThLarge, faFilter, faSearch, faArrowLeft,faUserAstronaut} from '@fortawesome/free-solid-svg-icons';
import {
  Container,
  Header,
  Item,
  Input,
  Row,
  Button,
  Segment,
  Left,
  Right,
  Icon,
  Body,
  Title,
  Content,

} from 'native-base';

export default class TopNav extends Component {
  render() {
    return (
      // <Header backgroundColor="rgb(21, 34, 44)">
      //   <Button
      //     icon={<Icon name="th-large" size={30} color="white" />}
      //     type="clear"
      //   />
      //   <Button
      //     icon={<Icon name="filter" size={30} color="white" />}
      //     type="clear"
      //   />
      //   <Button
      //     icon={<Icon name="search" size={30} color="white" />}
      //     type="clear"
      //   />
      //   <Text>Saudi Vibes</Text>
      // </Header>
      <Container style={styles.headerContainer}>
        <Header hasSegment style={styles.header}>
          <Left>
           
			<Button transparent onPress={() => this.props.history.push('/home')}>
            <FontAwesomeIcon icon={faArrowLeft} size={25} color='white' style={styles.backbutton  }/>

            </Button>
          </Left>
         
          <Right>
		  <FontAwesomeIcon icon={faUserAstronaut} size={50} color='white' style={styles.chatPic }/>
          </Right>
        </Header>
      
         
         
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    // flex: 1,
    // flexDirection: 'row',
    // position: 'relative'
    width: '100%',
  },
  header: {
    backgroundColor: '#818F88',
  },
  icon: {
    marginHorizontal: 10,
  },
  headerTitle:{
    textAlign: 'center',
    marginLeft: 20
  },
  backbutton:{
	marginLeft: "-50%",
	marginTop: "-30%"
  },
  chatPic:{
	marginRight: "-50%",
	marginTop: "-30%" 
  },
});
