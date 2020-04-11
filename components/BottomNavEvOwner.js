import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus, faUser, faHome} from '@fortawesome/free-solid-svg-icons';
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
export default class BottomNavEvOwner extends Component {
  render() {
    return (
      <Footer>
        <FooterTab style={styles.footer}>
          <Button onPress={() => this.props.history.push('/owhome')}>
            <FontAwesomeIcon icon={faHome} color="white" size={23} />
          </Button>
          <Button onPress={() => this.props.history.push('/add')}>
            <FontAwesomeIcon icon={faPlus} color="white" size={23} />
          </Button>
          <Button onPress={() => this.props.history.push('/profile')}>
            <FontAwesomeIcon icon={faUser} color="white" size={23} />
          </Button>
        </FooterTab>
      </Footer>
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
    // height: '100%',
    // width: '100%'
    // paddingBottom: 55,
    // paddingTop: 60,
    // marginBottom:40
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
    backgroundColor: '#fd7066',
  },
});
