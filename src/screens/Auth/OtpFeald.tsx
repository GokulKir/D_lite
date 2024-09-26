import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {useRef} from 'react';
import {moderateScale} from 'react-native-size-matters';
import {TextInput} from 'react-native-gesture-handler';
import axios from 'axios';
import LoadingModal from '../../components/Modal/LoadingModal';
import {Formik} from 'formik';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import OTPTextInput from 'react-native-otp-textinput';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';

export default function OtpFeald() {
  const navigation = useNavigation();
  const {width} = useWindowDimensions();
  const otpInput = useRef();
  // const { MobileAuth } = useMobile();
  // const { mobile } = useAuthStore();

  // const handleMobile = () => {
  //   //   MobileAuth(mobile ? `${mobile}+${mobile}` : `+91${mobile}`);
  // };

  const handleOTPSuccess = otp => {
    console.log(otp);
  };

  return (
    <ScrollView style={styles.container}>
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

      <View style={styles.MobileHeader}>
        <FastImage
          source={require('../../assets/OTP.gif')}
          style={{width: '100%', height: '100%', alignItems: 'center'}} // Adjust dimensions as needed
        />
      </View>

      <View style={styles.HeadTitle}>
        <Text style={styles.TextStyle}>Enter OTP</Text>
      </View>

      <View style={styles.DesHead}>
        <Text style={styles.DesText}>
          Kindly enter the 6-digit code that has
        </Text>

        <Text style={styles.DesText}>been sent your number.</Text>

        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text style={styles.DesText}>ending in</Text>

          <Text
            style={{
              color: '#fb9407',
              fontSize: moderateScale(13),
              fontWeight: '400',
              alignSelf: 'center',
              marginLeft: moderateScale(5),
            }}>
            7895
          </Text>
        </View>
      </View>

      <Formik
        initialValues={{phone: ''}}
        onSubmit={values => handleMobile(values)}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <>
            <View style={styles.InputStyle}>
              <View
                style={{
                  width: '90%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: moderateScale(5),
                  alignSelf: 'center',
                }}>
                <OTPTextInput
                  ref={otpInput}
                  inputCount={6}
                  inputCellLength={1}
                  containerStyle={{marginBottom: 20}}
                  textInputStyle={{
                    width: 40,
                    height: 40,
                    borderBottomWidth: 1,
                    color: '#fff',
                    fontSize: moderateScale(13),
                  }}
                  tintColor="#03DAC6"
                  offTintColor="#BB86FC"
                  handleTextChange={text => console.log(`Current OTP: ${text}`)}
                />
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

            <View
              style={{
                width: width - 50,
                height: moderateScale(40),
                marginTop: moderateScale(60),
                alignSelf: 'center',
                alignItems: 'flex-start',
                justifyContent: 'center',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  color: '#c5c4c2',
                  fontWeight: '300',
                }}>
                I did't receive a code
              </Text>

              <TouchableOpacity onPress={() => navigation.navigate('Drawers')}>
                <Text
                  style={{
                    color: '#fb9407',
                    marginLeft: moderateScale(5),
                    fontWeight: '500',
                  }}>
                  Resend
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>

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
    height: moderateScale(60),
    alignSelf: 'center',
    marginTop: moderateScale(45),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
