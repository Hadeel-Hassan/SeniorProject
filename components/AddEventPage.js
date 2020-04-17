import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Form, Body, Left, Button} from 'native-base';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faArrowLeft, faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';
import {faClock} from '@fortawesome/free-regular-svg-icons';
import {Dropdown} from 'react-native-material-dropdown';
import DatePicker from 'react-native-datepicker';
import ImagePicker from 'react-native-image-picker';
import {_addEvent, getCurrentUserID} from '../firebase/config';
import {Header} from 'react-native-elements';


export default class AddEventPage extends Component {
  state = {
    radioValue: 1,
    eventName: '',
    eventType: '',
    ageGroup: '',
    city: '',
    date: new Date(),
    timeStart: new Date(),
    timeEnd: new Date(),
    free: false,
    adultTicket: 0,
    kidTicket: 0,
    eventLocation: '',
    eventOrganizer: '',
    eventDescription: '',
    eventPoster: '',
    previewImage: '',
    priceUrl: '',
    posterImage: null,
    posterExtension: '',
    status: 'pending',
    done: false
  };

  options = {
    title: 'اختر صورة الفعالية',
    chooseFromLibraryButtonTitle: 'اختر من الاستديو',
    takePhotoButtonTitle: 'التقط صورة',
  };

  chooseImage() {
    ImagePicker.showImagePicker(this.options, response => {
      let source = {uri: response.uri};
      this.setState({posterImage: response.path, previewImage: source});
    });
  }

  renderImage() {
    return (
      <View>
        <Image source={this.state.previewImage} style={styles.posterImages} />
      </View>
    );
  }

  handleForm() {
    var formData = {
      name: this.state.eventName,
      event_type: this.state.eventType,
      age_group: this.state.ageGroup,
      city: this.state.city,
      date: this.state.date,
      start_time: this.state.timeStart,
      end_time: this.state.timeEnd,
      free: this.state.free,
      adult_price: this.state.adultTicket,
      kid_price: this.state.kidTicket,
      location: this.state.eventLocation,
      organizer: this.state.eventOrganizer,
      description: this.state.eventDescription,
      eventStatus: this.state.status,
      price_Url: this.state.priceUrl,
      ownerId: getCurrentUserID(),
    };
    _addEvent(formData, this.state.posterImage);
  }

