import {
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {moderateScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';

export default function Splash() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Mobile');
    }, 1500);
  }, []);

  const BackgroundImage = require('../../assets/bg.png');
  const Logo = require('../../assets/logo.png');
  const LogImage = require('../../assets/log.png');
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />

      <ImageBackground
        resizeMode="cover"
        style={styles.ImageContainer}
        source={BackgroundImage}>
        <Image style={styles.LogoImage} source={Logo} />
        <Image style={styles.Log} source={LogImage} />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ImageContainer: {
    flex: 1,
    opacity: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  LogoImage: {
    width: moderateScale(220),
    height: moderateScale(220),
  },
  Log: {
    width: moderateScale(110),
    height: moderateScale(20),
    top: '28%',
  },
});
