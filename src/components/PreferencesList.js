import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';


import PreferenceItem from './PreferenceItem';
const PreferencesList = ({data}) => {
   
    const renderItem = (item) => {
    
    return (
      <PreferenceItem item={item}/>
    );
  };
    return (
        <View style={styles.main}>
      
      <FlatList
        data={data}
        numColumns={3}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => renderItem(item, index)}
      />
    </View>
    )
}

const styles = StyleSheet.create({
    main: {
      margin: 16,
    },
   
  });
export default PreferencesList
