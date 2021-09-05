import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {BLACK, PINK, WHITE} from '../assets/color/color';
import Category1 from '../assets/svgs/category1.svg';
import Category2 from '../assets/svgs/category9.svg';
import Category3 from '../assets/svgs/category3.svg';
import Category4 from '../assets/svgs/category4.svg';
import Category5 from '../assets/svgs/category5.svg';
import Category6 from '../assets/svgs/category6.svg';
import Category7 from '../assets/svgs/caegory7.svg';
import Category8 from '../assets/svgs/category8.svg';
import Category9 from '../assets/svgs/category9.svg';
import { SvgXml } from 'react-native-svg';

const PreferenceItem = ({item}) => {

  const [selectedItem, setSelectedItem] = useState(false);
  const titleStyle = StyleSheet.create({
    itemTitle: {
      fontSize: selectedItem ? 16 : 14,
      fontFamily: Platform.OS == 'ios' ? 'GothamBold' : 'Gotham',
      color: PINK,
      textAlign: 'center',
      paddingTop:10
    },
    itemView: {
      marginTop: selectedItem ? 5 : 15,
      flex: 1,
      height: selectedItem ? 150 : 130,
      justifyContent: 'center',
      backgroundColor: WHITE,
      borderRadius: 10,
      margin: selectedItem ? 4 : 8,
    },
  });
  return (
    <View style={titleStyle.itemView}>
      <TouchableOpacity
        onPress={() => {
          if (selectedItem == false) {
            setSelectedItem(true);
          } else {
            setSelectedItem(false);
          }
        }}>
    {item.id==1?<Category1 width={'90'} height={50} style={{margin: 6}} />:null}
    {item.id==2?<Category2 width={'90'} height={50} style={{margin: 6}} />:null}
    {item.id==3?<Category3 width={'90'} height={50} style={{margin: 6}} />:null}
    {item.id==4?<Category4 width={'90'} height={50} style={{margin: 6}} />:null}
    {item.id==5?<Category5 width={'90'} height={50} style={{margin: 6}} />:null}
    {item.id==6?<Category6 width={'90'} height={50} style={{margin: 6}} />:null}
    {item.id==7?<Category7 width={'90'} height={50} style={{margin: 6}} />:null}
    {item.id==8?<Category8 width={'90'} height={50} style={{margin: 6}} />:null}
    {item.id==9?<Category9 width={'90'} height={50} style={{margin: 6}} />:null}
        
        
        <Text style={titleStyle.itemTitle}>{item.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PreferenceItem;
