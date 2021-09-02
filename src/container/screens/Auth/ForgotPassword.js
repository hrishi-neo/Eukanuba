import React,{useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Platform
} from 'react-native';
import {BLACK, LIGHT_BLUE, PINK, WHITE} from '../../../assets/color/color';
import CustomTextInput from '../../../components/CustomTextInput';
import CustomButton from '../../../components/CustomButton';

const ForgotPassword = ({navigation}) => {
  const[email,setEmail]=useState('')
  const goBack = () => {
    navigation.goBack();
  };
  const gotoResetPW=()=>{
    navigation.navigate('ResetPass')
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Image source={require('../../../assets/images/Logo_Ribbon.png')} />
          <Text style={styles.topheading}>Forgotten your password?</Text>
          <Text style={styles.heading}>
            Please enter your email address associated with your account. We
            will then send you instructions to your email
          </Text>
          <CustomTextInput label="Email" value={email} onChangeText={(text)=>setEmail(text)}/>
          <CustomButton onPress={()=>gotoResetPW()} stlye={styles.registerbtn} title="Reset password" />
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
export default ForgotPassword;
