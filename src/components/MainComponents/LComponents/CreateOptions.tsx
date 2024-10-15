import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Ripple from 'react-native-material-ripple';

const {height, width} = Dimensions.get('window');

export default function CreateOptions() {
  return (
    <View style={styles.container}>
      <Ripple rippleColor="#fff" style={styles.OptiionContainer}>
        <View style={styles.RoundContainer}>
          <Icon name="group" size={moderateScale(17)} color="#fff" />
        </View>

        <Text style={styles.FontText}>New world</Text>
      </Ripple>

      <Ripple rippleColor="#fff" style={styles.OptiionContainer}>
        <View style={styles.RoundContainer}>
          <Icon1 name="contacts" size={moderateScale(19)} color="#fff" />
        </View>

        <Text style={styles.FontText}>New contact</Text>
      </Ripple>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: verticalScale(120),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(5),
  },
  text: {
    color: '#fff',
    fontSize: moderateScale(14),
  },
  OptiionContainer: {
    width: '100%',
    height: verticalScale(50),
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: moderateScale(15),
    marginTop: moderateScale(17),
  },
  OptiionContainer1: {
    width: '100%',
    height: verticalScale(50),
  },
  RoundContainer: {
    width: moderateScale(40),
    height: moderateScale(40),
    backgroundColor: 'orange',
    borderRadius: moderateScale(100),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: moderateScale(3),
  },
  FontText: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    color: '#eaeaea',
    marginLeft: moderateScale(15),
  },
});
