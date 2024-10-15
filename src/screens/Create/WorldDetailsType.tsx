import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  Touchable,
} from 'react-native';
import React, {useState} from 'react';
import DetailTypeHeader from '../../components/MainComponents/WComponents/DetailTypeHeader';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/AntDesign';
import {useFormik} from 'formik';
import * as Yup from 'yup'; // For form validation
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Ripple from 'react-native-material-ripple';
import ImageCropPicker from 'react-native-image-crop-picker';
import {useDispatch} from 'react-redux';
import {setLoadingValue} from '../redux/action';
import {useNavigation} from '@react-navigation/native';

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  worldName: Yup.string().required('World name is required'),
});

export default function WorldDetailsType() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      worldName: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      console.log(values); // Handle form submission
      navigation.navigate('InviteWorld');
    },
  });

  const [image, setImage] = useState(null);

  const selectImage = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        Alert.alert('User cancelled image picker');
      } else if (response.errorMessage) {
        Alert.alert('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets[0]) {
        setImage(response.assets[0]?.uri);
      } else {
        Alert.alert('Unexpected Error');
      }
    });
  };

  const handleSubmit = () => {
    dispatch(setLoadingValue(true));
    formik.handleSubmit(); // Call the function

    setTimeout(() => {
      dispatch(setLoadingValue(false));
    }, 1500);
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <DetailTypeHeader />

      <Ripple onPress={() => selectImage()} style={styles.ProfileImage}>
        {image ? (
          <Image style={styles.imageStyle} source={{uri: image}} />
        ) : (
          <Icon name="account-group" size={moderateScale(60)} color="#96989b" />
        )}
      </Ripple>

      <View style={styles.ImageBottomContainer}>
        <Text style={styles.ImageBottomText}>Update Photo</Text>
      </View>

      <View style={styles.TextInput}>
        <TextInput
          placeholder="World name"
          placeholderTextColor={'#acadaf'}
          style={{width: '100%', height: '100%'}}
          onChangeText={formik.handleChange('worldName')}
          onBlur={formik.handleBlur('worldName')}
          value={formik.values.worldName}
        />
      </View>

      {formik.touched.worldName && formik.errors.worldName && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{formik.errors.worldName}</Text>
        </View>
      )}

      <Ripple
        onPress={() => navigation.navigate('Typing')}
        style={styles.TextInputSecond}>
        <Text style={styles.FontTextStyle}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </Text>
      </Ripple>

      <TouchableOpacity style={styles.fab} onPress={handleSubmit}>
        <Icon1 name="arrowright" size={moderateScale(26)} color="#fff" />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  ProfileImage: {
    width: moderateScale(100),
    height: moderateScale(100),
    backgroundColor: '#49494a',
    borderRadius: moderateScale(20),
    marginTop: moderateScale(50),
    elevation: moderateScale(2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: '95%',
    height: '95%',
    borderRadius: moderateScale(20),
  },
  UploadIconContainer: {
    width: '100%',
    height: verticalScale(20),
    top: moderateScale(8),
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  AddButtonView: {
    width: moderateScale(20),
    height: moderateScale(20),
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(100),
    left: moderateScale(2),
  },
  ImageBottomContainer: {
    width: '50%',
    height: verticalScale(30),
    marginTop: moderateScale(8),
    alignItems: 'center',
  },
  ImageBottomText: {
    color: '#acadaf',
    fontSize: moderateScale(13),
    fontWeight: 'bold',
  },
  TextInput: {
    width: '90%',
    height: verticalScale(45),
    backgroundColor: '#212121',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(20),
    borderRadius: moderateScale(5),
    paddingLeft: moderateScale(10),
    borderBottomWidth: moderateScale(0.5),
    borderBottomColor: '#abacad',
  },
  TextInputSecond: {
    width: '90%',
    height: verticalScale(95),
    backgroundColor: '#212121',
    marginTop: moderateScale(20),
    borderRadius: moderateScale(5),
    paddingLeft: moderateScale(10),
    borderBottomWidth: moderateScale(0.5),
    borderBottomColor: '#abacad',
  },
  fab: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 30,
    right: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  errorText: {
    color: 'red',
    fontSize: moderateScale(11),
  },
  errorContainer: {
    width: '90%',
    justifyContent: 'center',
  },
  FontTextStyle: {
    color: '#757575',
    fontSize: moderateScale(13),
  },
});
