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
import {Card, CardItem, Left, Right, Body} from 'native-base';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faClock,
  faCalendarAlt,
  faHeart,
} from '@fortawesome/free-regular-svg-icons';
import {faUsers} from '@fortawesome/free-solid-svg-icons';
import {db, getCurrentUserID, getCurrentUser} from '../firebase/config';
import EventInfo from './EventInfo';

export default class Browse extends Component {
  state = {
    items: [],
    isSearchActive: false,
    isSearch: false,
    isFilter: false,
    eventId: '',
    isInfo: false,
    infoItem: {},
  };

  last() {
    return <View style={{paddingVertical: 20}} />;
  }

  componentWillMount() {
    let d = [];
    db.collection('events')
      .where('eventStatus', '==', 'accepted')
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

  handleFavorite(eid, eventToAdd) {
    if (getCurrentUser()) {
      db.collection('favorite')
        .doc(`fav_${getCurrentUserID()}`)
        .collection('my_favorites')
        .doc(eid)
        .set(eventToAdd)
        .then(() => {
          Alert.alert(' تمت إضافة الفعالية للمفضلة بنجاح!', '', [
            {text: 'إغلاق'},
          ]);
        });
    } else {
      Alert.alert('', 'عذرا يجب عليك تسجيل الدخول أولا.', [{text: 'إغلاق'}]);
    }
  }

  _renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => this.setState({isInfo: true, infoItem: item})}>
        <Card style={{marginBottom: 20, width: 370, borderRadius: 10}}>
          <CardItem>
            <Left>
              <Body style={{flex: 1, flexDirection: 'row', marginLeft: -6}}>
                <TouchableOpacity
                  onPress={() => this.handleFavorite(item.eid, item)}>
                  <FontAwesomeIcon icon={faHeart} size={24} color="#aaa" />
                </TouchableOpacity>
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
    if (items.length === 0 && !this.state.isSearch && !this.state.isFilter) {
      return (
        <View style={loader}>
          <ActivityIndicator size="large" />
          <Text>يتم تحميل الفعاليات ...</Text>
        </View>
      );
    }
    return (
      <>
        {this.state.isInfo ? (
          <EventInfo event={this.state.infoItem} isInfo={this} />
        ) : (
          <>
            <TopNav
              history={this.props.history}
              eventsList={this.state.items}
              changeState={this}
            />
            <View style={styles.content}>
              <SafeAreaView>
                <FlatList
                  style={container}
                  data={this.state.items}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={this._renderItem}
                  ListFooterComponent={this.last()}
                  ListEmptyComponent={
                    <Text style={{flex: 1, alignSelf: 'center'}}>
                      عذرا، لم يتم العثور على نتائج بحث
                    </Text>
                  }
                />
              </SafeAreaView>
            </View>
            <BottomNavRegUser history={this.props.history} />
          </>
        )}
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
