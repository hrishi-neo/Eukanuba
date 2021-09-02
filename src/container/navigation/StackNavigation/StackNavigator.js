import React from 'react';
import {View, Text} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from '../../screens/LandingScreen';
import Login from '../../screens/Auth/Login';
import Register from '../../screens/Auth/Register';
import ForgotPassword from '../../screens/Auth/ForgotPassword';
import ResetPassword from '../../screens/Auth/ResetPassword';
import OwnerProfileInformation from '../../screens/OwnerProfile/OwnerProfileInformation';
import OwnerSurveyIntro from '../../screens/OwnerSurvey/OwnerSurveyIntro';
import OwnerSurveyExtra from '../../screens/OwnerSurvey/OwnerSurveyExtra';
import OwnerSurveyLiving from '../../screens/OwnerSurvey/OwnerSurveyLiving';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LandingScreen" component={LandingScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ForgotPass" component={ForgotPassword} />
        <Stack.Screen name="ResetPass" component={ResetPassword} />
        <Stack.Screen name="OwnerProfileInfo" component={OwnerProfileInformation} />
        <Stack.Screen name="OwnerSurveyIntro" component={OwnerSurveyIntro} />
        <Stack.Screen name="OwnerSurveyLiving" component={OwnerSurveyLiving} />
        <Stack.Screen name="OwnerSurveyExtra" component={OwnerSurveyExtra} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
