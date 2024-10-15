import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import WDesHeader from '../../components/MainComponents/WComponents/WDesHeader';
import {moderateScale, verticalScale} from 'react-native-size-matters';

export default function DesTyping() {
  return (
    <View style={styles.container}>
      <WDesHeader />

      <View style={styles.Inputtype}>
        <TextInput
          placeholder="Type your description"
          placeholderTextColor="#888" // Placeholder color
          multiline={true} // Allows multiple lines
          textAlignVertical="top" // Aligns text to the top
          style={styles.textInputStyle}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  Inputtype: {
    width: '90%',
    height: verticalScale(150), // Increased height for multiline text
    backgroundColor: '#212121',
    alignSelf: 'center',
    marginTop: moderateScale(15),
    borderRadius: moderateScale(8),
    borderBottomColor: '#fff',
    borderBottomWidth: moderateScale(0.6),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5, // Shadow on Android
  },
  textInputStyle: {
    width: '100%',
    height: '100%',
    paddingLeft: moderateScale(10),
    paddingTop: moderateScale(10), // Padding for multiline text
    color: '#fff', // Text color
    fontSize: moderateScale(16),
  },
});
