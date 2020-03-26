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
  Alert,
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
import {
  faUsers,
  faHeart as faHeartSolid,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';

import {db, getCurrentUserID} from '../firebase/config';
import TopNavEvOwner from './TpoNavEvOwner';
export default class BrowseEvOwner extends Component {
  state = {
    items: [],
    isSearchActive: false,
    test: 'hi',
    eventId: '',
  };

  last() {
    return <View style={{paddingVertical: 20}}></View>;
  }

  componentWillMount() {
    let d = [];
    db.collection('events')
      .where('ownerId', '==', getCurrentUserID())
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          let myData = doc.data();
          myData.eid = doc.id;
          d.push(myData);
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
                {item.eventStatus}
              </Text>
              <FontAwesomeIcon icon={faInfoCircle} size={16} color="#aaa" />
            </Left>
            <Body >
              <></>
            </Body>
            <Right style={{flex: 1, flexDirection: 'row'}}>
              <Text
                style={{
                  marginRight: 4,
                  fontSize: 12,
                  alignSelf: 'center',
                }}>
                {item.date.replace(/-/g, '/')}
              </Text>
              <FontAwesomeIcon icon={faCalendarAlt} size={16} color="#aaa" />
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
        <View style={styles.content}>
          <SafeAreaView>
            <FlatList
              style={container}
              data={this.state.items}
              keyExtractor={(item, index) => index.toString()}
              renderItem={this._renderItem}
              ListFooterComponent={this.last()}
              ListEmptyComponent={<Text>لم يتم العثور على فعاليات</Text>}
            />
          </SafeAreaView>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
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
