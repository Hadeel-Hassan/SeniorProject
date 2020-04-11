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
import TopNavGrid from './TopNavGrid';


export default class BrowseGrid extends Component {
  state = {
    items: [],
    isSearch: false,
    isFilter: false,
  };

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
        console.log('browse= ', this.state.items);
      })
      .catch(function(error) {
        console.log('Error getting documents: ', error);
      });
  }
  _renderItem = ({item, index}) => {
    return (
      <TouchableOpacity style={styles.card}>
        <Card style={{marginBottom: 20, width: 170, borderRadius: 10}}>
          <CardItem style={{height: 70}}>
            <Left>
              <Body>
                <Text
                  style={{
                    color: '#bbb',
                    alignSelf: 'flex-start',
                    left: -18,
                    top: 23,
                  }}>
                  {item.event_type}
                </Text>
                <FontAwesomeIcon
                  icon={faHeart}
                  size={16}
                  color="#aaa"
                  style={{marginLeft: -16, top: -22}}
                />
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
              {/* <Button > */}
              <Text
                style={{
                  marginLeft: -9,
                  fontSize: 11,
                  alignSelf: 'center',
                  marginRight: 3,
                }}>
                {item.age_group}
              </Text>
              <FontAwesomeIcon icon={faUsers} size={16} color="#aaa" />
            </Left>
            <Right style={{flex: 1, flexDirection: 'row', marginRight: -55}}>
              <Text
                style={{
                  marginLeft: -30,
                  marginRight: 4,
                  fontSize: 11,
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
    // console.log(this.state.isSearch);
    if (items.length === 0 && !(this.state.isSearch) && !(this.state.isFilter)) {
      return (
        <View style={loader}>
          <ActivityIndicator size="large" />
          <Text>يتم تحميل الفعاليات ...</Text>
        </View>
      );
    }
    return (
      <>
        <TopNavGrid
          history={this.props.history}
          eventsList={this.state.items}
          changeState={this}
        />
        <View style={styles.content}>
          <SafeAreaView>
            <FlatList
              numColumns={2}
              style={container}
              data={this.state.items}
              keyExtractor={(item, index) => index.toString()}
              renderItem={this._renderItem}
              ListEmptyComponent={<Text>عذرا، لم يتم العثور على نتائج بحث</Text>}
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
    marginTop: 40,
  },
  header: {
    backgroundColor: 'blue',
  },
  content: {
    flex: 1,
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
