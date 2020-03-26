import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import BottomNavRegUser from './BottomNavRegUser';
import TopNav from './TopNav';
import {
  Container,
  Header,
  Item,
  Input,
  Row,
  Button,
  Card,
  CardItem,
  Thumbnail,
  Segment,
  Left,
  Right,
  Icon,
  Body,
} from 'native-base';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faClock,
  faCalendar,
  faCalendarAlt,
  faHeart,
} from '@fortawesome/free-regular-svg-icons';
import {faUsers} from '@fortawesome/free-solid-svg-icons';

import {db} from '../firebase/config';
export default class Browse extends Component {
  state = {
    items: [],
    isSearchActive: false,
    test: "hi"
  };

  last() {
    return <View style={{paddingVertical: 20}}></View>;
  }

  componentWillMount() {
    let d = [];
    db.collection('events')
      .where('eventStatus', '==', 'accepted')
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          d.push(doc.data());
        });
      })
      .then(() => {
        this.setState({items: d});
      })
      .catch(function(error) {
        console.log('Error getting documents: ', error);
      });
  }

  _renderItem = ({item, index}) => {
    return (
      <TouchableOpacity style={styles.card}>
        <Card style={{marginBottom: 20, width: 328, borderRadius: 10}}>
          <CardItem>
            <Left>
              <Body style={{flex: 1, flexDirection: 'row', marginLeft: -6}}>
                <FontAwesomeIcon
                  icon={faHeart}
                  size={16}
                  color="#aaa"
                  style={{top: 4}}
                />
                <Text
                  style={{
                    color: '#bbb',
                    alignSelf: 'flex-start',
                    marginLeft: 15,
                  }}>
                  {item.event_type}
                </Text>
              </Body>
            </Left>
            <Right>
              <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
            </Right>
          </CardItem>
          <CardItem cardBody>
            <Image
              source={{
                uri: item.imageURL,
              }}
              style={{height: 165, width: null, flex: 1}}
            />
          </CardItem>
          <CardItem footer>
            <Left style={{flex: 1, flexDirection: 'row'}}>
              <Text
                style={{
                  marginLeft: 6,
                  fontSize: 12,
                  alignSelf: 'center',
                  marginRight: 4,
                }}>
                {item.age_group}
              </Text>
              <FontAwesomeIcon icon={faUsers} size={16} color="#aaa" />
            </Left>
            <Body style={{flex: 1, flexDirection: 'row', marginLeft: 25}}>
              <Text
                style={{
                  marginLeft: -30,
                  marginRight: 4,
                  fontSize: 12,
                  alignSelf: 'center',
                }}>
                {item.date.replace(/-/g, '/')}
              </Text>
              <FontAwesomeIcon icon={faCalendarAlt} size={16} color="#aaa" />
            </Body>
            <Right style={{flex: 1, flexDirection: 'row', marginRight: -20}}>
              <Text
                style={{
                  marginLeft: -30,
                  fontSize: 12,
                  alignSelf: 'center',
                  marginRight: 4,
                }}>
                {item.end_time.replace(' :', '')}-
                {item.start_time.replace(' :', '')}
              </Text>
              <FontAwesomeIcon icon={faClock} size={16} color="#aaa" />
            </Right>
          </CardItem>
        </Card>
      </TouchableOpacity>
    );
  };
  render() {
    let {container, loader} = styles;
    let {items} = this.state;
    if (items.length === 0) {
      return (
        <View style={loader}>
          <ActivityIndicator size="large" />
          <Text>يتم تحميل الفعاليات ...</Text>
        </View>
      );
    }
    return (
      <>
        <TopNav history={this.props.history} eventsList={this.state.items} changeState={this}/>
        <View style={styles.content}>
          <SafeAreaView>
            <FlatList
              style={container}
              data={this.state.items}
              keyExtractor={(item, index) => index.toString()}
              renderItem={this._renderItem}
              ListFooterComponent={this.last()}
            />
          </SafeAreaView>
        </View>
        <BottomNavRegUser history={this.props.history} />
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // marginTop: 40,
    // flexGrow: 1
  },
  header: {
    backgroundColor: 'blue',
  },
  content: {
    flex: 1,
    position: 'relative',
    width: '95%',
    // zIndex: -1,
    top: 20,
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 6,
    textAlign: 'right',
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
  },
  cardDate: {
    fontSize: 15,
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
  },
  card: {
    marginBottom: 10,
    marginLeft: '2%',
    width: '100%',
    height: 260,
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  back: {
    width: 60,
    marginBottom: 10,
    marginRight: 300,
  },
});
