import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet, Image} from 'react-native';
import {LIGHT_BLUE, PINK, WHITE} from '../assets/color/color';
import CheckBox from '@react-native-community/checkbox';

const LifestageList = ({data}) => {
  const [isSelected, setSelection] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const renderItem = (item, index) => {
    const itemStyle = StyleSheet.create({
      itemTitle: {
        fontSize: 18,
        fontFamily: Platform.OS == 'ios' ? 'GothamBold' : 'Gotham',
        color: LIGHT_BLUE,
      },
      itemDesc: {
        fontSize: 14,
        fontFamily: Platform.OS == 'ios' ? 'GothamBold' : 'Gotham',
        color: WHITE,
        paddingTop: 10,
        alignSelf: 'center',
      },
      itemAge: {
        fontSize: 14,
        fontFamily: Platform.OS == 'ios' ? 'GothamBold' : 'Gotham',
        color: WHITE,
        alignSelf: 'flex-end',
      },
      splitView1: {
        flex: 0.4,
        height: 150,
        backgroundColor: WHITE,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
      },
      splitView2: {
        flex: 0.7,
        height: 150,
        padding: 12,
      },
      itemView: {
        margin: 8,
        height: 150,
        flexDirection: 'row',
        backgroundColor: item.bgColor,
        borderRadius: 10,
        marginTop: 16,
      },
      checkbox: {
        alignSelf: 'flex-end',
        paddingTop: 10,
      },
    });
    return (
      <View style={itemStyle.itemView}>
        <Image
          resizeMode="contain"
          style={itemStyle.splitView1}
          source={item.img}
        />

        <View style={itemStyle.splitView2}>
          <Text style={itemStyle.itemAge}>{item.age}</Text>
          <Text style={itemStyle.itemTitle}>{item.title}</Text>
          <Text style={itemStyle.itemDesc}>{item.description}</Text>
          <View style={itemStyle.checkbox}>
            <CheckBox
              value={isSelected && selectedItem == index}
              boxType="circle"
              onValueChange={() => {
                setSelection(true);
                setSelectedItem(index);
              }}
              tintColor={WHITE}
              onCheckColor={WHITE}
              onTintColor={WHITE}
              tintColors={{true: WHITE, false: WHITE}}
            />
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.main}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => renderItem(item, index)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    margin: 16,
  },
});
export default LifestageList;
