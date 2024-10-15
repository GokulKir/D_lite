import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import Ripple from 'react-native-material-ripple';

export default function OptionModal({setVisible, visible}) {
  return (
    <Modal
      backdropOpacity={0}
      animationIn="slideInRight"
      animationOut="slideOutRight"
      onBackdropPress={() => setVisible(false)}
      isVisible={visible}
      style={styles.optionbox}>
      <View style={styles.OptionContainer}>
        <Ripple style={styles.OptionsOuterBox}>
          <Text style={styles.TextStyle}>Invite a firend</Text>
        </Ripple>

        <Ripple style={styles.OptionsOuterBox}>
          <Text style={styles.TextStyle}>Contacts</Text>
        </Ripple>

        <Ripple style={styles.OptionsOuterBox}>
          <Text style={styles.TextStyle}>Refresh</Text>
        </Ripple>

        <Ripple style={styles.OptionsOuterBox}>
          <Text style={styles.TextStyle}>Help</Text>
        </Ripple>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  optionbox: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    paddingTop: moderateScale(30),
  },
  OptionContainer: {
    width: moderateScale(180),
    height: verticalScale(190),
    backgroundColor: '#161616',
    borderRadius: moderateScale(10),
    elevation: moderateScale(3),
  },
  OptionsOuterBox: {
    width: '100%',
    height: verticalScale(47),
    justifyContent: 'center',
    paddingLeft: moderateScale(10),
  },
  TextStyle: {
    color: '#fff',
    fontSize: moderateScale(15),
    fontWeight: '400',
  },
});
