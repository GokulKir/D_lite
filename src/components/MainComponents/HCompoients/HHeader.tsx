import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/Fontisto';
import Ripple from 'react-native-material-ripple';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

export default function HHeader({userImg, LogoImg}) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.HeaderContainer}>
        <Ripple
          onPress={() => navigation.openDrawer()}
          rippleOpacity={1}
          rippleColor="#bbbbbf"
          rippleDuration={300}
          rippleContainerBorderRadius={100}
          style={styles.UserRound}>
          <Icon name="stream" color="#fff" size={moderateScale(20)} />
        </Ripple>

        <View style={styles.CenterLogo}>
          <Image style={styles.ILogo} source={LogoImg} />
        </View>

        <Ripple
          rippleOpacity={1}
          rippleColor="#bbbbbf"
          rippleDuration={300}
          rippleContainerBorderRadius={100}
          style={styles.SearchRound}>
          <Icon1 name="search" color="#fff" size={moderateScale(20)} />
        </Ripple>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: moderateScale(50),
    alignItems: 'center',
  },

  HeaderContainer: {
    width: '90%',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },

  UserRound: {
    width: moderateScale(36),
    height: moderateScale(36),
    borderRadius: moderateScale(100),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: moderateScale(5),
  },

  SearchRound: {
    width: moderateScale(36),
    height: moderateScale(36),
    borderRadius: moderateScale(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  CenterLogo: {
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: moderateScale(100),
    alignItems: 'center',
    justifyContent: 'center',
  },

  IUser: {
    width: moderateScale(15),
    height: moderateScale(15),
  },

  ILogo: {
    width: moderateScale(60),
    height: moderateScale(60),
  },
});
