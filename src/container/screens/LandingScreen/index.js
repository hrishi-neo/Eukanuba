import React, {useState} from 'react';
import {
  View,
  Dimensions,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  BLACK,
  BLUE,
  LIGHT_BLUE,
  PINK,
  WHITE,
} from '../../../assets/color/color';
import CustomButton from '../../../components/CustomButton';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import LANDING_CAROUSEL from '../../../constants/LANDING_CAROUSEL';
var {width} = Dimensions.get('window');
const index = ({navigation}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const gotoLogin = () => {
    navigation.navigate('Login');
  };

  const gotoRegister = () => {
    navigation.navigate('Register');
  };

  const pagination = () => {
    return (
      <Pagination
        dotsLength={LANDING_CAROUSEL.length}
        activeDotIndex={activeSlide}
        containerStyle={{marginTop: 20}}
        dotStyle={{
          ...styles.PaginationDot,
          ...{borderColor: WHITE},
        }}
        inactiveDotStyle={{
          ...styles.PaginationDot,
          ...{borderColor: PINK},
        }}
        inactiveDotScale={1.0}
        inactiveDotOpacity={1}
      />
    );
  };

  const renderPageItem = ({item}) => {
    return (
      <View
        style={{
          alignItems: 'center',
          backgroundColor: 'transparent',
          marginBottom: 0,
        }}>
        <View
          style={{
            marginVertical: 16,
            marginHorizontal: 24,
            padding: 8,
            backgroundColor: WHITE,
            borderRadius: 10,
          }}>
          <Text
            style={{
              color: PINK,
              fontSize: 30,
              fontFamily:
                Platform.OS == 'ios' ? 'NexaRustScriptL-0' : 'NexaRust',

              textAlign: 'center',
              textAlignVertical: 'center',
            }}>
            {item.title}
          </Text>
        </View>

        <Text
          style={{
            fontSize: 16,
            fontFamily: Platform.OS == 'ios' ? 'GothamBold' : 'Gotham',
            textAlign: 'center',
            color:WHITE,
            paddingHorizontal:68,
            paddingVertical:16,
            textAlignVertical: 'center',
          }}>
          {item.description}
        </Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={require('../../../assets/images/Logo_Ribbon.png')}
        />
        <Text style={styles.topheading}>A helping paw</Text>
        <Carousel
          bounces={false}
          data={LANDING_CAROUSEL}
          renderItem={renderPageItem}
          loop={false}
          removeClippedSubviews={false}
          onSnapToItem={index => {
            setActiveSlide(index);
          }}
          sliderWidth={width}
          itemWidth={width}
          layout={'default'}
          inactiveSlideScale={1}
          inactiveSlideOpacity={1}
          slideStyle={{width: width}}
        />
        {pagination()}
        <View style={styles.main}>
          <CustomButton
            stlye={styles.registerbtn}
            title="Register now"
            onPress={() => gotoRegister()}
          />
          <CustomButton
            stlye={styles.loginbtn}
            title="Log in"
            onPress={() => gotoLogin()}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LIGHT_BLUE,
  },
  main: {
    justifyContent: 'center',
    flex: 1,
    paddingTop: 200,
  },
  logo: {
    height: 40,
  },
  forgotPw: {
    color: WHITE,
    fontSize: 14,
    fontFamily: Platform.OS == 'ios' ? 'GothamBold' : 'Gotham',
    alignSelf: 'flex-end',
    paddingRight: 24,
    padding: 4,
  },
  registerbtn: {
    backgroundColor: BLUE,
    borderWidth: 2,
    borderColor: BLUE,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  loginbtn: {
    backgroundColor: PINK,
    borderWidth: 2,
    borderColor: WHITE,
  },
  textStyle: {
    color: BLACK,
  },
  heading: {
    fontSize: 16,
    padding: 6,
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 20,
    color: WHITE,
    fontFamily: Platform.OS == 'ios' ? 'GothamBold' : 'Gotham',
  },
  topheading: {
    fontSize: 30,
    padding: 8,
    paddingLeft: 24,
    paddingTop: 10,
    color: PINK,
    fontFamily: Platform.OS == 'ios' ? 'NexaRustScriptL-0' : 'NexaRust',
  },
  PaginationDot: {
    width: 10,
    height: 10,
    flex: 0,
    backgroundColor: 'transparent',
    borderRadius: 5,
    borderWidth: 2.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default index;
