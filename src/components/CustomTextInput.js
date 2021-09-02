import React, {useState} from 'react';
import {View, Text,Platform, TextInput, StyleSheet} from 'react-native';
import {BLUE, PINK, WHITE} from '../assets/color/color';

const CustomTextInput = ({onChangeText, label,value, secureTextEntry}) => {
  const [color, setColor] = useState(BLUE);
  const [txtcolor, setTextColor] = useState(BLUE);
  const styles = StyleSheet.create({
    input: {
      backgroundColor: color,
      padding: 4,
      borderRadius: 10,
      height: 50,
      color:txtcolor,
      fontFamily:Platform.OS=='ios'?'GothamBold':'Gotham',
      fontSize: 15,
    },
    main: {
      padding: 8,
      paddingHorizontal: 24,
      paddingTop:10
    },
    title: {
      paddingBottom: 8,
      fontSize: 15,
      fontFamily:Platform.OS=='ios'?'GothamBold':'Gotham',
      color:WHITE
     
    },
  });
  return (
    <View style={styles.main}>
      <Text style={styles.title}>{label}</Text>
      <TextInput
        style={styles.input}
         value={value}
         onChangeText={onChangeText}
        onFocus={() => {
          setColor(WHITE);
          setTextColor(BLUE);
        }}
        onBlur={() => {
          setTextColor(WHITE);
          setColor(BLUE);
         
        }}
        
        
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default CustomTextInput;
