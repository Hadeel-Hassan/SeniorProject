import React, {Component} from 'react';
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
      <Container style={styles.headerContainer}>
        <Header hasSegment style={styles.headerContainerH}>
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
    width: '100%',
    height: 60,
    marginTop: 0,
    marginBottom: -70
  },
  headerContainerH: {
    backgroundColor: '#fd7066',
    width: '100%',
    height: 60,
    marginTop: 0,
    marginBottom: -70
    
  },
  headerContainerS: {
    backgroundColor: '#fd7066',
    marginBottom: -100,
    top: 50,
    height: 50,
    width: '100%',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
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
