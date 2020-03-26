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

export default class TopNav extends Component {
  state = {
    isSearchActive: false,
    searchQuery: '',
    fullData: [],
  };

  c() {
    this.props.changeState.setState({test: 'bye'});
  }

  handleSearch(input){
    this.setState({searchQuery: input})
    data = data.filter(function (item) {
      return !item.string.includes("Lets");
    });
    console.log(data);
  }

  componentDidMount(){
    console.log(this.props.eventsList);
    
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
              onPress={() => this.setState({isSearchActive: false})}>
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
              <FontAwesomeIcon icon={faFilter} size={20} color="white" />
            }
            centerComponent={{
              text: 'تصفح الفعاليات',
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
        <Segment style={styles.headerContainerS}>
          <Button first active>
            <FontAwesomeIcon
              icon={faBars}
              color="black"
              size={25}
              style={styles.icon}
            />
          </Button>
          <Button
            last
            onPress={() => {
              this.props.history.push('/grid');
            }}>
            <FontAwesomeIcon
              icon={faThLarge}
              color="black"
              size={25}
              style={styles.icon}
            />
          </Button>
        </Segment>
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
