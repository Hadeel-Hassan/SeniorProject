import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Picker,
  ActionSheetIOS,
  DocumentPicker,
  TextInput,
  ScrollView,
} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import {Form, Header, Body, Left, Button} from 'native-base';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faArrowLeft,
  faTimes,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import {faClock} from '@fortawesome/free-regular-svg-icons';
import {Hoshi} from 'react-native-textinput-effects';
import Input from './Input';
// import firebase from '../firebase/config';
import BottomNavRegUser from './BottomNavRegUser';
import {Dropdown} from 'react-native-material-dropdown';
// import Date from './Date'
import DatePicker from 'react-native-datepicker';

export default class AddEvent extends Component {
  state = {
    date: new Date(),
  };
  render() {
    // const [date, setDate] = useState(new Date());
    const eventType = [
      {value: 'معرض'},
      {value: 'فنون وثقافة'},
      {value: 'تعليمي'},
      {value: 'موسيقى'},
      {value: 'رياضة'},
      {value: 'مهرجان'},
      {value: 'عرض'},
      {value: 'ألعاب'},
      {value: 'تراثي'},
      {value: 'كرنفال'},
    ];
    const ageGroup = [
      {value: 'الكل'},
      {value: 'عائلات'},
      {value: 'رجال'},
      {value: 'نساء'},
      {value: 'أطفال/رجال'},
      {value: 'أطفال/نساء'},
      {value: 'مراهقين (من عمر 12 إلى 19 سنة )'},
    ];
    const city = [
      {value: 'معرض'},
      {value: 'فنون وثقافة'},
      {value: 'تعليمي'},
      {value: 'موسيقى'},
      {value: 'رياضة'},
      {value: 'مهرجان'},
      {value: 'عرض'},
      {value: 'ألعاب'},
      {value: 'تراثي'},
      {value: 'كرنفال'},
    ];
    return (
      <>
        <Header style={styles.header}>
          <Left>
            <Button transparent>
              <FontAwesomeIcon icon={faArrowLeft} color="white" />
            </Button>
          </Left>
          <Body>
            <Text style={styles.title}>إضافة فعالية</Text>
          </Body>
        </Header>
        <ScrollView>
          <Form style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="اسم الفعالية"
              placeholderTextColor="darkgray"
              keyboardType="email-address"
              returnKeyType="next"
              autoCorrect={false}
              // onChangeText={onChangeText}
            />
            <Dropdown label="اختر نوع الفعالية" data={eventType} />
            <Dropdown label="اختر الفئة المستهدفة" data={ageGroup} />
            <Dropdown label="اختر المدينة" data={[{value: 'جدة'}]} />
            <View style={styles.dateContainer}>
              <DatePicker
                style={{width: 170}}
                date={this.state.date}
                mode="date"
                placeholder="select date"
                format="YYYY-MM-DD"
                minDate="2016-05-01"
                maxDate={new Date()}
                confirmBtnText="اختيار"
                cancelBtnText="إغلاق"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0,
                  },
                  dateInput: {
                    marginLeft: 36,
                    borderRadius: 50,
                  },
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={date => {
                  this.setState({date: date});
                }}
              />
              <Text style={styles.dateText}>اختر تاريخ الفعالية</Text>
            </View>
            <View style={styles.timeContainer}>
              <View style={{marginHorizontal: 10}}>
                <Text style={styles.timeText}>نهاية وقت الفعالية</Text>
                <DatePicker
                  style={{width: 120}}
                  date={this.state.date}
                  iconComponent={
                    <FontAwesomeIcon
                      icon={faClock}
                      size={28}
                      color="#aaa"
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0,
                      }}
                    />
                  }
                  mode="time"
                  placeholder="select date"
                  format="HH:MM"
                  confirmBtnText="اختيار"
                  cancelBtnText="إغلاق"
                  customStyles={{
                    dateInput: {
                      marginLeft: 36,
                      borderRadius: 50,
                    },
                    // ... You can check the source to find the other keys.
                  }}
                  onDateChange={date => {
                    this.setState({date: date});
                  }}
                />
              </View>
              <View style={{marginHorizontal: 10}}>
                <Text style={styles.timeText}>بداية وقت الفعالية</Text>
                <DatePicker
                  style={{width: 120}}
                  date={this.state.date}
                  iconComponent={
                    <FontAwesomeIcon
                      icon={faClock}
                      size={28}
                      color="#aaa"
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0,
                      }}
                    />
                  }
                  mode="time"
                  placeholder="select date"
                  format="HH:MM"
                  confirmBtnText="اختيار"
                  cancelBtnText="إغلاق"
                  customStyles={{
                    dateInput: {
                      marginLeft: 36,
                      borderRadius: 50,
                    },
                    // ... You can check the source to find the other keys.
                  }}
                  onDateChange={date => {
                    this.setState({date: date});
                  }}
                />
              </View>
            </View>
          </Form>
        </ScrollView>
        <BottomNavRegUser history={this.props.history} />
      </>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    marginLeft: '50%',
    marginVertical: 15,
    fontSize: 20,
    color: 'white',
  },
  form: {
    width: 270,
    marginVertical: 20,
  },
  input: {
    height: 40,
    paddingHorizontal: 70,
    marginBottom: 20,
    textAlign: 'right',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    fontSize: 15,
  },
  header: {
    backgroundColor: 'rgb(1, 106, 167)',
    width: '100%',
  },
  dateContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 15,
  },
  dateText: {
    marginHorizontal: 8,
    alignSelf: 'center',
    color: 'rgb(123, 123, 123)',
  },
  timeText: {
    marginHorizontal: 8,
    alignSelf: 'center',
    color: 'rgb(123, 123, 123)',
    marginVertical: 7
  },
  timeContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 15,
  },
});
