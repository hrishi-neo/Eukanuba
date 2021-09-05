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
import LifestageList from '../../../components/LifestageList';
import CustomButton from '../../../components/CustomButton';
const data = [
  {
    id: 1,
    title: 'Puppy',
    img:require('../../../assets/images/puppy.png'),
    age:'0-12 months',
    bgColor:'#B483AD',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  },
  {
    id: 2,
    img:require('../../../assets/images/junior.png'),
    title: 'Junior',
    age:'1-2 years',
    bgColor:'#CE9A67',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  },
  {
    id: 3,
    img:require('../../../assets/images/adult.png'),
    title: 'Adult',
    age:'2-6 years',
    bgColor:'#4F868E',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  },
  {
    id: 4,
    img:require('../../../assets/images/puppy.png'),
    title: 'Mature',
    age:'6-9 years',
    bgColor:'#3E86BA',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  },
  {
    id: 5,
    img:require('../../../assets/images/junior.png'),
    title: 'Senior',
    age:'9+ years',
    bgColor:'#EAA79F',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  },
];
const LifestageSelection = ({navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };

  const gotoNext = () => {
    navigation.navigate('DogInformation');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView bounces={false}>
        <View>
          <View style={styles.header}>
            <Image source={require('../../../assets/images/Logo_Ribbon.png')} />

            <Text style={styles.forgotPw}>4/5</Text>
          </View>
          <Text style={styles.topheading}>Tell us about your dog</Text>
          <Text style={styles.heading}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </Text>
          <LifestageList data={data} />
          <Text style={styles.topheading}>Own more than one dog</Text>
          <Text style={styles.heading}>
            Don’t worry you can add your other dogs, later on in the app
          </Text>
         
          <CustomButton
            stlye={styles.registerbtn}
            onPress={() => gotoNext()}
            title="Next"
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
  dropdownlabelStyle: {
    fontWeight: 'bold',
  },
  weightView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginRight: 24,
  },
  verticleLine: {
    height: '50%',
    marginLeft: 10,
    marginRight: 10,
    width: 1,
    backgroundColor: '#909090',
  },
  title1: {
    paddingBottom: 8,
    fontSize: 15,
    fontFamily: Platform.OS == 'ios' ? 'GothamBold' : 'Gotham',
    color: WHITE,
    paddingLeft: 2,
    paddingTop: 10,
  },
  dateView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  levels: {
    paddingBottom: 8,
    fontSize: 16,
    fontFamily: Platform.OS == 'ios' ? 'GothamBold' : 'Gotham',
    color: PINK,
    paddingLeft: 24,
    paddingTop: 20,
  },

  forgotPw: {
    color: WHITE,
    fontSize: 14,
    fontFamily: Platform.OS == 'ios' ? 'GothamBold' : 'Gotham',
    alignSelf: 'flex-end',
    paddingRight: 24,
    padding: 4,
  },
  dropDown: {
    paddingHorizontal: 24,
    paddingTop: 10,
    zIndex: 1,
  },
  title: {
    paddingBottom: 8,
    fontSize: 15,
    fontFamily: Platform.OS == 'ios' ? 'GothamBold' : 'Gotham',
    color: WHITE,
    paddingLeft: 24,
    paddingTop: 20,
  },
  registerbtn: {
    backgroundColor: PINK,
    borderWidth: 2,
    borderColor: PINK,
    marginTop: 20,
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
  subheading: {
    fontSize: 13,
    padding: 6,
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 10,
    color: WHITE,
    fontFamily: Platform.OS == 'ios' ? 'GothamBold' : 'Gotham',
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
export default LifestageSelection;
