import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faBars,
  faThLarge,
  faFilter,
  faSearch,
  faArrowLeft,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import {
  Container,
  Item,
  Input,
  Row,
  Button,
  Segment,
  Left,
  Right,
  Icon,
  Body,
  Title,
  Content,
} from 'native-base';
import {Header} from 'react-native-elements';

export default class TopNavEvOwner extends Component {
  state = {
    isSearchActive: false,
    searchQuery: '',
    fullData: [],
  };

  c() {
    this.props.changeState.setState({test: 'bye'});
  }
  defaultItems = this.props.eventsList;

  handleSearch(input) {
    // this.setState({searchQuery: input})
    if (input === '') {
      this.props.changeState.setState({items: this.defaultItems});
    } else {
      var data = this.props.eventsList.filter(function(item) {
        return item.name.includes(input);
      });
      // console.log(data);
      this.props.changeState.setState({items: data});
    }
  }

  render() {
    return (
      <View style={styles.headerContainer}>
        {this.state.isSearchActive ? (
          <Header
            backgroundColor="white"
            rightContainerStyle={{marginRight: 10, marginLeft: -100}}>
            <View></View>
            <TextInput
              placeholder="ابحث عن اسم فعالية..."
              autoFocus={true}
              clearButtonMode="while-editing"
              returnKeyType="search"
              style={styles.searchPlaceholder}
              onChangeText={input => this.handleSearch(input)}
            />
            <TouchableOpacity
              onPress={() => {
                this.setState({isSearchActive: false});
                this.props.changeState.setState({items: this.defaultItems});
              }}>
              <FontAwesomeIcon icon={faArrowRight} size={20} color="#bbb" />
            </TouchableOpacity>
          </Header>
        ) : (
          <Header
            placement="center"
            backgroundColor={'#fd7066'}
            rightContainerStyle={{marginRight: 20}}
            leftContainerStyle={{marginLeft: 20}}
            leftComponent={
              <Text></Text>
            }
            centerComponent={{
              text: 'تصفح الفعاليات الخاصة بك',
              style: {color: '#fff', fontSize: 18},
            }}
            rightComponent={
              <TouchableOpacity
                onPress={() => this.setState({isSearchActive: true})}>
                <FontAwesomeIcon icon={faSearch} size={20} color="white" />
              </TouchableOpacity>
            }
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    backgroundColor: 'red',
  },
  headerContainerH: {
    backgroundColor: '#fd7066',
    width: '100%',
    height: 60,
    marginTop: 0,
    // marginBottom: -70,
    // elevation: 100
  },
  headerContainerS: {
    backgroundColor: '#fd7066',
    marginTop: -2,
    // marginBottom: -100,
    // top: 50,
    height: 50,
    width: '100%',
  },
  headerContainerSearch: {
    backgroundColor: '#fff',
    width: '100%',
    height: 60,
    marginTop: 0,
    marginBottom: -70,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    top: 40,
    display: 'flex',
    zIndex: 1000,
    backgroundColor: '#fd7066',
  },
  icon: {
    marginHorizontal: 10,
  },
  headerTitle: {
    textAlign: 'center',
    marginLeft: 50,
  },
  searchPlaceholder: {
    textAlign: 'right',
    // alignSelf: 'flex-end',
    // alignContent: 'flex-end',
    // alignItems: 'flex-end',
    backgroundColor: 'white',
    // paddingLeft: 60,
  },
});
