import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import BottomNav from './BottomNav'
import TopNav from './TopNav'
import {Container, Header, Item, Input, Row, Button} from 'native-base';

// import Icon from 'react-native-vector-icons';

export default class Browse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          albumId: 1,
          id: 1,
          title: '  فعالية انا عربية     ',
          time: '       ٢٥ اكتوبر - ١٨ مارس  ',
          url1: 'https://image.flaticon.com/icons/svg/747/747310.svg',
          url:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTaW9FIswMCuOA3bvjpF2JPgxqc_GThEdE-W2Kw52SH1XdD_JIT',
          thumbnailUrl: 'https://via.placeholder.com/150/92c952',
        },
        {
          albumId: 1,
          id: 2,
          title: 'حفلة سوبر جونيور   ',
          time: '        ٤ يناير- ٥فبراير',
          url1: 'https://image.flaticon.com/icons/svg/747/747310.svg',
          url:
            'https://storage.sharek.sa/public/uploads/events/music-concert-super-junior-ar-1562161345-poster.png',
          thumbnailUrl: 'https://via.placeholder.com/150/771796',
        },
        {
          albumId: 1,
          id: 3,
          title: 'ونتر لاند',
          time: '                            ٤ مارس - ٩ابريل',
          url1: 'https://image.flaticon.com/icons/svg/747/747310.svg',
          url:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT3VKXRBsmNCOLnV67X4Be_ZY4GFcKn6IWiajylhFF1v2HYBoTN',
          thumbnailUrl: 'https://via.placeholder.com/150/24f355',
        },
        {
          albumId: 1,
          id: 4,
          title: 'مهرجان الرعب',
          time: '                ٧ فبراير - ١١ ابريل',
          url1: 'https://image.flaticon.com/icons/svg/747/747310.svg',
          url:
            'https://images.akhbarelyom.com//images/images/medium/20191013155720344.jpg',
          thumbnailUrl: 'https://via.placeholder.com/150/d32776',
        },
        {
          albumId: 1,
          id: 5,
          title: 'معرض الاينمي السعودي',
          time: '     ٢٥ اكتوبر - ١٨ مارس',
          url1: 'https://image.flaticon.com/icons/svg/747/747310.svg',
          url:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTtRMDIclFC0pN2Nddv9obOZeZAPyRvlUtrRpHCGA4O4KFyVEhu',
          thumbnailUrl: 'https://via.placeholder.com/150/f66b97',
        },
      ],
    };
  }
  // componentDidMount() {
  //   this.getDataFromAPI();
  // }

  // getDataFromAPI = async () => {
  //   const endpoint = 'https://jsonplaceholder.typicode.com/photos?_limit=5';
  //   const res = await fetch(endpoint);
  //   const data = await res.json();
  //   this.setState({items: data});
  // };

  _renderItem = ({item, index}) => {
    let {cardText, card, cardImage} = styles;

    return (
      <TouchableOpacity style={card}>
        <Image
          style={cardImage}
          source={{
            uri: item.url,
          }}></Image>
        <Text style={cardText}>
          {item.title}

          {item.time}
          {/* <Icon name="favorite" /> */}
        </Text>
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
        </View>
      );
    }
    return (
      <>
        <TopNav />
        <FlatList
          style={container}
          data={items}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this._renderItem}
        />
        <BottomNav history={this.props.history}/>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  cardText: {
    fontSize: 20,
    padding: 10,
    textAlign: 'right',
  },
  card: {
    backgroundColor: '#fff',
    marginBottom: 10,
    marginLeft: '2%',
    width: '96%',
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
