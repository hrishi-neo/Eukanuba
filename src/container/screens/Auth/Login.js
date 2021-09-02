import React, {useState} from 'react';
import {
  SafeAreaView,
  Platform,
  TouchableOpacity,
  Image,
  ScrollView,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {BLACK, LIGHT_BLUE, PINK, WHITE} from '../../../assets/color/color';
import CustomButton from '../../../components/CustomButton';
import CustomTextInput from '../../../components/CustomTextInput';
const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const goBack = () => {
    navigation.goBack();
  };

  const gotoRegister = () => {
    navigation.navigate('Register');
  };

  const gotoForgotPW = () => {
    navigation.navigate('ForgotPass');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <View style={styles.header}>
            <Image source={require('../../../assets/images/Logo_Ribbon.png')} />
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => gotoRegister()}>
              <Text style={styles.forgotPw}>Sign up</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.heading}>Login to your account</Text>
          <CustomTextInput
            label="Email"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <CustomTextInput
            label="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
          />
          <TouchableOpacity activeOpacity={0.8} onPress={() => gotoForgotPW()}>
            <Text style={styles.forgotPw}>Forgot Password?</Text>
          </TouchableOpacity>

          <CustomButton stlye={styles.registerbtn} title="Login" />
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
    fontFamily: Platform.OS == 'ios' ? 'GothamBold' : 'Gotham',
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
    fontSize: 25,
    padding: 8,

    paddingLeft: 24,
    paddingTop: 10,
    color: PINK,

    fontFamily: Platform.OS == 'ios' ? 'NexaRustScriptL-0' : 'NexaRust',
  },
});
export default Login;
