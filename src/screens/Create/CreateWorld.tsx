import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CreateHeader from '../../components/MainComponents/WComponents/CreateHeader';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import Ripple from 'react-native-material-ripple';
import {useNavigation} from '@react-navigation/native';

export default function CreateWorld() {
  const navigation = useNavigation();
  const puzzleimage = require('../../assets/earth.png');

  return (
    <View style={styles.container}>
      <CreateHeader />

      <Image style={styles.ImageStyle} source={puzzleimage} />

      <View style={styles.TextView}>
        <Text style={styles.OuterText}>Create a new world</Text>
      </View>

      <View style={styles.DescriptionTextContainer}>
        <Text style={styles.DesText}>
          This creates a community where people
        </Text>

        <Text style={styles.DesText}>
          from different areas, secretly connect to
        </Text>

        <Text style={styles.DesText}>
          provide you with a shared public space.
        </Text>

        <TouchableOpacity>
          <Text style={styles.TextSeeColor}>See example world</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.BottomContainer}>
        <Ripple
          onPress={() => navigation.navigate('TypeDetail')}
          style={styles.ButtonContainer}>
          <Text style={styles.TextStyle}>Get started</Text>
        </Ripple>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  ImageStyle: {
    width: moderateScale(120),
    height: moderateScale(120),
    marginTop: moderateScale(60),
  },
  TextView: {
    width: '90%',
    height: verticalScale(40),
    marginTop: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  OuterText: {
    color: '#fff',
    fontSize: moderateScale(18),
    fontWeight: 'bold',
  },
  DescriptionTextContainer: {
    width: '80%',
    height: verticalScale(80),
    alignItems: 'center',
  },
  DesText: {
    fontSize: moderateScale(15),
    fontWeight: '300',
    color: '#9c9a9a',
    marginTop: moderateScale(4),
  },
  BottomContainer: {
    width: '90%',
    height: verticalScale(80),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '60%',
  },
  ButtonContainer: {
    width: '90%',
    height: verticalScale(50),
    backgroundColor: 'orange',
    borderRadius: moderateScale(5),
    elevation: moderateScale(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextStyle: {
    color: '#000',
    fontSize: moderateScale(14),
    fontWeight: 'bold',
  },
  TextSeeColor: {
    color: '#0000EE',
    fontSize: moderateScale(15),
    marginTop: moderateScale(15),
    fontWeight: '400',
  },
});
