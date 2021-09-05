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

import CustomButton from '../../../components/CustomButton';
import PreferencesList from '../../../components/PreferencesList';
const data = [
  {id: 1, text: 'Nutritional Advice' , src:'../../../assets/svgs/category1.svg'},
  {id: 2, text: 'Grooming & Hygeine',src:'../../../assets/svgs/category1.svg'},
  {id: 3, text: 'Walking & Fitness',src:'../../../assets/svgs/category3.svg'},
  {id: 4, text: 'Social Creature',src:'../../../assets/svgs/category4.svg'},
  {id: 5, text: 'Emotional Wellbeing',src:'../../../assets/svgs/category5.svg'},
  {id: 6, text: 'Discussing Expert Care',src:'../../../assets/svgs/category6.svg'},
  {id: 7, text: 'Other Category',src:'../../../assets/svgs/caegory7.svg'},
  {id: 8, text: 'Other Category',src:'../../../assets/svgs/category8.svg'},
  {id: 9, text: 'Other Category',src:'../../../assets/svgs/category9.svg'},
];
const OwnerPreferences = ({navigation}) => {
    const goBack = () => {
        navigation.goBack();
      };
    
      const gotoNext = () => {
        navigation.navigate('LifestageSelection');
      };
    return (
        <SafeAreaView style={styles.container}>
        <ScrollView bounces={false}>
          <View>
            <View style={styles.header}>
              <Image source={require('../../../assets/images/Logo_Ribbon.png')} />
  
              <Text style={styles.forgotPw}>3/5</Text>
            </View>
            <Text style={styles.topheading}>How can we help you and your dog?</Text>
            <Text style={styles.heading}>
              Select all the categories that you are interested in.
            </Text>
            <PreferencesList data={data}/>
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
    )
}
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
      justifyContent:'space-between',
      
    },
    rowView: {
      flexDirection: 'row',
      justifyContent:'space-evenly',
      alignItems:'center',
      marginRight:24,
    },
    verticleLine: {
      height: '50%',
      marginLeft:10,
      marginRight:10,
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
      marginTop: 10,
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
export default OwnerPreferences
