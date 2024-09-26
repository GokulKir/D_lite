import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Fontisto';
import Icon3 from 'react-native-vector-icons/AntDesign';
import Icon4 from 'react-native-vector-icons/Feather';

export default function Drawers() {
  return (
    <View style={styles.container}>
      <View style={styles.FirstContainer}>
        <View style={styles.OuterFirstSide}>
          <View style={styles.ImageProfile}>
            <Image
              style={styles.ImageRound}
              source={{
                uri: 'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2280',
              }}
            />
          </View>

          <Text style={styles.UserText}>Gokul Krishna</Text>

          <Text style={styles.UserPhone}>+91 8590309480</Text>
        </View>

        <View style={styles.OuterSecondSide}>
          <View style={styles.OptionsSquar}>
            <Icon
              name="options-vertical"
              color="#49494a"
              size={moderateScale(10)}
            />
          </View>
        </View>
      </View>

      {/* <View style={styles.BottomLine}></View> */}

      <View style={styles.OptionBox}>
        <View style={styles.FirstSec}>
          <Icon1 name="account" color="#49494a" size={moderateScale(25)} />
        </View>

        <View style={styles.SecSection}>
          <Text style={styles.OptionText}>My Profile</Text>
        </View>
      </View>

      <View style={styles.BottomLine}></View>

      <View style={styles.OptionBox}>
        <View style={styles.FirstSec}>
          <Icon2 name="world" color="#49494a" size={moderateScale(19)} />
        </View>

        <View style={styles.SecSection}>
          <Text style={styles.OptionText}>New World</Text>
        </View>
      </View>

      <View style={styles.OptionBox}>
        <View style={styles.FirstSec}>
          <Icon3 name="contacts" color="#49494a" size={moderateScale(21)} />
        </View>

        <View style={styles.SecSection}>
          <Text style={styles.OptionText}>Contacts</Text>
        </View>
      </View>

      <View style={styles.OptionBox}>
        <View style={styles.FirstSec}>
          <Icon3 name="save" color="#49494a" size={moderateScale(23)} />
        </View>

        <View style={styles.SecSection}>
          <Text style={styles.OptionText}>Saved Messages</Text>
        </View>
      </View>

      <View style={styles.OptionBox}>
        <View style={styles.FirstSec}>
          <Icon2
            name="player-settings"
            color="#49494a"
            size={moderateScale(19)}
          />
        </View>

        <View style={styles.SecSection}>
          <Text style={styles.OptionText}>Settings</Text>
        </View>
      </View>

      <View style={styles.BottomLine}></View>

      <View style={styles.OptionBox}>
        <View style={styles.FirstSec}>
          <Icon3 name="adduser" color="#49494a" size={moderateScale(23)} />
        </View>

        <View style={styles.SecSection}>
          <Text style={styles.OptionText}>Invite Friends</Text>
        </View>
      </View>

      <View style={styles.OptionBox}>
        <View style={styles.FirstSec}>
          <Icon4 name="help-circle" color="#49494a" size={moderateScale(22)} />
        </View>

        <View style={styles.SecSection}>
          <Text style={styles.OptionText}>D-lite Features</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141218',
  },

  FirstContainer: {
    width: '100%',
    height: '22%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#000',
  },

  OuterFirstSide: {
    width: '70%',
    height: '100%',
    paddingLeft: moderateScale(20),
    paddingTop: moderateScale(25),
  },

  OuterSecondSide: {
    width: '30%',
    height: '100%',
    alignItems: 'center',
    paddingTop: moderateScale(30),
  },

  ImageProfile: {
    width: moderateScale(50),
    height: moderateScale(50),
    backgroundColor: 'violet',
    borderRadius: moderateScale(10),
  },
  ImageRound: {
    width: '100%',
    height: '100%',
    borderRadius: moderateScale(10),
  },
  UserText: {
    fontSize: moderateScale(15),
    color: '#fff',
    fontWeight: 'bold',
    marginTop: moderateScale(18),
  },
  UserPhone: {
    fontSize: moderateScale(12),
    color: '#646469',
    fontWeight: 'bold',
    marginTop: moderateScale(5),
  },

  OptionsSquar: {
    width: moderateScale(30),
    height: moderateScale(30),
    borderRadius: moderateScale(5),
    borderWidth: moderateScale(2),
    borderColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },

  BottomLine: {
    width: '100%',
    height: moderateScale(1),
    backgroundColor: '#303031',
    alignSelf: 'center',
    marginTop: moderateScale(5),
  },
  OptionBox: {
    width: '90%',
    height: verticalScale(45),
    alignSelf: 'center',
    marginTop: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  FirstSec: {
    width: '20%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  SecSection: {
    width: '80%',
    height: '100%',
    justifyContent: 'center',
  },
  OptionText: {
    color: '#adadaf',
    fontSize: moderateScale(15),
    fontWeight: '400',
  },
});
