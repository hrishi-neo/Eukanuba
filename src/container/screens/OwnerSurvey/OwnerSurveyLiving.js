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
  {id: 1, text: 'Property type'},
  {id: 2, text: 'Property type'},
  {id: 3, text: 'Property type'},
  {id: 4, text: 'Property type'},
];
const OwnerSurveyLiving = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: '1-3', value: '1-3'},
    {label: '3-5', value: '3-5'},
    {label: '5-7', value: '5-7'},
    {label: '7-10', value: '7-10'},
    {label: '10+', value: '10+'},
  ]);
  const goBack = () => {
    navigation.goBack();
  };
  const gotoNext = () => {
    navigation.navigate('OwnerSurveyExtra');
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView bounces={false}>
        <View>
          <View style={styles.header}>
            <Image source={require('../../../assets/images/Logo_Ribbon.png')} />

            <Text style={styles.forgotPw}>1/5</Text>
          </View>
          <Text style={styles.topheading}>Lets get to know your lifestyle</Text>
          <Text style={styles.heading}>
            Tell us about your living arrangements so we can understand your
            dogs needs
          </Text>
          <CustomList
            data={data}
            label="Select where you live?"
            showIcon={false}
          />
          <CustomList
            data={data}
            label="Select your property's outdoor access"
            showIcon={false}
          />
          <Text style={styles.title}>
            Select the amount of people you live with?
          </Text>
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
          <CustomList
            data={data}
            label="Select your property's outdoor access"
            showIcon={false}
          />
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
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BLUE,
  },
  dropdownlabelStyle: {
    fontWeight: 'bold',
  },
  dropDown: {
    paddingHorizontal: 24,
    paddingTop: 10,
    zIndex: 1,
    paddingBottom: 20,
    position: 'relative',
  },
  dateView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    paddingBottom: 8,
    fontSize: 15,
    fontFamily: Platform.OS == 'ios' ? 'GothamBold' : 'Gotham',
    color: WHITE,
    paddingLeft: 24,
    paddingTop: 20,
  },
  levels: {
    paddingBottom: 8,
    fontSize: 16,
    fontFamily: Platform.OS == 'ios' ? 'GothamBold' : 'Gotham',
    color: PINK,
    paddingLeft: 24,
    paddingTop: 20,
  },
  title1: {
    paddingBottom: 8,
    fontSize: 15,
    fontFamily: Platform.OS == 'ios' ? 'GothamBold' : 'Gotham',
    color: WHITE,
    paddingLeft: 2,
    paddingTop: 10,
  },
  input: {
    backgroundColor: BLUE,
    padding: 4,
    borderRadius: 10,
    height: 50,
    marginHorizontal: 24,
    fontFamily: Platform.OS == 'ios' ? 'GothamBold' : 'Gotham',
    fontSize: 15,
    marginBottom: 10,
  },
  forgotPw: {
    color: WHITE,
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    paddingRight: 24,
    padding: 4,
  },
  registerbtn: {
    backgroundColor: PINK,
    borderWidth: 2,
    borderColor: PINK,
    marginTop: 20,
  },

  backbtn: {
    backgroundColor: WHITE,
    borderWidth: 2,
    borderColor: BLACK,
  },
  textStyle: {
    color: BLACK,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    padding: 4,
    fontWeight: 'bold',
    paddingLeft: 8,
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
export default OwnerSurveyLiving;