  render() {
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
    return (
      <>
        <React.Fragment>
          <Header placement="center"
            backgroundColor={'#fd7066'}
            rightContainerStyle={{marginRight: 20}}
            leftContainerStyle={{marginLeft: 20}}
            leftComponent={
              <Text></Text>
            }
            centerComponent={{
              text: 'إضافة فعالية جديدة',
              style: {color: '#fff', fontSize: 18},
            }}
            rightComponent={
              <TouchableOpacity
                transparent
                onPress={() => this.props.history.push('/owhome')}>
                <FontAwesomeIcon icon={faArrowRight} size={20} color="white" />
              </TouchableOpacity>
            } />
          <ScrollView style={{width: "85%"}}>
            <Form style={styles.form}>
              <TextInput
                style={styles.input}
                placeholder="اسم الفعالية"
                placeholderTextColor="darkgray"
                keyboardType="default"
                returnKeyType="next"
                autoCorrect={false}
                onChangeText={name => {
                  this.setState({eventName: name});
                }}
              />
              <Dropdown
                label="اختر نوع الفعالية"
                data={eventType}
                onChangeText={value => this.setState({eventType: value})}
              />
              <Dropdown
                label="اختر الفئة المستهدفة"
                data={ageGroup}
                onChangeText={value => this.setState({ageGroup: value})}
              />
              <Dropdown
                label="اختر المدينة"
                data={[{value: 'جدة'}]}
                onChangeText={value => this.setState({city: value})}
              />
              <View style={styles.dateContainer}>
                <DatePicker
                  style={{width: 170}}
                  date={this.state.date}
                  mode="date"
                  placeholder="select date"
                  format="YYYY-MM-DD"
                  minDate={new Date()}
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
                    date={this.state.timeEnd}
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
                    format="hh:mm:a"
                    confirmBtnText="اختيار"
                    cancelBtnText="إغلاق"
                    customStyles={{
                      dateInput: {
                        marginLeft: 36,
                        borderRadius: 50,
                      },
                    }}
                    onDateChange={date => {
                      this.setState({timeEnd: date.toString()});
                    }}
                  />
                </View>
                <View style={{marginHorizontal: 10}}>
                  <Text style={styles.timeText}>بداية وقت الفعالية</Text>
                  <DatePicker
                    style={{width: 120}}
                    date={this.state.timeStart}
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
                    format="hh:mm:a"
                    confirmBtnText="اختيار"
                    cancelBtnText="إغلاق"
                    customStyles={{
                      dateInput: {
                        marginLeft: 36,
                        borderRadius: 50,
                      },
                     
                    }}
                    onDateChange={date => {
                      this.setState({timeStart: date.toString()});
                    }}
                  />
                </View>
              </View>
              <View style={styles.radio}>
                <RadioGroup
                  onSelect={value => {
                    this.setState({radioValue: value});
                  }}
                  style={styles.radio}
                  selectedIndex={1}>
                  <RadioButton value={1} style={{flexDirection: 'row-reverse'}}>
                    <Text style={{alignSelf: 'center', marginHorizontal: 4}}>
                      يشتمل على تذاكر
                    </Text>
                  </RadioButton>
                  <RadioButton value={0} style={{flexDirection: 'row-reverse'}}>
                    <Text style={{alignSelf: 'center', marginHorizontal: 4}}>
                      الحضور مجاني
                    </Text>
                  </RadioButton>
                </RadioGroup>
              </View>
              {this.state.radioValue === 0 ? (
                <View>
                  <TextInput
                    placeholder="سعر التذكرة للشخص البالغ"
                    placeholderTextColor="darkgray"
                    keyboardType="number-pad"
                    style={{borderBottomColor: '#aaa', borderBottomWidth: 1}}
                    onChangeText={price => {
                      this.setState({adultTicket: price});
                    }}
                  />
                  <TextInput
                    placeholder="سعر التذكرة للطفل"
                    placeholderTextColor="darkgray"
                    keyboardType="number-pad"
                    style={{borderBottomColor: '#aaa', borderBottomWidth: 1}}
                    onChangeText={price => {
                      this.setState({kidTicket: price});
                    }}
                  />
                  <TextInput
                    placeholder="رابط الدفع"
                    placeholderTextColor="darkgray"
                    keyboardType="default"
                    style={{borderBottomColor: '#aaa', borderBottomWidth: 1}}
                    onChangeText={url => {
                      this.setState({priceUrl: url});
                    }}
                  />
                </View>
              ) : (
                () => {
                  this.setState({free: true});
                }
              )}
              <TextInput
                placeholder="رابط موقع الفعالية"
                placeholderTextColor="darkgray"
                keyboardType="default"
                returnKeyType="next"
                style={styles.input}
                onChangeText={loc => {
                  this.setState({eventLocation: loc});
                }}
              />
              <TextInput
                placeholder="منظم الفعالية"
                placeholderTextColor="darkgray"
                keyboardType="default"
                returnKeyType="next"
                // style={{borderBottomColor: '#aaa', borderBottomWidth: 1, marginVertical: 15, height: 60}}
                style={styles.input}
                onChangeText={org => {
                  this.setState({eventOrganizer: org});
                }}
              />
              <TextInput
                placeholder="وصف الفعالية و معلومات إضافية"
                multiline
                returnKeyType="next"
                placeholderTextColor="darkgray"
                keyboardType="default"
                style={styles.infoInput}
                onChangeText={desc => {
                  this.setState({eventDescription: desc});
                }}
              />
              <View style={styles.dateContainer}>
                <TouchableOpacity onPress={() => this.chooseImage()}>
                  <TextInput
                    editable={false}
                    placeholder="اختر صورة..."
                    placeholderTextColor="white"
                    keyboardType="default"
                    style={{
                      borderBottomColor: '#ccc',
                      borderBottomWidth: 1,
                      paddingHorizontal: 40,
                      borderRadius: 6,
                      paddingVertical: 6,
                      backgroundColor: '#238ECA',
                    }}
                  />
                </TouchableOpacity>
                <Text style={styles.dateText}>اختر صورة الفعالية</Text>
              </View>
              <View style={styles.imageContainer}>
                <Image
                  source={this.state.previewImage}
                  style={styles.posterImages}
                />
                 <Text style={styles.posterBtnTxt}>معاينة الصورة:</Text>
              </View>
              {
                this.state.posterImage ? (
                  <Button style={styles.sendBtn} onPress={() => this.handleForm()}>
                <Text style={styles.sendTxt}>إرسال</Text>
              </Button>
                ) : (
                  <Button style={styles.sendBtnNo} disabled>
                <Text style={styles.sendTxt}>إرسال</Text>
              </Button>
                )
              }
            </Form>
          </ScrollView>
        </React.Fragment>
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
    width: "95%",
    marginVertical: 20,
  },
  input: {
    height: 40,
    marginVertical: 15,
    // width: 270,
    marginBottom: 20,
    textAlign: 'right',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    fontSize: 15,
  },
  infoInput: {
    paddingBottom: 50,
    marginVertical: 15,
    marginBottom: 20,
    textAlign: 'right',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    fontSize: 15,
  },
  header: {
    backgroundColor: '#fd7066',
    width: '100%',
  },
  dateContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 15,
    alignSelf: 'center'
  },
  dateText: {
    marginHorizontal: 8,
    marginLeft: 30,
    alignSelf: 'center',
    color: 'rgb(123, 123, 123)',
  },
  timeText: {
    marginHorizontal: 8,
    alignSelf: 'center',
    color: 'rgb(123, 123, 123)',
    marginVertical: 7,
  },
  timeContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 15,
    alignSelf: 'center'
  },
  radio: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center'
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center'
  },
  posterImages: {
    height: 100,
    width: 100,
    marginHorizontal: 6,
    borderRadius: 4,
    resizeMode: 'contain',
  },
  posterBtnTxt: {
    paddingHorizontal: 30,
    alignSelf: 'center',
    fontSize: 15,
  },
  sendBtn: {
    width: 100,
    height: 35,
    marginHorizontal: '30%',
    marginTop: 25,
    borderRadius: 4,
    backgroundColor: '#19B064',
    alignSelf: 'center'
  },
  sendBtnNo: {
    width: 100,
    height: 35,
    marginHorizontal: '30%',
    marginTop: 25,
    borderRadius: 4,
    backgroundColor: '#ddd',
    alignSelf: 'center'
  },
  sendTxt: {
    marginLeft: 37,
    color: 'white',
  },
});
