import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Fontisto';
import Icon1 from 'react-native-vector-icons/Feather';

const {width, height} = Dimensions.get('window');

export default function SearchSection() {
  return (
    <View style={styles.container}>
      <View style={styles.BoxOption}>
        <Icon1 name="phone-call" size={moderateScale(18)} color="#c0c0c1" />
        <Text style={styles.TextStyle}>Calls</Text>
      </View>

      <View style={styles.BoxOption}>
        <Icon name="world-o" size={moderateScale(15)} color="" />
        <Text style={styles.TextStyle}>World</Text>
      </View>

      <View style={styles.BoxOption}>
        <Icon1 name="video" size={moderateScale(18)} color="#c0c0c1" />
        <Text style={styles.TextStyle}>Meet</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width - 10,
    height: moderateScale(50),
    alignSelf: 'center',
    marginTop: moderateScale(5),
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  BoxOption: {
    width: moderateScale(100),
    height: moderateScale(40),
    backgroundColor: '#141218',
    borderRadius: moderateScale(5),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  TextStyle: {
    color: '#c0c0c1',
    fontSize: moderateScale(13),
    marginLeft: moderateScale(10),
    fontWeight: '400',
  },
});
