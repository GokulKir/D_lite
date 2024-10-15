import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/Fontisto';
import Icon2 from 'react-native-vector-icons/SimpleLineIcons';
import Icon3 from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import Ripple from 'react-native-material-ripple';

const {height, width} = Dimensions.get('window');

export default function WDesHeader({setVisible}) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.FirstSec}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" color="#a2a2a4" size={moderateScale(20)} />
        </TouchableOpacity>
        <Text style={styles.TextStyle}>Type Description</Text>
      </View>

      <View style={styles.SecondSec}>
        <Ripple
          onPress={() => navigation.navigate('Create')}
          style={styles.OptionButton}>
          <Text style={styles.DoneText}>Done</Text>
        </Ripple>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: verticalScale(50),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  FirstSec: {
    width: '60%',
    height: '100%',
    alignItems: 'center',
    paddingLeft: moderateScale(25),
    flexDirection: 'row',
  },
  SecondSec: {
    width: '30%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  TextStyle: {
    color: '#fff',
    fontSize: moderateScale(17),
    fontWeight: 'bold',
    marginLeft: moderateScale(20),
  },
  OptionButton: {
    width: moderateScale(40),
    height: moderateScale(40),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(100),
    marginLeft: moderateScale(10),
  },
  DoneText: {
    color: 'orange',
    fontSize: moderateScale(14),
    fontWeight: 'bold',
  },
});
