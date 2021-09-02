import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {BLACK, PINK, WHITE} from '../assets/color/color';

const CustomList = ({label, showIcon, data}) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const renderItem = (item, index) => {
    const titleStyle = StyleSheet.create({
      itemTitle: {
        fontSize: 14,
        fontFamily: Platform.OS == 'ios' ? 'GothamBold' : 'Gotham',
        color: index == selectedItem ? PINK : BLACK,
      },
    });
    return (
      <View style={styles.itemView}>
        <TouchableOpacity onPress={() => setSelectedItem(index)}>
          <Text style={titleStyle.itemTitle}>{item.text}</Text>
          {showIcon == true ? <Icon name="navigate-next" size={32} /> : null}
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.main}>
      <Text style={styles.title}>{label}</Text>
      <FlatList
        data={data}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
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
  title: {
    fontSize: 16,
    marginLeft: 8,
    fontFamily: Platform.OS == 'ios' ? 'GothamBold' : 'Gotham',
    color: WHITE,
  },
  itemView: {
    margin: 8,
    flex: 1,
    height: 50,
    flexDirection: 'row',
    backgroundColor: WHITE,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 10,
    marginTop: 16,
  },
});
export default CustomList;
