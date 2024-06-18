import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
//   import PhoneLogo from "../../components/accountcomponent/PhoneLogo";
import {TextInput} from 'react-native-gesture-handler';
//   import CountryModal from "../../components/Modal/CountryModal";
//   import useCountryModal from "../../hooks/useCountryModal";
import axios from 'axios';
//   import LoadingModal from "../../components/Modal/PostModal/LoadingModal";
//   import useMobile from "../../hooks/api/useMobile";
import {Formik} from 'formik';
import * as Yup from 'yup';
import FastImage from 'react-native-fast-image';
import {useDispatch, useSelector} from 'react-redux';
import {setShowCode, setCountryState, setLoadingValue} from '../redux/action';
import CountryModal from '../../components/CountryModal';
import LoadingModal from '../../components/Modal/LoadingModal';
import { useNavigation } from '@react-navigation/native';
//   import useAuthStore from "../../hooks/useAuthStore";

const phoneSchema = Yup.object().shape({
  phone: Yup.string()
    .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits')
    .required('Phone number is required'),
});

export default function Mobile() {
  const navigation = useNavigation();
  const {width} = useWindowDimensions();
  const {showcode, countrystate, loadingValue} = useSelector(
    (state: any) => state.countryModal,
  ); // Ensure you're accessing state.countryModal

  const dispatch = useDispatch();
  //   const {setShowCode, showcode, countrystate, seLoading} = useCountryModal();
  // const { MobileAuth } = useMobile();
  // const { mobile, setMobile } = useAuthStore();

  const handleMobile = (values: any) => {
    //   MobileAuth(showcode ? `${showcode}+${values.phone}` : `+91${values.phone}`);
    //   seLoading(true);



    dispatch(setLoadingValue(true));

    setTimeout(() => {
      dispatch(setLoadingValue(false));
      navigation.navigate('Otp')
    }, 1500);
  };

  const openModal = () => {
    dispatch(setShowCode(!showcode));
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar hidden backgroundColor={'#000'} />

      <View
        style={{
          width: width,
          height: moderateScale(60),
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}>
        <Image
          style={{
            width: moderateScale(120),
            height: moderateScale(60),
            marginLeft: moderateScale(8),
          }}
          source={require('../../assets/headlogo.png')}
        />
      </View>
      {/* 
      <View style={styles.MobileHeader}>
        <Image
          style={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
          }}
          source={require('../../assets/mobile.gif')}
        />
      </View> */}

      <View
        style={{
          width: '50%',
          height: moderateScale(180),
          alignSelf: 'center',
          alignItems: 'center',
          marginTop: moderateScale(40),
        }}>
        <FastImage
          source={require('../../assets/mobile.gif')}
          style={{width: '100%', height: '100%', alignItems: 'center'}} // Adjust dimensions as needed
        />
      </View>

      <View style={styles.HeadTitle}>
        <Text style={styles.TextStyle}>Your Phone</Text>
      </View>

      <View style={styles.DesHead}>
        <Text style={styles.DesText}>
          We will send an SMS with a confirmation code to your phone number.
        </Text>
      </View>

      <Formik
        initialValues={{phone: ''}}
        validationSchema={phoneSchema}
        onSubmit={values => {
          console.log(values?.phone);
  
          handleMobile(values);
          // setMobile(values?.phone);
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <>
            <View style={styles.InputStyle}>
              <TouchableOpacity
                onPress={() => openModal()}
                style={{
                  width: '20%',
                  height: '100%',
                  backgroundColor: '#212121',
                  borderRadius: moderateScale(5),
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {countrystate ? (
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: moderateScale(13),
                      fontWeight: '400',
                    }}>
                    {countrystate}
                  </Text>
                ) : (
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: moderateScale(13),
                      fontWeight: '400',
                    }}>
                    +91
                  </Text>
                )}
              </TouchableOpacity>

              <View
                style={{
                  width: '78%',
                  height: '100%',
                  backgroundColor: '#212121',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: moderateScale(5),
                }}>
                <TextInput
                  onChangeText={handleChange('phone')}
                  onBlur={handleBlur('phone')}
                  value={values.phone}
                  keyboardAppearance="dark"
                  keyboardType="number-pad"
                  placeholder="Enter your mobile"
                  placeholderTextColor={'#7a7777'}
                  maxLength={10}
                  style={{
                    width: '90%',
                    height: '100%',
                    color: '#fff',
                    fontSize: moderateScale(14),
                  }}
                />
              </View>
            </View>

            <View
              style={{
                width: '80%',
                height: moderateScale(20),
                alignSelf: 'center',
                top: moderateScale(5),
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  width: '20%',
                  height: '100%',
                  borderRadius: moderateScale(0),
                  alignItems: 'center',
                  justifyContent: 'center',
                }}></View>

              <View
                style={{
                  width: '80%',
                  height: '100%',
                  borderRadius: moderateScale(0),
                  alignItems: 'flex-start',
                }}>
                {errors.phone && touched.phone ? (
                  <Text
                    style={{
                      color: 'red',
                      fontSize: moderateScale(11),
                      fontWeight: '400',
                      left: moderateScale(6),
                    }}>
                    {errors.phone}
                  </Text>
                ) : null}
              </View>
            </View>

            <View
              style={{
                width: width,
                height: moderateScale(60),
                marginTop: moderateScale(50),
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                onPress={handleSubmit}
                style={{
                  width: '80%',
                  height: moderateScale(50),
                  backgroundColor: '#fe9803',
                  borderRadius: moderateScale(5),
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: '#000',
                    fontSize: moderateScale(14),
                    fontWeight: 'bold',
                  }}>
                  Continue
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>

      <CountryModal />
      <LoadingModal />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    shadowOpacity: 0.5,
  },

  MobileHeader: {
    width: moderateScale(200),
    height: moderateScale(180),
    marginTop: moderateScale(40),
    alignItems: 'center',
    alignSelf: 'center',
  },
  HeadTitle: {
    width: moderateScale(220),
    height: moderateScale(30),
    marginTop: moderateScale(20),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  TextStyle: {
    color: '#fff',
    fontSize: moderateScale(17),
    fontWeight: '400',
    alignSelf: 'center',
  },
  DesHead: {
    width: '85%',
    height: moderateScale(40),
    marginTop: moderateScale(10),
    alignItems: 'center',
    alignSelf: 'center',
  },
  DesText: {
    color: '#fff',
    fontSize: moderateScale(12),
    fontWeight: '300',
    alignSelf: 'center',
  },
  InputStyle: {
    width: '80%',
    height: moderateScale(50),
    alignSelf: 'center',
    marginTop: moderateScale(15),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
