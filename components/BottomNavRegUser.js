import React, {Component} from 'react';
// import {Button} from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';
import {View, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCommentDots,
  faHeart,
  faHome,
  faPlus,
  faUser,
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
        {/* <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <Button
              icon={<FontAwesomeIcon icon={ faHome } size={25} color="white"/>}
              type="clear"
              onPress={() => this.props.history.push('/')}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              icon={<FontAwesomeIcon icon={ faHeart } size={25} color="white"/>}
              type="clear"
              onPress={() => this.props.history.push('/fav')}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              icon={<FontAwesomeIcon icon={ faCommentDots } size={25} color="white"/>}
              type="clear"
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              icon={<FontAwesomeIcon icon={ faPlus } size={25} color="white"/>}
              type="clear"
              onPress={() => this.props.history.push('/add')}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              icon={<FontAwesomeIcon icon={ faUser } size={25} color="white"/>}
              type="clear"
            />
          </View>
        </View>  */}
        {/* <Container Style={styles.container}> */}
        <Footer>
          <FooterTab style={styles.footer}>
            <Button onPress={() => this.props.history.push('/home')}>
              <FontAwesomeIcon icon={faHome} color="white" size={23} />
              {/* <Text>تصفح الفعاليات</Text> */}
            </Button>
            <Button onPress={() => this.props.history.push('/fav')}>
              {/* <Icon name="heart" /> */}
              <FontAwesomeIcon icon={faHeart} color="white" size={23} />
              {/* <Text>المفضلة</Text> */}
            </Button>
            <Button onPress={() => this.props.history.push('/chat')}>
              <FontAwesomeIcon icon={faCommentDots} color="white" size={23} />
              {/* <Text>تحدث مع ميلارا</Text> */}
            </Button>
            <Button onPress={() => this.props.history.push('/profile')}>
              {/* <Icon name="person" /> */}
              <FontAwesomeIcon icon={faUser} color="white" size={23} />
              {/* <Text>الملف الشخصي</Text> */}
            </Button>
          </FooterTab>
        </Footer>
        {/* </Container> */}
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#fd7066',
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
    backgroundColor: '#fd7066',
  },
});
