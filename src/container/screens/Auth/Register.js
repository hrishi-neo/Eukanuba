import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Image,
  View,
  Text,
  StyleSheet,
  Platform
} from 'react-native';
import {BLACK, LIGHT_BLUE, PINK, WHITE} from '../../../assets/color/color';
import CustomButton from '../../../components/CustomButton';
import CustomTextInput from '../../../components/CustomTextInput';
import CheckBox from '@react-native-community/checkbox';

const Register = ({navigation}) => {
  const [isSelected, setSelection] = useState(false);
  const [mail, setMAil] = useState(false);
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[confirmPassword,setConfirmPassword]=useState('')
  const[firstName,setFirstName]=useState('')
  const[lastName,setLastName]=useState('')

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: LIGHT_BLUE,
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
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: 20,
      paddingLeft: 24,
      paddingRight: 24,
    },
    checkbox: {
      alignSelf: 'center',
     
      
      
    },
    label: {
      fontSize: 14,
      padding: 4,
      fontFamily: Platform.OS=='ios'?'GothamBold':'Gotham',
      paddingLeft: 8,
      color:isSelected ? PINK : WHITE
    },
    label2: {
      fontSize: 14,
      padding: 4,
      fontFamily: Platform.OS=='ios'?'GothamBold':'Gotham',
      paddingLeft: 8,
      color:mail ? PINK : WHITE
    },
    heading: {
      fontSize: 15,
      padding: 6,
      paddingLeft: 24,
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

  const goBack = () => {
    navigation.goBack();
  };
  const registerUser=()=>{
    navigation.navigate('OwnerProfileInfo')
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView bounces={false}>
        <View>
          <Image
            
            source={require('../../../assets/images/Logo_Ribbon.png')}
          />
          <Text style={styles.topheading}>Sign up to create an account</Text>
          <Text style={styles.heading}>
            Fill in your owner information below, we will ask you about your dog
            later on
          </Text>
          <CustomTextInput label="First name" value={firstName} onChangeText={(text)=>setFirstName(text)}/>
          <CustomTextInput label="Last name" value={lastName} onChangeText={(text)=>setLastName(text)}/>
          <CustomTextInput label="Email address" value={email} onChangeText={(text)=>setEmail(text)}  />
          <CustomTextInput label="Password" secureTextEntry={true} value={password} onChangeText={(text)=>setPassword(text)} />
          <CustomTextInput label="Confirm Password" secureTextEntry={true} value={confirmPassword} onChangeText={(text)=>setConfirmPassword(text)} />

          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelected}
              boxType="square"
              onValueChange={ setSelection}
              style={styles.checkbox}
             tintColor={WHITE}
             onCheckColor={PINK}
             onTintColor={PINK}
              tintColors={{true:PINK,false:WHITE}}
            />
            <Text style={styles.label}>
              I accept the full Terms and Conditions and Privacy Policy of
              Eukanuba
            </Text>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={mail}
              boxType="square"
              onValueChange={setMAil}
              style={styles.checkbox}
              tintColor={WHITE}
             onCheckColor={PINK}
             tintColors={{true:PINK,false:WHITE}}
             onTintColor={PINK}
            />
            <Text style={styles.label2}>
              I opt in to marketing updates via email from Eukanuba
            </Text>
          </View>

          <CustomButton stlye={styles.registerbtn} onPress={()=>registerUser()} title="Register now" />
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

export default Register;
