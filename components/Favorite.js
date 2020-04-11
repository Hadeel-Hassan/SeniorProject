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
import {Button as ButtonRn} from 'react-native';
import {
  Card,
  CardItem,
  Left,
  Right,
  Body,
} from 'native-base';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faClock,
  faCalendarAlt,
} from '@fortawesome/free-regular-svg-icons';
import {faUsers, faHeart} from '@fortawesome/free-solid-svg-icons';
import {db, getCurrentUserID, getCurrentUser} from '../firebase/config';
import {Header} from 'react-native-elements';
import EventInfo from './EventInfo';


export default class Favorite extends Component {
  state = {
    items: [],
    favs: true,
    loading: true,
    confirmRemove: false,
    isInfo: false,
    infoItem: {},
  };

  handleRemove(eid) {
    Alert.alert('', 'هل أنت متأكد من إزالة هذه الفعالية من المفضلة؟', [
      {
        text: 'إغلاق',
      },
      {
        text: 'موافق',
        onPress: () => {
          this.setState({confirmRemove: true});
          this._remove(eid);
        },
      },
    ]);
  }

  component() {
    console.log('didMount!');
  }

  _remove(eid) {
    db.collection('favorite')
      .doc(`fav_${getCurrentUserID()}`)
      .collection('my_favorites')
      .doc(eid)
      .delete()
      .then(() => {
        this.componentWillMount();
        Alert.alert('تمت إزالة الفعالية من المفضلة', '', [
          {
            text: 'إغلاق',
            onPress: () => {
              this.props.history.push('/fav');
            },
          },
        ]);
      });
  }

  componentWillMount() {
    if (getCurrentUser()) {
      let d = [];
      db.collection('favorite')
        .doc(`fav_${getCurrentUserID()}`)
        .collection('my_favorites')
        .get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            d.push(doc.data());
          });
        })
        .then(() => {
          this.setState({items: d, loading: false});
        })
        .catch(function(error) {
          console.log('Error getting documents: ', error);
        });
    } else {
      this.setState({loading: false});
      this.state.favs = false;
    }
  }

  last() {
    return <View style={{paddingVertical: 20}} />;
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
                <TouchableOpacity onPress={() => this.handleRemove(item.eid)}>
                  <FontAwesomeIcon icon={faHeart} size={24} color="red" />
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
    if (this.state.loading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" />
          <Text>يتم تحميل المفضلة ...</Text>
        </View>
      );
    }
    return this.state.isInfo ? (
      <EventInfo event={this.state.infoItem} isInfo={this} />
    ) : (
      <>
        <Header placement="center" backgroundColor={'#fd7066'}>
          <Text />
          <Text style={{fontSize: 23, color: 'white'}}>المفضلة</Text>
          <Text />
        </Header>

        <View style={styles.content}>
          <SafeAreaView>
            {this.state.favs ? (
              <FlatList
                style={styles.container}
                data={this.state.items}
                keyExtractor={(item, index) => index.toString()}
                renderItem={this._renderItem}
                ListFooterComponent={this.last()}
                ListEmptyComponent={
                  <Text style={styles.fav_text}>
                    ليس لديك فعاليات في المفضلة.
                  </Text>
                }
              />
            ) : (
              <>
                <Text
                  style={{alignSelf: 'center', marginTop: 20, fontSize: 16}}>
                  يجب عليك تسجيل الدخول لعرض المفضلة.
                </Text>
                <View
                  style={{width: 200, alignSelf: 'center', marginVertical: 15}}>
                  <ButtonRn
                    title="الذهاب إلى صفحة تسجيل الدخول"
                    onPress={() => {
                      this.props.history.push('/');
                    }}
                  />
                </View>
              </>
            )}
          </SafeAreaView>
        </View>

        <BottomNavRegUser history={this.props.history} />
      </>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    backgroundColor: '#fd7066',
  },
  fav_text: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: '50%',
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
});
