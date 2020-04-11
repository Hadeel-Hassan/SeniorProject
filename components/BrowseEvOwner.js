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
import {Card, CardItem, Left, Right, Body} from 'native-base';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCalendarAlt} from '@fortawesome/free-regular-svg-icons';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import TopNavEvOwner from './TpoNavEvOwner';
import EventInfoEvOwner from './EventInfoEvOwner';
import {db, getCurrentUserID} from '../firebase/config';

export default class BrowseEvOwner extends Component {
  state = {
    items: [],
    isSearchActive: false,
    eventId: '',
    isSearch: false,
    isInfo: false,
    infoItem: {},
    ch: false,
  };

  last() {
    return <View style={{paddingVertical: 20}} />;
  }

  defaultItems = this.state.items;

  handleSearch(input) {
    if (input === '') {
      this.setState({items: this.defaultItems});
    } else {
      var data = this.state.items.filter(function(item) {
        return item.name.includes(input);
      });
      this.setState({items: data});
    }
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
      <TouchableOpacity
        style={styles.card}
        onPress={() => this.setState({isInfo: true, infoItem: item})}>
        <Card style={{marginBottom: 20, width: 370, borderRadius: 10}}>
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
              {item.eventStatus === 'accepted' ? (
                <>
                  <Text
                    style={{
                      marginLeft: 6,
                      fontSize: 12,
                      alignSelf: 'center',
                      marginRight: 4,
                    }}>
                    تمت الموافقة
                  </Text>
                  <FontAwesomeIcon icon={faInfoCircle} size={16} color="#00D084" />
                </>
              ) : (
                <>
                  <Text
                    style={{
                      marginLeft: 6,
                      fontSize: 12,
                      alignSelf: 'center',
                      marginRight: 4,
                    }}>
                    تحت المراجعة
                  </Text>
                  <FontAwesomeIcon icon={faInfoCircle} size={16} color="#FFC107" />
                </>
              )}
            </Left>
            <Body>
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
    if (items.length === 0 && !this.state.isSearch) {
      return (
        <View style={loader}>
          <ActivityIndicator size="large" />
          <Text>يتم تحميل الفعاليات ...</Text>
        </View>
      );
    }
    return this.state.isInfo ? (
      <EventInfoEvOwner event={this.state.infoItem} isInfo={this} />
    ) : (
      <>
        <TopNavEvOwner
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
