import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Platform
} from 'react-native';
import CustomButton from '../../../components/CustomButton';
import {BLACK, LIGHT_BLUE, PINK, WHITE} from '../../../assets/color/color';
const ResetPassword = ({navigation}) => {
  const gotoLogin = () => {
    navigation.navigate('Login');
  };
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <View style={styles.header}>
            <Image source={require('../../../assets/images/Logo_Ribbon.png')} />
            <TouchableOpacity activeOpacity={0.8} onPress={() => gotoLogin()}>
              <Text style={styles.forgotPw}>Login</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.topheading}>We have emailed you</Text>
          <Text style={styles.heading}>
            test@gmail.com
          </Text>
          <Text style={styles.heading}>
            Please follow the instructions on the email provided, if you did not
            receive an email please check your junk or spam folders
          </Text>
          <CustomButton stlye={styles.registerbtn} title="Retry" />
          <CustomButton
            txtStyle={styles.textStyle}
            stlye={styles.backbtn}
            title="Back"
            onPress={() => goBack()}
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
  forgotPw: {
    color: WHITE,
    fontSize: 14,
    fontFamily: Platform.OS=='ios'?'GothamBold':'Gotham',
    alignSelf: 'flex-end',
    paddingRight: 24,
    padding: 4,
  },
  registerbtn: {
    backgroundColor: PINK,
    borderWidth: 2,
    borderColor: PINK,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backbtn: {
    backgroundColor: WHITE,
    borderWidth: 2,
    borderColor: BLACK,
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
    fontFamily: Platform.OS=='ios'?'GothamBold':'Gotham',
  },
  topheading: {
    fontSize: 25,
    padding: 8,
    paddingLeft: 24,
    paddingTop: 10,
    color: PINK,
    fontFamily: Platform.OS=='ios'?'NexaRustScriptL-0':'NexaRust',
  },
});
export default ResetPassword;
