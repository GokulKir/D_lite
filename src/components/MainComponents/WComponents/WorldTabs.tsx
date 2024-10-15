import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/Foundation';
import Ripple from 'react-native-material-ripple';
import WorldList from './WorldListing/WorldList';
import OwnWorldList from './WorldListing/OwnWorldList';

export default function WorldTabs() {
  const [selected, setSelected] = useState(0);

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {/* First Tab */}
        <Ripple
          rippleDuration={300}
          rippleOpacity={0.5}
          rippleColor="#fff"
          style={[styles.TabOption, selected === 0 && styles.selectedTab]} // Conditionally apply style
          onPress={() => setSelected(0)} // Set selected tab
        >
          <Icon name="list" size={moderateScale(20)} color="#fff" />
        </Ripple>

        {/* Second Tab */}
        <Ripple
          rippleDuration={300}
          rippleOpacity={0.5}
          rippleColor="#fff"
          style={[styles.TabOption, selected === 1 && styles.selectedTab]} // Conditionally apply style
          onPress={() => setSelected(1)} // Set selected tab
        >
          <Icon1 name="social-myspace" size={moderateScale(21)} color="#fff" />
        </Ripple>
      </View>

      {/* Render the WorldList or any other content based on selected tab */}
      <View style={styles.content}>
        {selected === 0 ? <WorldList /> : <OwnWorldList />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1, // Make sure the wrapper takes up the full screen space
  },
  container: {
    width: '100%',
    height: verticalScale(40),
    flexDirection: 'row',
    backgroundColor: '#000',
  },
  TabOption: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2, // Default bottom border
    borderBottomColor: 'transparent', // Default color is transparent
  },
  selectedTab: {
    borderBottomColor: 'orange', // Color for the selected tab
  },
  content: {
    flex: 1, // This ensures that the content area expands to take the remaining space
    alignItems: 'center',
    padding: 5,
    marginTop: moderateScale(0),
  },
});
