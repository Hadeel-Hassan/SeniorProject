import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  TouchableHighlight,
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
  faUndo,
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
    isfilterActive: false,
    searchQuery: '',
    fullData: [],
  };

  defaultItems = this.props.eventsList;

  handleSearch(input) {
    if (input === '') {
      this.props.changeState.setState({items: this.defaultItems});
    } else {
      this.props.changeState.setState({isSearch: true});
      var data = this.props.eventsList.filter(function(item) {
        return item.name.includes(input);
      });
      this.props.changeState.setState({items: data});
    }
  }

  handleFilterType(type) {
    this.props.changeState.setState({isFilter: true});
    var data = this.props.eventsList.filter(function(item) {
      return item.event_type === type;
    });
    this.props.changeState.setState({items: data});
  }

  handleFilterAgeGroup(ageGroup) {
    this.props.changeState.setState({isFilter: true});
    var data = this.props.eventsList.filter(function(item) {
      return item.age_group === ageGroup;
    });
    this.props.changeState.setState({items: data});
  }

  render() {
    return (
      <View style={styles.headerContainer}>
        {this.state.isSearchActive ? (
          <Header
            backgroundColor="white"
            rightContainerStyle={{marginRight: 10, marginLeft: -100}}>
            <View />
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
                this.props.changeState.setState({isSearch: false});
                this.props.changeState.setState({items: this.defaultItems});
              }}>
              <FontAwesomeIcon icon={faArrowRight} size={20} color="#bbb" />
            </TouchableOpacity>
          </Header>
        ) : this.state.isfilterActive ? (
          <Header
            backgroundColor="#fd7066"
            rightContainerStyle={{marginRight: 10}}
            centerContainerStyle={{top: -10}}
            containerStyle={{height: 190}}>
            <TouchableOpacity
              onPress={() =>
                this.props.changeState.setState({items: this.defaultItems})
              }>
              <FontAwesomeIcon icon={faUndo} color={'white'} />
            </TouchableOpacity>
            <View>
              <View>
                <Text style={{fontSize: 15}}>حسب نوع الفعالية</Text>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#eee',
                      borderRadius: 10,
                      paddingHorizontal: 10,
                      paddingVertical: 3,
                      marginVertical: 4,
                    }}
                    onPress={() => this.handleFilterType('معرض')}>
                    <Text>معرض</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#eee',
                      borderRadius: 10,
                      paddingHorizontal: 10,
                      paddingVertical: 3,
                      marginVertical: 4,
                      marginHorizontal: 5,
                    }}
                    onPress={() => this.handleFilterType('كرنفال')}>
                    <Text>كرنفال</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#eee',
                      borderRadius: 10,
                      paddingHorizontal: 10,
                      paddingVertical: 3,
                      marginVertical: 4,
                    }}
                    onPress={() => this.handleFilterType('فنون وثقافة')}>
                    <Text>فنون وثقافة</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#eee',
                      borderRadius: 10,
                      paddingHorizontal: 10,
                      paddingVertical: 3,
                      marginVertical: 4,
                      marginHorizontal: 5,
                    }}
                    onPress={() => this.handleFilterType('تعليمي')}>
                    <Text>تعليمي</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#eee',
                      borderRadius: 10,
                      paddingHorizontal: 10,
                      paddingVertical: 3,
                      marginVertical: 4,
                    }}
                    onPress={() => this.handleFilterType('رياضة')}>
                    <Text>رياضة</Text>
                  </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#eee',
                      borderRadius: 10,
                      paddingHorizontal: 10,
                      paddingVertical: 3,
                      marginVertical: 4,
                      marginHorizontal: 5,
                    }}
                    onPress={() => this.handleFilterType('عرض')}>
                    <Text>عرض</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#eee',
                      borderRadius: 10,
                      paddingHorizontal: 10,
                      paddingVertical: 3,
                      marginVertical: 4,
                      marginHorizontal: 5,
                    }}
                    onPress={() => this.handleFilterType('ألعاب')}>
                    <Text>ألعاب</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#eee',
                      borderRadius: 10,
                      paddingHorizontal: 10,
                      paddingVertical: 3,
                      marginVertical: 4,
                      marginHorizontal: 5,
                    }}
                    onPress={() => this.handleFilterType('تراثي')}>
                    <Text>تراثي</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#eee',
                      borderRadius: 10,
                      paddingHorizontal: 10,
                      paddingVertical: 3,
                      marginVertical: 4,
                      marginHorizontal: 5,
                    }}
                    onPress={() => this.handleFilterType('مهرجان')}>
                    <Text>مهرجان</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#eee',
                      borderRadius: 10,
                      paddingHorizontal: 10,
                      paddingVertical: 3,
                      marginVertical: 4,
                      marginHorizontal: 5,
                    }}
                    onPress={() => this.handleFilterType('موسيقى')}>
                    <Text>موسيقى</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <Text style={{fontSize: 15}}>حسب الفئة العمرية</Text>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#eee',
                      borderRadius: 10,
                      paddingHorizontal: 10,
                      paddingVertical: 3,
                      marginVertical: 4,
                    }}
                    onPress={() => this.handleFilterAgeGroup('أطفال/رجال')}>
                    <Text>أطفال/رجال</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#eee',
                      borderRadius: 10,
                      paddingHorizontal: 10,
                      paddingVertical: 3,
                      marginVertical: 4,
                      marginHorizontal: 5,
                    }}
                    onPress={() => this.handleFilterAgeGroup('نساء')}>
                    <Text>نساء</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#eee',
                      borderRadius: 10,
                      paddingHorizontal: 10,
                      paddingVertical: 3,
                      marginVertical: 4,
                    }}
                    onPress={() => this.handleFilterAgeGroup('رجال')}>
                    <Text>رجال</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#eee',
                      borderRadius: 10,
                      paddingHorizontal: 10,
                      paddingVertical: 3,
                      marginVertical: 4,
                      marginHorizontal: 5,
                    }}
                    onPress={() => this.handleFilterAgeGroup('عائلات')}>
                    <Text>عائلات</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#eee',
                      borderRadius: 10,
                      paddingHorizontal: 10,
                      paddingVertical: 3,
                      marginVertical: 4,
                    }}
                    onPress={() => this.handleFilterAgeGroup('الكل')}>
                    <Text>الكل</Text>
                  </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#eee',
                      borderRadius: 10,
                      paddingHorizontal: 10,
                      paddingVertical: 3,
                      marginVertical: 4,
                      marginHorizontal: 5,
                    }}
                    onPress={() => this.handleFilterAgeGroup('مراهقين (من عمر 12 إلى 19 سنة )')}>
                    <Text>مراهقين (من عمر 12 إلى 19 سنة )</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#eee',
                      borderRadius: 10,
                      paddingHorizontal: 10,
                      paddingVertical: 3,
                      marginVertical: 4,
                      marginHorizontal: 5,
                    }}
                    onPress={() => this.handleFilterAgeGroup('أطفال/نساء')}>
                    <Text>أطفال/نساء</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                this.setState({isfilterActive: false});
                this.props.changeState.setState({isFilter: false});
                this.props.changeState.setState({items: this.defaultItems});
              }}>
              <FontAwesomeIcon icon={faArrowRight} size={20} color="white" />
            </TouchableOpacity>
          </Header>
        ) : (
          <Header
            placement="center"
            backgroundColor={'#fd7066'}
            rightContainerStyle={{marginRight: 20}}
            leftContainerStyle={{marginLeft: 20}}
            leftComponent={
              <TouchableOpacity
                onPress={() => this.setState({isfilterActive: true})}>
                <FontAwesomeIcon icon={faFilter} size={20} color="white" />
              </TouchableOpacity>
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
        {this.state.isfilterActive ? (
          <></>
        ) : (
          <Segment style={styles.headerContainerS}>
            <Button first active>
              <FontAwesomeIcon
                icon={faBars}
                color="black"
                size={25}
                style={styles.icon}
              />
            </Button>
            <Button last>
              <FontAwesomeIcon
                icon={faThLarge}
                color="black"
                size={25}
                style={styles.icon}
                onPress={() => {
                  this.props.history.push('/grid');
                }}
              />
            </Button>
          </Segment>
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
