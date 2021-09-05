import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {
  BLACK,
  BLUE,
  LIGHT_BLUE,
  PINK,
  WHITE,
} from '../../../assets/color/color';
import DropDownPicker from 'react-native-dropdown-picker';
import CustomButton from '../../../components/CustomButton';
import CustomList from '../../../components/CustomList';
const data = [
  {id: 1, text: 'Yes'},
  {id: 2, text: 'No'},
  {id: 3, text: 'Sometimes'},
  {id: 4, text: 'Not applicable'},
];
const OwnerSurveyExtra = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: '1-10', value: '1-10'},
    {label: '11-20', value: '11-20'},
    {label: '21-30', value: '21-30'},
    {label: '31-40', value: '31-40'},
    {label: '40+', value: '40+'},
  ]);

  const goBack = () => {
    navigation.goBack();
  };
  const gotoNext = () => {
    navigation.navigate('OwnerPreferences');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.header}>
          <Image source={require('../../../assets/images/Logo_Ribbon.png')} />

          <Text style={styles.forgotPw}>2/5</Text>
        </View>
        <Text style={styles.topheading}>A couple more things</Text>
        <Text style={styles.heading}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </Text>
        <CustomList
          data={data}
          label="Do you work from home?"
          showIcon={false}
        />
        <Text style={styles.title}>Select amount hours you work per week?</Text>
        <View style={styles.dropDown}>
          <DropDownPicker
            listItemLabelStyle={styles.dropdownlabelStyle}
            labelStyle={styles.dropdownlabelStyle}
            placeholder=""
            listMode="FLATLIST"
            dropDownStyle={{backgroundColor: '#fff'}}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          />
        </View>
        <CustomButton
          stlye={styles.registerbtn}
          onPress={() => gotoNext()}
          title="Next"
        />
        <CustomButton
          txtStyle={styles.textStyle}
          stlye={styles.backbtn}
          title="Back"
          onPress={() => goBack()}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LIGHT_BLUE,
  },
  dropdownlabelStyle: {
    fontWeight: 'bold',
  },
  forgotPw: {
    color: WHITE,
    fontSize: 14,
    fontFamily: Platform.OS == 'ios' ? 'GothamBold' : 'Gotham',
    alignSelf: 'flex-end',
    paddingRight: 24,
    padding: 4,
  },
  dropDown: {
    paddingHorizontal: 24,
    paddingTop: 10,
    zIndex: 1,
  },
  title: {
    paddingBottom: 8,
    fontSize: 15,
    fontFamily: Platform.OS == 'ios' ? 'GothamBold' : 'Gotham',
    color: WHITE,
    paddingLeft: 24,
    paddingTop: 20,
  },
  registerbtn: {
    backgroundColor: PINK,
    borderWidth: 2,
    borderColor: PINK,
    marginTop: 20,
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
    fontSize: 16,
    padding: 6,
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 10,
    color: WHITE,
    fontFamily: Platform.OS == 'ios' ? 'GothamBold' : 'Gotham',
  },
  topheading: {
    fontSize: 25,
    padding: 8,
    paddingLeft: 24,
    paddingTop: 10,
    color: PINK,
    fontFamily: Platform.OS == 'ios' ? 'NexaRustScriptL-0' : 'NexaRust',
  },
});
export default OwnerSurveyExtra;
