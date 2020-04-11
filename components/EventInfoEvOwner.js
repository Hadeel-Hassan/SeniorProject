import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Linking, ScrollView} from 'react-native';
import BottomNavRegUser from './BottomNavRegUser';
import {Button} from 'native-base';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faClock, faCalendarAlt} from '@fortawesome/free-regular-svg-icons';
import {
  faUsers,
  faHeart,
  faTicketAlt,
  faMapMarkedAlt,
  faMapMarkerAlt,
  faDollarSign,
  faMoneyBillAlt,
  faUserTie,
  faAsterisk,
  faArrowAltCircleRight,
  faInfo,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import AnimatedHeader from 'react-native-animated-header';

export default class EventInfoEvOwner extends Component {
  render() {
    return (
      <>
        <AnimatedHeader
          style={{flex: 1, width: '100%'}}
          title={this.props.event.name}
          renderRight={() => (
            <TouchableOpacity
              onPress={() => this.props.isInfo.setState({isInfo: false})}>
              <FontAwesomeIcon
                icon={faArrowAltCircleRight}
                size={30}
                color={'#fd7066'}
              />
            </TouchableOpacity>
          )}
          titleStyle={{
            fontSize: 20,
            left: 20,
            bottom: 20,
            color: '#000',
            alignSelf: 'center',
            backgroundColor: '#fd7066',
            paddingVertical: 3,
            paddingHorizontal: 10,
            borderRadius: 15,
          }}
          headerMaxHeight={200}
          imageSource={{
            uri: this.props.event.imageURL,
          }}
          toolbarColor="#FFF"
          disabled={false}>
          <ScrollView>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'flex-end',
                marginTop: 20,
                marginRight: 15,
              }}>
              <Text style={{fontSize: 15, alignSelf: 'center'}}>
                {this.props.event.event_type}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginHorizontal: 15,
                }}>
                نوع الفعالية:
              </Text>
              <FontAwesomeIcon
                icon={faTicketAlt}
                size={20}
                style={{alignSelf: 'center'}}
                color={'#fd7066'}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'flex-end',
                marginTop: 20,
                marginRight: 15,
              }}>
              <Text style={{fontSize: 15, alignSelf: 'center'}}>
                {this.props.event.city}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginHorizontal: 15,
                }}>
                المدينة:
              </Text>
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                size={20}
                style={{alignSelf: 'center'}}
                color={'#fd7066'}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'flex-end',
                marginTop: 20,
                marginRight: 15,
              }}>
              <Text style={{fontSize: 15, alignSelf: 'center'}}>
                {this.props.event.age_group}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginHorizontal: 15,
                }}>
                الفئة المستهدفة:
              </Text>
              <FontAwesomeIcon
                icon={faUsers}
                size={20}
                style={{alignSelf: 'center'}}
                color={'#fd7066'}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'flex-end',
                marginTop: 20,
                marginRight: 15,
              }}>
              <Text style={{fontSize: 15, alignSelf: 'center'}}>
                {this.props.event.date}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginHorizontal: 15,
                }}>
                تاريخ الفعالية:
              </Text>
              <FontAwesomeIcon
                icon={faCalendarAlt}
                size={20}
                style={{alignSelf: 'center'}}
                color={'#fd7066'}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'flex-end',
                marginTop: 20,
                marginRight: 15,
              }}>
              <Text style={{fontSize: 15, alignSelf: 'center'}}>
                {this.props.event.start_time} - {this.props.event.end_time}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginHorizontal: 15,
                }}>
                وقت الفعالية:
              </Text>
              <FontAwesomeIcon
                icon={faClock}
                size={20}
                style={{alignSelf: 'center'}}
                color={'#fd7066'}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'flex-end',
                marginTop: 20,
                marginRight: 15,
              }}>
              {this.props.event.free ? (
                <Text style={{fontSize: 15, alignSelf: 'center'}}>
                  الحضور مجاني
                </Text>
              ) : (
                <Text style={{fontSize: 15, alignSelf: 'center'}}>
                  يشتمل على رسوم حضور
                </Text>
              )}
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginHorizontal: 15,
                }}>
                رسوم الحضور:
              </Text>
              <FontAwesomeIcon
                icon={faDollarSign}
                size={20}
                style={{alignSelf: 'center'}}
                color={'#fd7066'}
              />
            </View>
            {this.props.event.free ? (
              <></>
            ) : (
              <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                <TouchableOpacity
                  onPress={() => Linking.openURL(this.props.event.price_Url)}>
                  <Text
                    style={{
                      fontSize: 16,
                      alignSelf: 'center',
                      color: '#0693E3',
                      textDecorationLine: 'underline',
                    }}>
                    {this.props.event.price_Url}
                  </Text>
                </TouchableOpacity>
                <Text style={{fontSize: 16, alignSelf: 'center'}}>
                  رابط الدفع:{' '}
                </Text>
              </View>
            )}
            {!this.props.event.free ? (
              <>
                <View
                  style={{
                    flexDirection: 'row',
                    alignSelf: 'flex-end',
                    marginTop: 10,
                    marginRight: 40,
                  }}>
                  <Text style={{fontSize: 15, alignSelf: 'center'}}>
                    {this.props.event.adult_price} ريال سعودي
                  </Text>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: 'bold',
                      marginHorizontal: 15,
                    }}>
                    سعر التذكرة للشخص البالغ:
                  </Text>
                  <FontAwesomeIcon
                    icon={faMoneyBillAlt}
                    size={20}
                    style={{alignSelf: 'center'}}
                    color={'#fd7066'}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignSelf: 'flex-end',
                    marginTop: 10,
                    marginRight: 40,
                  }}>
                  <Text style={{fontSize: 15, alignSelf: 'center'}}>
                    {this.props.event.kid_price} ريال سعودي
                  </Text>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: 'bold',
                      marginHorizontal: 15,
                    }}>
                    سعر التذكرة للطفل:
                  </Text>
                  <FontAwesomeIcon
                    icon={faMoneyBillAlt}
                    size={20}
                    style={{alignSelf: 'center'}}
                    color={'#fd7066'}
                  />
                </View>
              </>
            ) : (
              <></>
            )}

            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'flex-end',
                marginTop: 20,
                marginRight: 15,
              }}>
              <Text style={{fontSize: 15, alignSelf: 'center'}}>
                {this.props.event.organizer}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginHorizontal: 15,
                }}>
                منظم الفعالية:
              </Text>
              <FontAwesomeIcon
                icon={faUserTie}
                size={20}
                style={{alignSelf: 'center'}}
                color={'#fd7066'}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'flex-end',
                marginTop: 20,
                marginRight: 15,
              }}>
              <TouchableOpacity
                onPress={() => Linking.openURL(this.props.event.location)}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#0693E3',
                    marginHorizontal: 15,
                    textDecorationLine: 'underline',
                  }}>
                  اضغط هنا للذهاب إلى موقع الفعالية
                </Text>
              </TouchableOpacity>
              <FontAwesomeIcon
                icon={faMapMarkedAlt}
                size={20}
                style={{alignSelf: 'center'}}
                color={'#fd7066'}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'flex-end',
                marginTop: 20,
                marginRight: 15,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginHorizontal: 15,
                }}>
                وصف الفعالية:
              </Text>
              <FontAwesomeIcon
                icon={faAsterisk}
                size={20}
                style={{alignSelf: 'center'}}
                color={'#fd7066'}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'flex-end',
                marginTop: 10,
                marginRight: 50,
                marginLeft: 50,
                marginBottom: 40,
              }}>
              <Text style={{fontSize: 15, alignSelf: 'center'}}>
                {this.props.event.description}
              </Text>
            </View>
            {this.props.event.eventStatus === 'accepted' ? (
              <Button
                disabled
                iconRight
                transparent
                style={{
                  width: 190,
                  alignSelf: 'center',
                  paddingHorizontal: 15,
                  borderRadius: 5,
                  marginBottom: 20,
                }}>
                <Text>حالة الفعالية: تمت الموافقة</Text>

                <FontAwesomeIcon
                  icon={faInfoCircle}
                  size={20}
                  color={'#00D084'}
                />
              </Button>
            ) : (
              <Button
                disabled
                iconRight
                transparent
                style={{
                  width: 190,
                  alignSelf: 'center',
                  paddingHorizontal: 15,
                  borderRadius: 5,
                  marginBottom: 20,
                }}>
                <Text>حالة الفعالية: تحت المراجعة</Text>

                <FontAwesomeIcon
                  icon={faInfoCircle}
                  size={20}
                  color={'#FFC107'}
                />
              </Button>
            )}
          </ScrollView>
        </AnimatedHeader>
      </>
    );
  }
}

// const styles = StyleSheet.create({});
