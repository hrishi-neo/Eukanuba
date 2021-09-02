import React, {useState} from 'react';
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
import CustomTextInput from '../../../components/CustomTextInput';
import CustomButton from '../../../components/CustomButton';
import DatePicker from 'react-native-datepicker';
import Slider from '@react-native-community/slider';

const OwnerProfileInformation = ({navigation}) => {
  const [nickName, setNickName] = useState('');
  const [date, setDate] = useState(null);
  const [level, setLevel] = useState('beginner');

  const goBack = () => {
    navigation.goBack();
  };

  const gotoSurvey = () => {
    navigation.navigate('OwnerSurveyIntro');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <View style={styles.header}>
            <Image source={require('../../../assets/images/Logo_Ribbon.png')} />
            <TouchableOpacity activeOpacity={0.8} onPress={() => goBack()}>
              <Text style={styles.forgotPw}>Skip</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.topheading}>Lets get to know you</Text>
          <Text style={styles.heading}>
            We would love to know more about you, your just as important to us
            as your dog!
          </Text>
          <CustomTextInput label="Do you have a nickname?" value={nickName} onChangeText={(text)=>setNickName(text)}/>
          <Text style={styles.title}>When were you born?</Text>
          <View style={styles.input}>
            <View style={styles.dateView}>
              <Text style={styles.title1}>{date}</Text>
              <DatePicker
                date={date}
                mode="date"
                hideText={true}
                style={{width: 50}}
                format="YYYY-MM-DD"
                minDate="1920-01-01"
                maxDate={new Date()}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                onDateChange={date => {
                  setDate(date);
                }}
              />
            </View>
          </View>
          <Text style={styles.title}>
            How experience are you as a dog owner?
          </Text>
          <Slider
            style={{height: 40, marginHorizontal: 24}}
            minimumValue={0}
            maximumValue={1}
            onValueChange={val => {
              if (val >= 0 && val < 0.4) {
                setLevel('beginner');
              } else if (val >= 0.4 && val < 0.7) {
                setLevel('intermediate');
              } else {
                setLevel('expert');
              }
            }}
            thumbTintColor={WHITE}
            minimumTrackTintColor={WHITE}
            maximumTrackTintColor={BLUE}
          />
          <Text style={styles.levels}>I am {level}</Text>
          <CustomButton
            stlye={styles.registerbtn}
            onPress={() => gotoSurvey()}
            title="Continue"
          />
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
    paddingBottom: 20,
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
export default OwnerProfileInformation;
