import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ripple from 'react-native-material-ripple';
import {useNavigation} from '@react-navigation/native';

const {height, width} = Dimensions.get('window');

export default function CreateHeader({setVisible}) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.FirstSec}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="clear" color="#a2a2a4" size={moderateScale(20)} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '95%',
    height: verticalScale(50),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
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
  },
});
