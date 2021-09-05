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
import CustomTextInput from '../../../components/CustomTextInput';
import CustomButton from '../../../components/CustomButton';
import DatePicker from 'react-native-datepicker';
import Slider from '@react-native-community/slider';
import DropDownPicker from 'react-native-dropdown-picker';

const DogInformation = ({navigation}) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [level, setLevel] = useState('Small');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const[exact,setExact] = useState(true)
  const[breed,setBreed] = useState('')
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

  const gotoSurvey = () => {
    navigation.navigate('LandingScreen');
  };
  
  const weightStyles = StyleSheet.create({
    exactTitle: {
        paddingBottom: 8,
        fontSize: 15,
        fontFamily: Platform.OS == 'ios' ? 'GothamBold' : 'Gotham',
        color:exact?PINK: WHITE,  
        paddingTop: 20,
      },
      approxTitle: {
        paddingBottom: 8,
        fontSize: 15,
        fontFamily: Platform.OS == 'ios' ? 'GothamBold' : 'Gotham',
        color:exact==false?PINK: WHITE,  
        paddingTop: 20,
      },
  })

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView bounces={false}>
        <View>
          <View style={styles.header}>
            <Image source={require('../../../assets/images/Logo_Ribbon.png')} />

            <Text style={styles.forgotPw}>5/5</Text>
          </View>
          <Text style={styles.topheading}>Tell us about your dog</Text>
          <Text style={styles.heading}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </Text>
          <CustomTextInput
            label="Name"
            value={name}
            onChangeText={text => setName(text)}
          />
          <Text style={styles.subheading}>
            Dont have a name yet? You can add this later
          </Text>
          <Text style={styles.title}>Date of birth</Text>
          <View style={styles.input}>
            <View style={styles.dateView}>
              <Text style={styles.title1}>{date}</Text>
              <DatePicker
                date={date}
                mode="date"
                hideText={true}
                style={{width: 50}}
                format="YYYY-MM-DD"
                minDate="1920-01-01"
                maxDate={new Date()}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                onDateChange={date => {
                  setDate(date);
                }}
              />
            </View>
          </View>
          <Text style={styles.subheading}>
            Not sure about their birth date? Just select an approx date or day
            you celebrate their birthday
          </Text>
          <CustomTextInput
            label="Breed"
            value={breed}
            onChangeText={text => setBreed(text)}
          />
          <View style={styles.weightView}>
            <Text style={styles.title}>Weight</Text>
            <View style={styles.rowView}>
            <TouchableOpacity activeOpacity={0.8} onPress={()=>setExact(false)}>
                <Text style={weightStyles.approxTitle}>Approx</Text>
            </TouchableOpacity>
            <View style={styles.verticleLine}></View>
            <TouchableOpacity activeOpacity={0.8} onPress={()=>setExact(true)}>
                <Text style={weightStyles.exactTitle}>Exact</Text>
            </TouchableOpacity>
            </View>
            
          </View>
          
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
          <Text style={styles.title}>
          Use the slider to give an indication of size
          </Text>
          <Slider
            style={{height: 40, marginHorizontal: 24}}
            minimumValue={0}
            maximumValue={1}
            onValueChange={val => {
              if (val >= 0 && val < 0.3) {
                setLevel('Small');
              } else if (val >= 0.3 && val < 0.7) {
                setLevel('Medium');
              } else {
                setLevel('Large');
              }
            }}
            thumbTintColor={WHITE}
            minimumTrackTintColor={WHITE}
            maximumTrackTintColor={BLUE}
          />
          <Text style={styles.levels}>{level}</Text>
          <Text style={styles.subheading}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </Text>
          <CustomButton
            stlye={styles.registerbtn}
            onPress={() => gotoSurvey()}
            title="Finish"
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
    backgroundColor: LIGHT_BLUE,
  },
  dropdownlabelStyle: {
    fontWeight: 'bold',
  },
  weightView: {
    flexDirection: 'row',
    justifyContent:'space-between',
    
  },
  rowView: {
    flexDirection: 'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    marginRight:24,
  },
  verticleLine: {
    height: '50%',
    marginLeft:10,
    marginRight:10,
    width: 1,
    backgroundColor: '#909090',
  },
  title1: {
    paddingBottom: 8,
    fontSize: 15,
    fontFamily: Platform.OS == 'ios' ? 'GothamBold' : 'Gotham',
    color: WHITE,
    paddingLeft: 2,
    paddingTop: 10,
  },
  dateView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  levels: {
    paddingBottom: 8,
    fontSize: 16,
    fontFamily: Platform.OS == 'ios' ? 'GothamBold' : 'Gotham',
    color: PINK,
    paddingLeft: 24,
    paddingTop: 20,
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
  subheading: {
    fontSize: 13,
    padding: 6,
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 10,
    color: WHITE,
    fontFamily: Platform.OS == 'ios' ? 'GothamBold' : 'Gotham',
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

export default DogInformation;
