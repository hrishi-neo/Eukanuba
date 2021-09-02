import React from 'react';
import {View, Text,Platform, TouchableOpacity, StyleSheet} from 'react-native';

const CustomButton = ({title, stlye, txtStyle, onPress}) => {
  const styles = StyleSheet.create({
    main: {
      padding: 8,
      marginHorizontal: 24,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      height: 60,
    },
    container: {
      paddingTop: 20,
    },
    title: {
      fontSize: 18,
      fontFamily: Platform.OS=='ios'?'GothamBold':'Gotham',
      color: '#fff',
    },
  });
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <View style={[stlye, styles.main]}>
          <Text style={[styles.title, txtStyle]}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
