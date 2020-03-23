import React, {Component} from 'react';
// import {Header, Button} from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';
import {Text, StyleSheet, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome, faBars, faThLarge, faFilter, faSearch} from '@fortawesome/free-solid-svg-icons';
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

export default class TopNavGrid extends Component {
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
        <Header hasSegment style={styles.headerContainer}>
          <Left>
            <Button transparent>
            <FontAwesomeIcon icon={faFilter} color='white'/>
            </Button>
          </Left>
          <Body>
            <Title style={styles.headerTitle}>تصفح الفعاليات</Title>
          </Body>
          <Right>
            <Button transparent>
              <FontAwesomeIcon icon={ faSearch } color='white'/>
            </Button>
          </Right>
        </Header>
        <Segment style={styles.headerContainerS}>
          <Button first >
            <FontAwesomeIcon
              icon={faBars}
              color="black"
              size={25}
              style={styles.icon}
              onPress={()=> {this.props.history.push('/home')}}
            />
          </Button>
          <Button last active >
            <FontAwesomeIcon
              icon={faThLarge}
              color="black"
              size={25}
              style={styles.icon}
            />
          </Button>
        </Segment>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    // flex: 1,
    // flexDirection: 'row',
    // position: 'absolute',
    // zIndex: 1000,
    width: '100%',
    height: 60,
    marginTop: 0,
    marginBottom: -70
  },
  headerContainerS: {
    // flex: 1,
    // flexDirection: 'row',
    // position: 'absolute',
    // zIndex: 1000,
    marginBottom: -100,
    top: 50,
    height: 50,
    width: '100%',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    // position: 'absolute',
    top: 40,
    display: 'flex',
    zIndex: 1000,
    backgroundColor: 'rgb(1, 106, 167)',
  },
  icon: {
    marginHorizontal: 10,
  },
  headerTitle:{
    textAlign: 'center',
    marginLeft: 50
  },
});

export function fun(){

}
