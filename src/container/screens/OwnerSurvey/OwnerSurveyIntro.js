import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {
  BLACK,
  BLUE,
  LIGHT_BLUE,
  PINK,
  WHITE,
} from '../../../assets/color/color';

import CustomButton from '../../../components/CustomButton';

const OwnerSurveyIntro = ({navigation}) => {
    const goBack = () => {
        navigation.goBack();
      };
      const gotoSurvey = () => {
        navigation.navigate('OwnerSurveyLiving');
      };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView bounces={false}>
        <View>
          <Image source={require('../../../assets/images/Logo_Ribbon.png')} />
         
          <Text style={styles.topheading}>Lets make this pawsonal</Text>
          <Text style={styles.heading}>
            To help us curate your experience we have a short survey for you to
            complete on you and your pupin order to personalise the experirence.
          </Text>
          <Text style={styles.topheading}>It will take only 5 minutes</Text>
          <Text style={styles.heading}>
            We will ask questions on your lifestyle and what you want out of our assistance!

          </Text>
          <CustomButton stlye={styles.registerbtn} onPress={()=>gotoSurvey()} title="Take survey" />
          <Text style={styles.heading}>
            Don't worry you can take it later

          </Text>
          <CustomButton
            txtStyle={styles.textStyle}
            stlye={styles.backbtn}
            title="Skip for now"
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
    backgroundColor:BLUE
  },
  dateView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    paddingBottom: 8,
    fontSize: 15,
    fontFamily: Platform.OS == 'ios' ? 'GothamBold' : 'Gotham',
    color: WHITE,
    paddingLeft: 24,
    paddingTop: 20,
  },
  levels: {
    paddingBottom: 8,
    fontSize: 16,
    fontFamily: Platform.OS == 'ios' ? 'GothamBold' : 'Gotham',
    color: PINK,
    paddingLeft: 24,
    paddingTop: 20,
  },
  title1: {
    paddingBottom: 8,
    fontSize: 15,
    fontFamily: Platform.OS == 'ios' ? 'GothamBold' : 'Gotham',
    color: WHITE,
    paddingLeft: 2,
    paddingTop: 10,
  },
  input: {
    backgroundColor: BLUE,
    padding: 4,
    borderRadius: 10,
    height: 50,
    marginHorizontal: 24,
    fontFamily: Platform.OS == 'ios' ? 'GothamBold' : 'Gotham',
    fontSize: 15,
    marginBottom: 10,
  },
  forgotPw: {
    color: WHITE,
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    paddingRight: 24,
    padding: 4,
  },
  registerbtn: {
    backgroundColor: PINK,
    borderWidth: 2,
    borderColor: PINK,
    marginBottom:20
  },

  backbtn: {
    backgroundColor: WHITE,
    borderWidth: 2,
    borderColor: BLACK,
  },
  textStyle: {
    color: BLACK,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    padding: 4,
    fontWeight: 'bold',
    paddingLeft: 8,
  },
  heading: {
    fontSize: 16,
    padding: 6,
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 10,
    color: WHITE,
    fontFamily: Platform.OS == 'ios' ? 'GothamBold' : 'Gotham',
  },
  topheading: {
    fontSize: 25,
    padding: 8,
    paddingLeft: 24,
    paddingTop: 10,
    color: PINK,
    fontFamily: Platform.OS == 'ios' ? 'NexaRustScriptL-0' : 'NexaRust',
  },
});
export default OwnerSurveyIntro;
