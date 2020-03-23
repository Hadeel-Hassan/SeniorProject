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
// import { SafeAreaView } from 'react-navigation';
import {db} from '../firebase/config';
import TopNavGrid from './TopNavGrid';
// import Icon from 'react-native-vector-icons';

export default class BrowseGrid extends Component {
  state = {
    items: [],
  };

  //   };
  // }
  // componentDidMount() {
  //   console.log(this.state.myData);
  // }
  componentWillMount() {
    // await getAllData();
    // this.setState({myData: data})
    let d = [];
    db.collection('events')
      .where('eventStatus', '==', 'accepted')
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, ' => ', doc.data());
          // console.log(data);
          // console.log(doc.data());

          d.push(doc.data());
          // data.push(JSON.stringify(doc.data()));
          // console.log(d);

          // console.log("func= ", data);
        });
      })
      .then(() => {
        // this.state.myData.concat(d);
        // console.log(d);
        // this.state.myData.concat(d);
        this.setState({items: d});
        console.log('browse= ', this.state.items);
      })
      .catch(function(error) {
        console.log('Error getting documents: ', error);
      });
  }

  // // getDataFromAPI = async () => {
  // //   const endpoint = 'https://jsonplaceholder.typicode.com/photos?_limit=5';
  // //   const res = await fetch(endpoint);
  // //   const data = await res.json();
  // //   this.setState({items: data});
  // // };

  _renderItem = ({item, index}) => {
    return (
      <TouchableOpacity style={styles.card}>
        {/*         
        <Image
          style={styles.cardImage}
          source={{
            uri: item.url,
          }}></Image>
        <Text style={styles.cardText}>
          {item.title}
          {/* <Icon name="favorite" /> 
        </Text>
        <Text style={styles.cardDate}>{item.time}</Text> */}
        <Card style={{marginBottom: 20, width: 170, borderRadius: 10}}>
          <CardItem style={{height: 70}}>
            <Left>
              <Body>
                <Text style={{color: '#bbb', alignSelf: 'flex-start', left: -18, top: 23}}>
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
                uri: 'https://homestaymatch.com/images/no-image-available.png',
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
              <FontAwesomeIcon
                icon={faUsers}
                size={16}
                color="#aaa"
                // style={{marginLeft: 0}}
              />

              {/* </Button> */}
            </Left>
            {/* <Body style={{flex: 1, flexDirection: 'row', marginLeft: 25}}>
              
              <Text style={{marginLeft: -30, marginRight: 4, fontSize: 12, alignSelf: 'center'}}>{item.date.replace(/-/g, "/")}</Text>
              <FontAwesomeIcon icon={faCalendarAlt} size={16} color="#aaa" />
            
            </Body> */}
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
        <TopNavGrid history={this.props.history} />
        <View style={styles.content}>
          <SafeAreaView>
            <FlatList
              numColumns={2}
              style={container}
              data={this.state.items}
              keyExtractor={(item, index) => index.toString()}
              renderItem={this._renderItem}
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
    // width: '90%',
    // marginHorizontal: 5,
    // paddingHorizontal: -20,
    // paddingRight: -40,
  },
  header: {
    backgroundColor: 'blue',
  },
  content: {
    flex: 1,
    // position: 'relative',
    // marginHorizontal: 10,
    // width: 340,
    // zIndex: -1,
    marginTop: -380,
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
    // backgroundColor: '#69BBE8',
    // borderRadius: 20,
    // flexDirection: 'row',
    // flex: 1,
    // marginBottom: 10,
    // marginLeft: '2%',
    // width: 180,
    // width: 50,
    // height: 180,
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
